(() => {
  const cfg = window.INKNOTE_CONFIG || {};
  const siteUrl = String(cfg.siteUrl || '').trim().replace(/\/$/, '');
  if (!siteUrl) return;
  const path = location.pathname.split('/').pop() || 'index.html';
  const canonicalUrl = siteUrl + '/' + (path === 'index.html' ? '' : path);
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = canonicalUrl;
})();
