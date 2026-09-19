/* InkNote v27 native attachment worker.
 * The page stores the generated PDF in Cache Storage with Content-Disposition:
 * attachment. This worker serves that exact same-origin response to a top-level
 * Safari navigation, which invokes Safari's native download UI instead of a PDF
 * preview tab. No generated file is uploaded to a server.
 */
const CACHE_NAME='inknote-native-downloads-v27';
const MARKER='/__inknote_download__/';
self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  await self.clients.claim();
  const names=await caches.keys();
  await Promise.all(names.filter(n=>n.startsWith('inknote-native-downloads-')&&n!==CACHE_NAME).map(n=>caches.delete(n)));
})()));
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);if(!url.pathname.includes(MARKER))return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE_NAME),match=await cache.match(event.request.url);
    if(!match)return new Response('Download expired',{status:404,headers:{'Cache-Control':'no-store'}});
    return match;
  })());
});
