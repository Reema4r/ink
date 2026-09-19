/* InkNote v24 native download worker.
 * Stores the generated file in Cache Storage, then serves a one-time same-origin
 * navigation with Content-Disposition: attachment. This survives worker sleep and
 * reliably triggers Safari's native View / Download sheet on iPhone and iPad.
 */
const CACHE_NAME='inknote-native-downloads-v24';
const MARKER='/__inknote_download__/';

self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  await self.clients.claim();
  const names=await caches.keys();
  await Promise.all(names.filter(n=>n.startsWith('inknote-native-downloads-')&&n!==CACHE_NAME).map(n=>caches.delete(n)));
})()));

function asciiFallbackName(name){
  let value=String(name||'inknote.pdf').normalize('NFKD').replace(/[^\x20-\x7E]+/g,'_').replace(/[\\/\r\n";]+/g,'_').replace(/_+/g,'_').trim();
  if(!value||value==='.pdf')value='inknote.pdf';
  if(!/\.pdf$/i.test(value))value+='.pdf';
  return value.slice(0,120);
}
function contentDisposition(name){
  const real=String(name||'inknote.pdf').replace(/[\r\n]/g,' ');
  const ascii=asciiFallbackName(real);
  const encoded=encodeURIComponent(real).replace(/[!'()*]/g,c=>'%'+c.charCodeAt(0).toString(16).toUpperCase());
  return `attachment; filename="${ascii}"; filename*=UTF-8''${encoded}`;
}

self.addEventListener('message',event=>{
  const data=event.data||{};
  if(data.type!=='INKNOTE_DOWNLOAD_V24'||!data.token||!data.path||!(data.buffer instanceof ArrayBuffer))return;
  event.waitUntil((async()=>{
    try{
      const url=new URL(data.path,self.location.href).href;
      const headers=new Headers({
        'Content-Type':data.mime||'application/pdf',
        'Content-Disposition':contentDisposition(data.filename),
        'Cache-Control':'no-store, max-age=0',
        'Pragma':'no-cache',
        'X-Content-Type-Options':'nosniff'
      });
      const cache=await caches.open(CACHE_NAME);
      await cache.put(url,new Response(data.buffer,{status:200,headers}));
      event.ports?.[0]?.postMessage({ok:true});
      setTimeout(()=>cache.delete(url),5*60*1000);
    }catch(error){
      event.ports?.[0]?.postMessage({ok:false,error:String(error?.message||error)});
    }
  })());
});

self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);
  if(!url.pathname.includes(MARKER))return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE_NAME);
    const match=await cache.match(event.request.url);
    if(!match)return new Response('Download expired',{status:404,headers:{'Cache-Control':'no-store'}});
    await cache.delete(event.request.url);
    return match;
  })());
});
