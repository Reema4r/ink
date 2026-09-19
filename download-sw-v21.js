/* InkNote v21 direct-download service worker.
 * Receives a client-generated Blob and serves it once with Content-Disposition.
 * Header values stay ASCII-safe; the real UTF-8 filename is carried in filename*.
 */
const downloads = new Map();

self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('message', event => {
  const data = event.data || {};
  if (data.type !== 'INKNOTE_DOWNLOAD' || !data.token || !(data.blob instanceof Blob)) return;
  downloads.set(String(data.token), {
    blob: data.blob,
    mime: data.mime || data.blob.type || 'application/octet-stream',
    filename: data.filename || 'inknote.pdf',
    createdAt: Date.now()
  });
  setTimeout(() => downloads.delete(String(data.token)), 5 * 60 * 1000);
  if (event.ports && event.ports[0]) event.ports[0].postMessage({ ok: true });
});

function asciiFallbackName(name) {
  let value = String(name || 'inknote.pdf')
    .normalize('NFKD')
    .replace(/[^\x20-\x7E]+/g, '_')
    .replace(/[\\/\r\n\";]+/g, '_')
    .replace(/_+/g, '_')
    .trim();
  if (!value || value === '.pdf') value = 'inknote.pdf';
  if (!/\.pdf$/i.test(value)) value += '.pdf';
  return value.slice(0, 120);
}

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const marker = '/__inknote_download__/';
  const index = url.pathname.indexOf(marker);
  if (index < 0) return;

  event.respondWith((async () => {
    try {
      const rest = url.pathname.slice(index + marker.length);
      const token = decodeURIComponent(rest.split('/')[0] || '');
      const item = downloads.get(token);
      if (!item) return new Response('Download expired', { status: 404, headers: { 'Cache-Control': 'no-store' } });
      downloads.delete(token);

      const realName = String(item.filename || 'inknote.pdf').replace(/[\r\n]/g, ' ');
      const asciiName = asciiFallbackName(realName);
      const encodedName = encodeURIComponent(realName).replace(/[!'()*]/g, c => '%' + c.charCodeAt(0).toString(16).toUpperCase());
      const headers = new Headers();
      headers.set('Content-Type', item.mime || 'application/pdf');
      headers.set('Content-Disposition', `attachment; filename="${asciiName}"; filename*=UTF-8''${encodedName}`);
      headers.set('Cache-Control', 'no-store, max-age=0');
      headers.set('X-Content-Type-Options', 'nosniff');
      return new Response(item.blob, { status: 200, headers });
    } catch (error) {
      console.error('[InkNote] download response failed', error);
      return new Response('Could not prepare download', { status: 500, headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' } });
    }
  })());
});
