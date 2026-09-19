/*
 * InkNote PDF loader
 * Prefer the broadly-compatible PDF.js 3.11.174 classic build.
 * If one CDN is blocked, automatically try another, then fall back to
 * the bundled modern ESM build. The PDF.js library and worker always use
 * the same version/source to avoid worker/library mismatches.
 */
(function () {
  'use strict';

  function loadClassicPdfJs(src, workerSrc) {
    return new Promise(function (resolve, reject) {
      if (window.pdfjsLib && window.pdfjsLib.getDocument) {
        try { window.pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc; } catch (_) {}
        resolve(window.pdfjsLib);
        return;
      }
      var script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.referrerPolicy = 'no-referrer';
      script.onload = function () {
        if (!window.pdfjsLib || !window.pdfjsLib.getDocument) {
          reject(new Error('PDF.js loaded without pdfjsLib'));
          return;
        }
        try { window.pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc; } catch (_) {}
        resolve(window.pdfjsLib);
      };
      script.onerror = function () { reject(new Error('Could not load PDF.js from ' + src)); };
      document.head.appendChild(script);
    });
  }

  async function loadModernBundledPdfJs() {
    /* Compatibility helpers used by newer PDF.js builds. */
    if (!Map.prototype.getOrInsertComputed) {
      Object.defineProperty(Map.prototype, 'getOrInsertComputed', {
        configurable: true,
        writable: true,
        value: function (key, callback) {
          if (this.has(key)) return this.get(key);
          var value = callback(key);
          this.set(key, value);
          return value;
        }
      });
    }
    if (!Promise.withResolvers) {
      Promise.withResolvers = function () {
        var resolve, reject;
        var promise = new Promise(function (res, rej) { resolve = res; reject = rej; });
        return { promise: promise, resolve: resolve, reject: reject };
      };
    }
    if (typeof Response !== 'undefined' && !Response.prototype.bytes) {
      Response.prototype.bytes = async function () { return new Uint8Array(await this.arrayBuffer()); };
    }
    if (typeof URL !== 'undefined' && !URL.parse) {
      URL.parse = function (url, base) {
        try { return new URL(url, base); } catch (_) { return null; }
      };
    }

    var module = await import('./vendor/pdf.min.js?v=24');
    module.GlobalWorkerOptions.workerSrc = './vendor/pdf.worker.min.js?v=24';
    window.pdfjsLib = module;
    return module;
  }

  window.pdfjsReady = (async function () {
    var sources = [
      {
        lib: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
        worker: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
      },
      {
        lib: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js',
        worker: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js'
      },
      {
        lib: 'https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.min.js',
        worker: 'https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js'
      }
    ];

    var lastError = null;
    var ua = navigator.userAgent || '';
    var appleTouch = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    // iPhone/iPad: prefer the stable classic 3.11 renderer first.
    // The previous bundled 5.x path produced incorrect glyph spacing on Safari
    // with a broad set of Arabic and Latin PDFs. Keep the modern build only
    // as a fallback when every classic source is unavailable.
    for (var i = 0; i < sources.length; i++) {
      try {
        return await loadClassicPdfJs(sources[i].lib, sources[i].worker);
      } catch (err) {
        lastError = err;
        console.warn('[InkNote] PDF.js source failed:', sources[i].lib, err);
      }
    }

    try {
      return await loadModernBundledPdfJs();
    } catch (err) {
      console.error('[InkNote] All PDF.js loaders failed.', err, lastError);
      throw (lastError || err);
    }
  })();

  window.ensurePdfLib = function () {
    if (window.PDFLib) return Promise.resolve(window.PDFLib);
    if (window.pdfLibReady) return window.pdfLibReady;
    window.pdfLibReady = new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.src = './vendor/pdf-lib.min.js?v=24';
      script.onload = function () { resolve(window.PDFLib); };
      script.onerror = reject;
      document.head.appendChild(script);
    });
    return window.pdfLibReady;
  };
})();
