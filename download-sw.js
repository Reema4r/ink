/* InkNote v19 direct-download service worker.
 * Stores client-generated files briefly in memory and serves them back with
 * Content-Disposition: attachment so browsers can treat them as downloads.
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
  if (data.type !== 'INKNOTE_DOWNLOAD' || !data.token || !data.bytes) return;
  downloads.set(String(data.token), {
    bytes: data.bytes,
    mime: data.mime || 'application/octet-stream',
    filename: data.filename || 'inknote.pdf',
    createdAt: Date.now()
  });
  // Remove abandoned payloads after five minutes.
  setTimeout(() => downloads.delete(String(data.token)), 5 * 60 * 1000);
  if (event.ports && event.ports[0]) event.ports[0].postMessage({ ok: true });
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const marker = '/__inknote_download__/';
  const index = url.pathname.indexOf(marker);
  if (index < 0) return;

  event.respondWith((async () => {
    const rest = url.pathname.slice(index + marker.length);
    const token = decodeURIComponent(rest.split('/')[0] || '');
    const item = downloads.get(token);
    if (!item) return new Response('Download expired', { status: 404 });
    downloads.delete(token);
    const safeName = String(item.filename).replace(/[\r\n"]/g, '_');
    return new Response(item.bytes, {
      headers: {
        'Content-Type': item.mime,
        'Content-Length': String(item.bytes.byteLength || item.bytes.length || 0),
        'Content-Disposition': `attachment; filename="${safeName}"; filename*=UTF-8''${encodeURIComponent(safeName)}`,
        'Cache-Control': 'no-store, max-age=0',
        'X-Content-Type-Options': 'nosniff'
      }
    });
  })());
});
