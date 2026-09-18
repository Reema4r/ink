(() => {
  const ar = document.querySelector('.ar');
  const en = document.querySelector('.en');
  const btn = document.querySelector('#legalLang');
  let lang = new URLSearchParams(location.search).get('lang') || localStorage.getItem('inknoteLang') || localStorage.getItem('inksyLang') || 'ar';
  function set(v){
    lang=v==='en'?'en':'ar';
    if(ar) ar.hidden=lang!=='ar';
    if(en) en.hidden=lang!=='en';
    document.documentElement.lang=lang;
    document.documentElement.dir=lang==='ar'?'rtl':'ltr';
    if(btn) btn.textContent=lang==='ar'?'EN':'ع';
    localStorage.setItem('inknoteLang',lang);
  }
  if(btn) btn.onclick=()=>set(lang==='ar'?'en':'ar');

  const cfg=window.INKNOTE_CONFIG||{};
  const email=String(cfg.contactEmail||cfg.supportEmail||'').trim();
  document.querySelectorAll('[data-contact-email]').forEach(el=>{
    if(email){
      el.textContent=email;
      if(el.tagName==='A') el.href='mailto:'+email;
      el.hidden=false;
    }else{
      el.hidden=true;
    }
  });
  document.querySelectorAll('[data-contact-missing]').forEach(el=>el.hidden=!!email);
  set(lang);
})();
