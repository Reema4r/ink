/* InkNote v28 native PDF download worker. */
const CACHE_NAME='inknote-native-downloads-v28';
const MARKER='/__inknote_download__/';
self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{await self.clients.claim();const names=await caches.keys();await Promise.all(names.filter(n=>n.startsWith('inknote-native-downloads-')&&n!==CACHE_NAME).map(n=>caches.delete(n)));})()));
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(!url.pathname.includes(MARKER))return;event.respondWith((async()=>{const cache=await caches.open(CACHE_NAME),match=await cache.match(event.request.url);if(!match)return new Response('Download expired',{status:404,headers:{'Cache-Control':'no-store'}});return match;})());});
