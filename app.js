(() => {
  'use strict';

  const $ = (q, root = document) => root.querySelector(q);
  const $$ = (q, root = document) => [...root.querySelectorAll(q)];
  const cfg = window.INKNOTE_CONFIG || window.INKSY_CONFIG || {};
  const tr = {
    ar: {
      savedLocal:'',back:'رجوع',upgrade:'',download:'تنزيل',privateBadge:'',heroTitle:'اكتب على ملفك<br><em>كأنه ورق.</em>',heroText:'للكتابة والرسم والتعليق والتوقيع. افتح أي PDF وابدأ فوراً بالقلم أو اللمس.',uploadTitle:'ارفع ملف PDF',uploadHint:'اسحبه هنا أو اختره — حتى 300 MB',chooseFile:'اختيار ملف',continueWork:'متابعة العمل',noUpload:'',penReady:'متوافق مع أقلام الأجهزة',smartInk:'رسم ذكي',palm:'راحة اليد',smart:'الأشكال الذكية',straightHoldHint:'ارسم شكلاً ثم ثبّت القلم 3 ثوانٍ لتحويله تلقائياً إلى خط أو مستطيل أو دائرة.',openingFile:'نفتح ملفك…',pages:'الصفحات',saved:'تم الحفظ',adLabel:'إعلان',adSpace:'مساحة إعلانية',removeAds:'',pricingTitle:'',pricingText:'',monthly:'',free:'مجاني',sar:'',perMonth:'',featureNoWatermark:'',featureNoAds:'',featureSave:'',subscriptionDuration:'',featureQuality:'',featureBasicTools:'',featureLocalSave:'',featurePremiumTools:'',freeWatermarkFeature:'',subscribe:'',securePay:'',continueFree:'',signature:'التوقيع',drawSignature:'ارسم توقيعك',signatureHint:'استخدم القلم أو إصبعك.',signHere:'وقّع هنا',clear:'مسح',useSignature:'استخدام التوقيع',exportTitle:'ملفك جاهز',exportText:'سيتم دمج كتابتك داخل الملف ليعمل على أي جهاز.',freeWatermark:'',upgradeRemoves:'',downloadPdf:'تنزيل PDF',downloadChoiceTitle:'ملفك جاهز',downloadChoiceText:'سمّ الملف ثم اختر عرضه أو تنزيله بصيغة PDF.',viewFile:'عرض',downloadNow:'تنزيل',privacy:'الخصوصية',terms:'الشروط',about:'عن InkNote',howToUse:'طريقة الاستخدام',faq:'الأسئلة الشائعة',contact:'تواصل',expires:'محفوظ حتى',invalidPdf:'اختر ملف PDF صالحًا.',pdfReadFail:'تعذر قراءة الملف من جهازك. جرّب اختياره مرة أخرى.',pdfEngineFail:'تعذر تشغيل قارئ PDF. تحقق من اتصال الإنترنت ثم أعد المحاولة.',pdfOpenFail:'تعذر فتح هذا الملف. قد يكون تالفًا أو محميًا بكلمة مرور.',tooLarge:'الملف أكبر من الحد المسموح.',opened:'تم فتح الملف',saveFailed:'تعذر الحفظ في هذا المتصفح.',restored:'تمت استعادة ملفك',textPrompt:'اكتب النص الذي تريد إضافته',placeSignature:'اضغط على الصفحة لوضع التوقيع',signatureReady:'توقيعك جاهز للوضع',exporting:'جارٍ تجهيز الملف…',exported:'تم تنزيل الملف',exportFail:'تعذر تجهيز الملف. جرّب مرة أخرى.',checkoutMissing:'',emptySignature:'ارسم توقيعك أولًا.',adRemoved:'',pagesCount:'صفحة',freePlan:'مجاني · جميع المزايا',plusPlan:'',rewardPlan:'',rename:'اسم الملف الجديد',whiteboard:'سبورة ذكية',whiteboardHint:'ابدأ مساحة فارغة للكتابة والرسم والأفكار ثم صدّرها PDF',whiteboardName:'سبورة جديدة.pdf',yourFiles:'ملفاتك',recentFiles:'الملفات السابقة',pdfType:'ملف PDF',boardType:'سبورة',openFile:'فتح',deleteFile:'حذف',deleted:'تم حذف الملف',boardLabel:'سبورة ذكية',inkColor:'اللون',inkSize:'السماكة',panTool:'تحريك الصفحة',undo:'تراجع',redo:'إعادة',chooseBoardOrientation:'اختر اتجاه السبورة',chooseBoardOrientationHint:'اختر الاتجاه المناسب للسبورة قبل البدء. يمكنك تغييره بإنشاء سبورة جديدة.',portrait:'عمودي',landscape:'أفقي',textTool:'نص',editText:'تحرير النص',textEditorHint:'اكتب النص ثم اختر اللون والحجم. ويمكنك تعديله لاحقاً بأداة التحديد.',textPlaceholder:'اكتب النص هنا…',textColor:'لون النص',deleteText:'حذف النص',moreColors:'ألوان أكثر',smartBoardTag:'مرنة · بالقلم أو اللمس',eraserMode:'طريقة المسح',erasePartial:'مسح دقيق',erasePartialHint:'يمسح جزءاً من الخط أو حرفاً من النص.',eraseObject:'مسح كامل',eraseObjectHint:'يحذف العنصر أو النص كاملاً بلمسة.',calcError:'خطأ',downloadFilename:'اسم الملف',viewPdf:'عرض PDF',downloadPdfNow:'تنزيل PDF',timer:'المؤقت',chooseTimer:'اختر مدة المؤقت',timerHint:'اختر مدة جاهزة أو اكتب عدد الدقائق.',minutes:'دقيقة',customMinutes:'مدة مخصصة بالدقائق',startTimer:'ابدأ المؤقت',calculator:'الحاسبة',basicCalc:'أساسية',scientificCalc:'علمية',stickyNote:'ملاحظة لاصقة',notePrompt:'اكتب الملاحظة',selectTool:'تحديد وتحريك',zoomIn:'تكبير',zoomOut:'تصغير',saveWork:'حفظ',myFiles:'ملفاتي',saveTitle:'احفظ عملك للعودة إليه',saveText:'يُحذف الملف تلقائياً بعد المدة التي تختارها.',hours24:'24 ساعة',hours48:'48 ساعة',hours72:'72 ساعة',days7:'7 أيام',days15:'15 يوماً',defaultChoice:'الافتراضي',maxChoice:'الحد الأقصى',deleteNow:'حذف من ملفاتي الآن',localSaveNote:'',savedUntil:'محفوظ حتى',notSaved:'غير محفوظ',saveExtended:'تم حفظ الملف وتحديث مدة الاحتفاظ',savedDeleted:'تم حذف النسخة المحفوظة',editSticky:'اكتب داخل الملاحظة',stickyHint:'تم وضع الملاحظة أولاً. اكتب الآن ثم عدّل لونها ومحاذاة النص، ويمكنك تغيير حجمها من زوايا التحديد.',stickyPlaceholder:'اكتب ملاحظتك هنا…',noteColor:'لون الملاحظة',textAlign:'محاذاة النص',textSize:'حجم النص',cancel:'إلغاء',done:'تم',bookmarkPage:'علّم الصفحة',bookmarkAdded:'تم تعليم الصفحة',bookmarkRemoved:'تم إلغاء تعليم الصفحة',studyTimer:'المؤقت',timerStarted:'بدأ مؤقت 25 دقيقة',timerFinished:'انتهى المؤقت',stop:'إيقاف',focusMode:'وضع التركيز',focusOn:'تم تفعيل وضع التركيز',focusOff:'تم إلغاء وضع التركيز',demoHand:'احتفظ بهذه الفكرة',magicHint:'اكتب أو أشر أثناء لمس الشاشة. تبقى الكتابة لحظة قصيرة بعد رفع يدك ثم تختفي.',
      demoKicker:'ملاحظات — 04',demoTitle:'صمّم بوضوح<br>واكتب بتركيز.',demoText:'الملاحظات الجيدة لا تحفظ كل شيء، بل تجعل الفكرة التالية أسهل في الوصول.',demoFocus:'تركيز',highlightColors:'ألوان التمييز',magicPen:'القلم السحري',magicHint:'اكتب أو أشر أثناء لمس الشاشة. تبقى الكتابة لحظة قصيرة بعد رفع يدك ثم تختفي.',magicSize:'المقاس',small:'صغير',medium:'متوسط',large:'كبير',addImage:'إضافة صورة',imageReady:'اضغط على الصفحة لوضع الصورة',invalidImage:'اختر صورة PNG أو JPG أو WebP أو GIF.',imageReadFail:'تعذر قراءة الصورة.',watchAdUnlock:'',watchAdOnce:'',rewardTitle:'',rewardText:'',rewardDemo:'',rewardProviderHint:'',rewardWatchDemo:'',rewardWatching:'',rewardReady:'',rewardCredits:'',rewardNoCredit:'',recommended:'',googleLogin:'',googleConfigMissing:'',googleLoading:'',googleSigned:'',googleFailed:'',payAppleSahlah:'',loginFirst:'',paymentOpening:'',cleanPassUsed:'',rewardReadyLabel:'',chooseReward:'',rewardCleanTitle:'',rewardCleanText:'',rewardQualityTitle:'',rewardQualityText:'',rewardAdvancedTitle:'',rewardAdvancedText:'',qualityRewardReady:'',advancedRewardReady:'',advancedLocked:'',qualityPassUsed:''
    },
    en: {
      savedLocal:'',back:'Back',upgrade:'',download:'Download',privateBadge:'',heroTitle:'Write on your file<br><em>like paper.</em>',heroText:'For writing, drawing, annotation, and signatures. Open any PDF and begin with a pen or touch.',uploadTitle:'Upload a PDF',uploadHint:'Drop it here or choose one — up to 300 MB',chooseFile:'Choose file',continueWork:'Continue working',noUpload:'',penReady:'Works with device pens',smartInk:'Smart shapes',palm:'Palm rejection',smart:'Smart shapes',straightHoldHint:'Draw a shape, then hold the pen still for 3 seconds to convert it into a line, rectangle, or circle.',openingFile:'Opening your file…',pages:'Pages',saved:'Saved',adLabel:'Ad',adSpace:'Advertising space',removeAds:'',pricingTitle:'',pricingText:'',monthly:'',free:'Free',sar:'',perMonth:'',featureNoWatermark:'',featureNoAds:'',featureSave:'',subscriptionDuration:'',featureQuality:'',featureBasicTools:'',featureLocalSave:'',featurePremiumTools:'',freeWatermarkFeature:'',subscribe:'',securePay:'',continueFree:'',signature:'Signature',drawSignature:'Draw your signature',signatureHint:'Use a pen or your finger.',signHere:'Sign here',clear:'Clear',useSignature:'Use signature',exportTitle:'Your file is ready',exportText:'Your writing will be embedded in the PDF for use on any device.',freeWatermark:'',upgradeRemoves:'',downloadPdf:'Download PDF',downloadChoiceTitle:'Your file is ready',downloadChoiceText:'Name the file, then choose to view it or download it as a PDF.',viewFile:'View',downloadNow:'Download',privacy:'Privacy',terms:'Terms',about:'About',howToUse:'How to use',faq:'FAQ',contact:'Contact',expires:'Saved until',invalidPdf:'Choose a valid PDF file.',pdfReadFail:'Could not read the file from your device. Please choose it again.',pdfEngineFail:'Could not start the PDF reader. Check your internet connection and try again.',pdfOpenFail:'Could not open this PDF. It may be damaged or password-protected.',tooLarge:'This file exceeds the size limit.',opened:'File opened',saveFailed:'This browser could not save your work.',restored:'Your file was restored',textPrompt:'Type the text you want to add',placeSignature:'Tap the page to place your signature',signatureReady:'Your signature is ready to place',exporting:'Preparing your file…',exported:'Your PDF was downloaded',exportFail:'Could not prepare the file. Please try again.',checkoutMissing:'',emptySignature:'Draw your signature first.',adRemoved:'',pagesCount:'pages',freePlan:'Free · all features',plusPlan:'',rewardPlan:'',rename:'New file name',whiteboard:'Smart whiteboard',whiteboardHint:'Start with a blank space for writing, drawing, and ideas, then export it as PDF',whiteboardName:'New whiteboard.pdf',yourFiles:'Your files',recentFiles:'Recent files',pdfType:'PDF document',boardType:'Whiteboard',openFile:'Open',deleteFile:'Delete',deleted:'File deleted',boardLabel:'Whiteboard',inkColor:'Color',inkSize:'Size',panTool:'Pan page',undo:'Undo',redo:'Redo',chooseBoardOrientation:'Choose whiteboard orientation',chooseBoardOrientationHint:'Choose a portrait or landscape page before you start.',portrait:'Portrait',landscape:'Landscape',textTool:'Text',editText:'Edit text',textEditorHint:'Type your text, then choose its color and size. You can edit it later with the select tool.',textPlaceholder:'Type text here…',textColor:'Text color',deleteText:'Delete text',moreColors:'More colors',smartBoardTag:'Flexible · pen or touch',eraserMode:'Eraser mode',erasePartial:'Precision erase',erasePartialHint:'Erase part of a stroke or one text character.',eraseObject:'Erase object',eraseObjectHint:'Remove the whole item or text with one touch.',calcError:'Error',downloadFilename:'File name',viewPdf:'View PDF',downloadPdfNow:'Download PDF',timer:'Timer',chooseTimer:'Choose timer duration',timerHint:'Choose a preset or enter minutes.',minutes:'min',customMinutes:'Custom minutes',startTimer:'Start timer',calculator:'Calculator',basicCalc:'Basic',scientificCalc:'Scientific',stickyNote:'Sticky note',notePrompt:'Type your note',selectTool:'Select & move',zoomIn:'Zoom in',zoomOut:'Zoom out',saveWork:'Save',myFiles:'My files',saveTitle:'Save your work for later',saveText:'The file is deleted automatically after the retention period you choose.',hours24:'24 hours',hours48:'48 hours',hours72:'72 hours',days7:'7 days',days15:'15 days',defaultChoice:'Default',maxChoice:'Maximum',deleteNow:'Delete saved copy now',localSaveNote:'',savedUntil:'Saved until',notSaved:'Not saved',saveExtended:'File saved and retention updated',savedDeleted:'Saved copy deleted',editSticky:'Write inside the note',stickyHint:'The note is placed first. Add text now, then change its color and alignment. Resize it from the selection corners.',stickyPlaceholder:'Type your note here…',noteColor:'Note color',textAlign:'Text alignment',textSize:'Text size',cancel:'Cancel',done:'Done',bookmarkPage:'Mark page',bookmarkAdded:'Page marked',bookmarkRemoved:'Page unmarked',studyTimer:'Timer',timerStarted:'25-minute timer started',timerFinished:'Timer finished',stop:'Stop',focusMode:'Focus mode',focusOn:'Focus mode enabled',focusOff:'Focus mode disabled',demoHand:'Keep this idea',magicHint:'Write or point while touching the screen. The ink stays briefly after you lift, then fades away.',
      demoKicker:'NOTES — 04',demoTitle:'Design with clarity<br>and write with focus.',demoText:'Good notes do not capture everything. They make the next idea easier to find.',demoFocus:'focus',highlightColors:'Highlight colors',magicPen:'Magic pen',magicHint:'Write or point while touching the screen. The ink stays briefly after you lift, then fades away.',magicSize:'Size',small:'Small',medium:'Medium',large:'Large',addImage:'Add image',imageReady:'Tap the page to place the image',invalidImage:'Choose a PNG, JPG, WebP, or GIF image.',imageReadFail:'Could not read this image.',watchAdUnlock:'',watchAdOnce:'',rewardTitle:'',rewardText:'',rewardDemo:'',rewardProviderHint:'',rewardWatchDemo:'',rewardWatching:'',rewardReady:'',rewardCredits:'',rewardNoCredit:'',recommended:'',googleLogin:'',googleConfigMissing:'',googleLoading:'',googleSigned:'',googleFailed:'',payAppleSahlah:'',loginFirst:'',paymentOpening:'',cleanPassUsed:'',rewardReadyLabel:'',chooseReward:'',rewardCleanTitle:'',rewardCleanText:'',rewardQualityTitle:'',rewardQualityText:'',rewardAdvancedTitle:'',rewardAdvancedText:'',qualityRewardReady:'',advancedRewardReady:'',advancedLocked:'',qualityPassUsed:''
    }
  };

  // v22: high-fidelity PDF rendering through PDFium WASM. PDFium is primary
  // because it preserves embedded CID glyphs even when a PDF has a malformed
  // ToUnicode map (the supplied test PDF has exactly that defect).
  let pdfiumRuntimePromise=null;
  const PDFIUM_SOURCES=[
    {
      name:'jsdelivr-2.15.1',
      module:'https://cdn.jsdelivr.net/npm/@embedpdf/pdfium@2.15.1/+esm',
      wasm:'https://cdn.jsdelivr.net/npm/@embedpdf/pdfium@2.15.1/dist/pdfium.wasm'
    },
    {
      name:'esmsh-2.15.1',
      module:'https://esm.sh/@embedpdf/pdfium@2.15.1?bundle',
      wasm:'https://unpkg.com/@embedpdf/pdfium@2.15.1/dist/pdfium.wasm'
    },
    {
      name:'jsdelivr-2.15.0',
      module:'https://cdn.jsdelivr.net/npm/@embedpdf/pdfium@2.15.0/+esm',
      wasm:'https://cdn.jsdelivr.net/npm/@embedpdf/pdfium@2.15.0/dist/pdfium.wasm'
    }
  ];
  function promiseTimeout(promise,ms,label){
    let timer;
    return Promise.race([
      promise.finally(()=>clearTimeout(timer)),
      new Promise((_,reject)=>{timer=setTimeout(()=>reject(new Error(`${label||'operation'} timed out`)),ms);})
    ]);
  }
  async function fetchArrayBufferWithTimeout(url,ms=18000){
    const controller=new AbortController();
    const timer=setTimeout(()=>controller.abort(),ms);
    try{
      const response=await fetch(url,{mode:'cors',cache:'force-cache',signal:controller.signal});
      if(!response.ok)throw new Error(`HTTP ${response.status} for ${url}`);
      return await response.arrayBuffer();
    }finally{clearTimeout(timer);}
  }
  async function initPdfiumFromSource(source){
    const mod=await promiseTimeout(import(source.module),18000,`PDFium module ${source.name}`);
    const initFn=mod?.init||mod?.default?.init||(typeof mod?.default==='function'?mod.default:null);
    if(typeof initFn!=='function')throw new Error(`PDFium init() unavailable from ${source.name}`);
    const wasmBinary=await fetchArrayBufferWithTimeout(source.wasm,22000);
    const runtime=await promiseTimeout(initFn({wasmBinary}),22000,`PDFium init ${source.name}`);
    if(typeof runtime?.PDFiumExt_Init==='function')runtime.PDFiumExt_Init();
    else if(typeof runtime?.FPDF_InitLibrary==='function')runtime.FPDF_InitLibrary();
    if(typeof runtime?.FPDF_LoadMemDocument!=='function')throw new Error(`PDFium API incomplete from ${source.name}`);
    runtime.__inknoteSource=source.name;
    return runtime;
  }
  async function getPdfiumRuntime(){
    if(pdfiumRuntimePromise)return pdfiumRuntimePromise;
    pdfiumRuntimePromise=(async()=>{
      const errors=[];
      for(const source of PDFIUM_SOURCES){
        try{
          const runtime=await initPdfiumFromSource(source);
          console.info('[InkNote] Safe PDF raster engine ready:',source.name);
          document.documentElement.dataset.pdfEngine='pdfium-raster';
          return runtime;
        }catch(err){
          errors.push(`${source.name}: ${err?.message||err}`);
          console.warn('[InkNote] PDFium source failed:',source.name,err);
        }
      }
      document.documentElement.dataset.pdfEngine='unavailable';
      throw new Error(`All PDFium sources failed. ${errors.join(' | ')}`);
    })().catch(err=>{pdfiumRuntimePromise=null;throw err;});
    return pdfiumRuntimePromise;
  }
  async function openPdfiumDocument(bytes){
    const runtime=await getPdfiumRuntime();
    const filePtr=runtime.pdfium.wasmExports.malloc(bytes.length);
    runtime.pdfium.HEAPU8.set(bytes,filePtr);
    const docPtr=runtime.FPDF_LoadMemDocument(filePtr,bytes.length,0);
    if(!docPtr){const code=runtime.FPDF_GetLastError();runtime.pdfium.wasmExports.free(filePtr);throw new Error(`PDFium open error ${code}`);}
    const numPages=runtime.FPDF_GetPageCount(docPtr);
    if(!numPages){runtime.FPDF_CloseDocument(docPtr);runtime.pdfium.wasmExports.free(filePtr);throw new Error('PDF has no pages');}
    let closed=false;
    return {
      numPages,
      engineSource:runtime.__inknoteSource||'pdfium',
      async getPageSize(pageIndex){
        if(closed)throw new Error('PDFium document closed');
        const pagePtr=runtime.FPDF_LoadPage(docPtr,pageIndex);if(!pagePtr)throw new Error(`PDFium page ${pageIndex+1} failed`);
        try{return {width:runtime.FPDF_GetPageWidthF(pagePtr),height:runtime.FPDF_GetPageHeightF(pagePtr)};}finally{runtime.FPDF_ClosePage(pagePtr);}
      },
      async renderPage(pageIndex,canvas,cssWidth,dpr){
        if(closed)throw new Error('PDFium document closed');
        const pagePtr=runtime.FPDF_LoadPage(docPtr,pageIndex);if(!pagePtr)throw new Error(`PDFium page ${pageIndex+1} failed`);
        try{
          const width=runtime.FPDF_GetPageWidthF(pagePtr),height=runtime.FPDF_GetPageHeightF(pagePtr),cssScale=cssWidth/Math.max(width,1);
          // Keep iOS memory usage bounded while retaining enough resolution for handwriting/zoom.
          const qualityCap=isAppleMobile()?(cssWidth<=520?2.2:1.85):1.9;
          const safeDpr=Math.max(1,Math.min(Number(dpr)||1,qualityCap));
          const pw=Math.max(1,Math.round(width*cssScale*safeDpr)),ph=Math.max(1,Math.round(height*cssScale*safeDpr));
          const bitmap=runtime.FPDFBitmap_Create(pw,ph,0);if(!bitmap)throw new Error('PDFium bitmap allocation failed');
          try{
            runtime.FPDFBitmap_FillRect(bitmap,0,0,pw,ph,0xFFFFFFFF);
            // ANNOT | LCD_TEXT | NO_NATIVETEXT = rasterize glyphs inside PDFium; Safari never shapes PDF fonts.
            const FPDF_ANNOT=0x01,FPDF_LCD_TEXT=0x02,FPDF_NO_NATIVETEXT=0x04;
            runtime.FPDF_RenderPageBitmap(bitmap,pagePtr,0,0,pw,ph,0,FPDF_ANNOT|FPDF_LCD_TEXT|FPDF_NO_NATIVETEXT);
            const bufferPtr=runtime.FPDFBitmap_GetBuffer(bitmap);if(!bufferPtr)throw new Error('PDFium bitmap buffer failed');
            const stride=typeof runtime.FPDFBitmap_GetStride==='function'?runtime.FPDFBitmap_GetStride(bitmap):pw*4;
            const heap=runtime.pdfium.HEAPU8;
            const raw=new Uint8Array(heap.buffer,heap.byteOffset+bufferPtr,stride*ph);
            // FPDFBitmap_Create() produces BGRA. Convert explicitly to RGBA instead of relying on browser byte interpretation.
            const rgba=new Uint8ClampedArray(pw*ph*4);
            for(let y=0;y<ph;y++){
              let src=y*stride,dst=y*pw*4;
              for(let x=0;x<pw;x++,src+=4,dst+=4){
                rgba[dst]=raw[src+2];rgba[dst+1]=raw[src+1];rgba[dst+2]=raw[src];rgba[dst+3]=raw[src+3];
              }
            }
            canvas.width=pw;canvas.height=ph;canvas.style.width=`${cssWidth}px`;canvas.style.height=`${height*cssScale}px`;
            const ctx=canvas.getContext('2d',{alpha:false,desynchronized:true});
            ctx.putImageData(new ImageData(rgba,pw,ph),0,0);
            return {width:cssWidth,height:height*cssScale,pixelWidth:pw,pixelHeight:ph};
          }finally{runtime.FPDFBitmap_Destroy(bitmap);}
        }finally{runtime.FPDF_ClosePage(pagePtr);}
      },
      close(){if(closed)return;closed=true;runtime.FPDF_CloseDocument(docPtr);runtime.pdfium.wasmExports.free(filePtr);}
    };
  }
  function closeActivePdfEngine(){
    try{state?.pdfiumDoc?.close?.();}catch(e){console.warn('[InkNote] PDFium cleanup',e);}
    if(typeof state!=='undefined'){state.pdfiumDoc=null;state.pdfEngine=null;}
  }

  const state = {
    lang: localStorage.getItem('inknoteLang') || localStorage.getItem('inksyLang') || 'ar',
    tool: 'pen', color: '#1f2430', size: 4, zoom: 1, pdf: null, pdfBytes: null, pdfEngine:null, pdfiumDoc:null,
    filename: 'document.pdf', pages: [], annotations: {}, drawing: null, currentPage: 1,
    history: [], historyIndex: -1, signatureData: '', lastPenAt: 0,
    saveTimer: null,
    observer: null, renderObserver: null, loadToken: 0, renderQueue: [], renderBusy: false,
    mode: null, currentDocId: null, boardOrientation: 'portrait', eraseFrame: 0, selected: null,
    activePen: 0, penPresets: [{color:'#1f2430',size:4},{color:'#375bf5',size:4},{color:'#d9435f',size:4}],
    highlighterColor: localStorage.getItem('inksyHighlighterColor') || '#ffd84d', magicColor: localStorage.getItem('inksyMagicColor') || '#536df6', magicSize: Math.max(3,Math.min(8,Number(localStorage.getItem('inksyMagicSize')||5))), pendingImage: null,
    retentionHours: Math.max(24,Math.min(360,Number(cfg.defaultRetentionHours||24))), saveDisabled:false, currentExpiresAt:0,
    stickyEditing:null, textEditing:null, magicGhosts:{}, magicAnimations:{}, bookmarks:[], studyTimerEnd:0, studyTimerInterval:0, timerMinutes:25, calculatorExpression:'', calculatorMode:'basic', calculatorError:false, calculatorLastExpression:'', focusMode:false, eraserMode:localStorage.getItem('inknoteEraserMode')||'partial',
    activePenPointer:null, touchPointers:new Map(), touchGesture:null, gestureFrame:0, pendingDownload:null, basePageGap:28, zoomRenderTimer:0
  };
  let dbPromise;
  const imageCache = new Map();

  function t(key){ return tr[state.lang][key] || key; }
  function dateFormatter(options={}){
    const locale=state.lang==='ar'?'ar-SA-u-ca-gregory':'en-US-u-ca-gregory';
    return new Intl.DateTimeFormat(locale,options);
  }
  function icon(id){ return `<svg><use href="#${id}"/></svg>`; }
  function isAppleMobile(){
    const ua=navigator.userAgent||'';
    return /iPad|iPhone|iPod/.test(ua) || (navigator.platform==='MacIntel' && navigator.maxTouchPoints>1);
  }
  function clamp(v,min,max){return Math.max(min,Math.min(max,v));}
  function toast(message){ const el=$('#toast'); el.textContent=message; el.classList.add('show'); clearTimeout(toast.timer); toast.timer=setTimeout(()=>el.classList.remove('show'),2600); }
  function flashSaveState(text=t('saved')){
    const el=$('#saveState');if(!el)return;const label=el.querySelector('span');if(label)label.textContent=text;
    el.classList.remove('is-off');el.classList.add('visible');clearTimeout(flashSaveState.timer);
    flashSaveState.timer=setTimeout(()=>el.classList.remove('visible'),1800);
  }
  function setLanguage(lang){
    state.lang=lang; localStorage.setItem('inksyLang',lang); localStorage.setItem('inknoteLang',lang); document.documentElement.lang=lang; document.documentElement.dir=lang==='ar'?'rtl':'ltr'; const langLabel=lang==='ar'?'EN':'ع'; $('#langBtn').textContent=langLabel; if($('#editorLangBtn')) $('#editorLangBtn').textContent=langLabel;
    $$('[data-i18n]').forEach(el=>{ const val=t(el.dataset.i18n); if(val!==undefined) el.innerHTML=val; });
    $$('[data-i18n-placeholder]').forEach(el=>{const val=t(el.dataset.i18nPlaceholder);if(val!==undefined)el.setAttribute('placeholder',val);});
    $$('.tool').forEach(el=>el.setAttribute('aria-label',lang==='ar'?el.dataset.tipAr:el.dataset.tipEn));
    if(state.mode)$('#floatingPageCount').textContent=state.mode==='whiteboard'?t('boardLabel'):`${state.pdf?.numPages||1} ${t('pagesCount')}`;
    updateExportMeta(); updateRecentFiles(); syncPenUI(); if($('#calculatorModal')?.open)renderCalculator();
  }
  function updateAdUI(){
    $$('.ad-slot').forEach(el=>el.hidden=false);
    document.body.classList.remove('ads-off');
    document.body.classList.add('advanced-unlocked');
    updateExportMeta();
  }

  function openDB(){
    if(dbPromise) return dbPromise;
    dbPromise=new Promise((resolve,reject)=>{ const req=indexedDB.open('inksy-pdf',1); req.onupgradeneeded=()=>{ if(!req.result.objectStoreNames.contains('documents')) req.result.createObjectStore('documents',{keyPath:'id'}); }; req.onsuccess=()=>resolve(req.result); req.onerror=()=>reject(req.error); });
    return dbPromise;
  }
  async function dbGet(id='active'){ const db=await openDB(); return new Promise((resolve,reject)=>{ const req=db.transaction('documents').objectStore('documents').get(id); req.onsuccess=()=>resolve(req.result); req.onerror=()=>reject(req.error); }); }
  async function dbGetAll(){ const db=await openDB(); return new Promise((resolve,reject)=>{ const req=db.transaction('documents').objectStore('documents').getAll(); req.onsuccess=()=>resolve(req.result||[]); req.onerror=()=>reject(req.error); }); }
  async function dbPut(data){ const db=await openDB(); return new Promise((resolve,reject)=>{ const req=db.transaction('documents','readwrite').objectStore('documents').put(data); req.onsuccess=()=>resolve(); req.onerror=()=>reject(req.error); }); }
  async function dbDelete(id='active'){ const db=await openDB(); return new Promise(resolve=>{ const req=db.transaction('documents','readwrite').objectStore('documents').delete(id); req.onsuccess=req.onerror=()=>resolve(); }); }

  function newDocumentId(){ return `doc_${Date.now()}_${Math.random().toString(36).slice(2,8)}`; }
  async function updateRecentFiles(){
    const section=$('#recentSection'),list=$('#recentFiles');if(!section||!list)return;
    try{
      const all=await dbGetAll(),valid=[];
      for(const item of all){if(item.expiresAt&&item.expiresAt<Date.now())await dbDelete(item.id);else valid.push(item);}
      valid.sort((a,b)=>(b.savedAt||0)-(a.savedAt||0));section.hidden=!valid.length;list.replaceChildren();$('#recentCount').textContent=String(valid.length);
      for(const item of valid){
        const type=item.type||'pdf',card=document.createElement('article');card.className='recent-file-card';
        const open=document.createElement('button');open.type='button';open.className='recent-open';open.innerHTML=`<span class="recent-type-icon">${icon(type==='whiteboard'?'i-board':'i-pages')}</span><span class="recent-info"><strong></strong><small></small></span><span class="recent-open-label">${t('openFile')}</span>`;
        open.querySelector('strong').textContent=item.name||'document.pdf';const fmt=dateFormatter({day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'});const expiry=item.expiresAt?` · ${t('savedUntil')} ${fmt.format(item.expiresAt)}`:'';open.querySelector('small').textContent=`${type==='whiteboard'?t('boardType'):t('pdfType')} · ${fmt.format(item.savedAt||Date.now())}${expiry}`;
        open.onclick=()=>openRecentFile(item);
        const del=document.createElement('button');del.type='button';del.className='recent-delete';del.setAttribute('aria-label',t('deleteFile'));del.innerHTML=icon('i-trash');del.onclick=async()=>{await dbDelete(item.id);toast(t('deleted'));updateRecentFiles();};
        card.append(open,del);list.append(card);
      }
    }catch(e){console.error(e);section.hidden=true;}
  }
  async function openRecentFile(item){ state.currentDocId=item.id;state.retentionHours=Math.max(24,Math.min(360,Number(item.retentionHours||24)));state.currentExpiresAt=item.expiresAt||0;state.bookmarks=Array.isArray(item.bookmarks)?item.bookmarks:[];state.saveDisabled=false;let ok=true; if((item.type||'pdf')==='whiteboard')await startWhiteboard(item.annotations||{},item.name,item.id,item.boardOrientation||'portrait');else if(item.pdf)ok=await loadPdf(new Uint8Array(item.pdf),item.name,item.annotations||{},item.id);else ok=false;if(ok){syncBookmarksUI();toast(t('restored'));} }

  function readFileBytes(file){
    if(file && typeof file.arrayBuffer==='function'){
      return file.arrayBuffer().then(buffer=>new Uint8Array(buffer)).catch(()=>readFileBytesWithReader(file));
    }
    return readFileBytesWithReader(file);
  }
  function readFileBytesWithReader(file){
    return new Promise((resolve,reject)=>{
      try{
        const reader=new FileReader();
        reader.onload=()=>resolve(new Uint8Array(reader.result));
        reader.onerror=()=>reject(reader.error||new Error('FileReader failed'));
        reader.onabort=()=>reject(new Error('File read aborted'));
        reader.readAsArrayBuffer(file);
      }catch(err){reject(err);}
    });
  }
  async function openFile(file){
    if(!file || (file.type!=='application/pdf' && !file.name.toLowerCase().endsWith('.pdf'))){ toast(t('invalidPdf')); return; }
    if(file.size>(cfg.maxFileSizeMB||300)*1024*1024){ toast(t('tooLarge')); return; }
    const zone=$('#dropZone');
    zone?.classList.add('is-opening');
    try{
      const bytes=await readFileBytes(file);
      if(!bytes || !bytes.length)throw new Error('Empty PDF file');
      state.retentionHours=Math.max(24,Math.min(360,Number(cfg.defaultRetentionHours||24)));state.currentExpiresAt=0;state.bookmarks=[];state.saveDisabled=false;
      const opened=await loadPdf(bytes,file.name,{},newDocumentId());
      if(opened)toast(t('opened'));
    }catch(err){
      console.error('[InkNote] Could not read selected PDF:',err);
      toast(t('pdfReadFail'));
    }finally{
      zone?.classList.remove('is-opening');
      if($('#fileInput'))$('#fileInput').value='';
    }
  }
  function enterEditor(name,mode){
    $('#welcomeView').hidden=true;$('#siteFooter').hidden=true;$('#editorView').hidden=false;document.body.classList.add('editor-active');document.body.classList.toggle('whiteboard-mode',mode==='whiteboard');$('#fileHeader').hidden=true;$('#downloadBtn').hidden=true;
    state.mode=mode;state.filename=name;state.annotations=state.annotations||{};state.pages=[];state.renderQueue=[];state.renderBusy=false;state.zoom=1;state.currentPage=1;state.history=[];state.historyIndex=-1;state.selected=null;state.magicGhosts={};state.magicAnimations={};state.focusMode=false;document.body.classList.remove('focus-mode');$('#saveState')?.classList.toggle('is-off',state.saveDisabled);
    $('#documentName').textContent=name;$('#floatingDocumentName').textContent=name;$('#pagesStack').innerHTML='';$('#thumbnails').innerHTML='';$('#pagesStack').style.transform='none';$('#pagesStack').style.marginBottom='0';$('#pagesStack').style.removeProperty('gap');state.basePageGap=parseFloat(getComputedStyle($('#pagesStack')).gap)||28;$('#zoomLabel').textContent='100%';const preset=state.penPresets[state.activePen];state.color=preset.color;state.size=preset.size;syncPenUI();
  }
  async function loadPdf(bytes,name,annotations={},docId=null){
    const token=++state.loadToken;closeActivePdfEngine();
    state.annotations=annotations||{};state.currentDocId=docId||newDocumentId();enterEditor(name||'document.pdf','pdf');$('#loadingState').hidden=false;state.pdfBytes=new Uint8Array(bytes);
    try{
      try{
        // v24: the display copy is always rasterized by PDFium. We never hand PDF font shaping to Safari/iOS.
        state.pdfiumDoc=await openPdfiumDocument(state.pdfBytes.slice());state.pdfEngine='pdfium';state.pdf={numPages:state.pdfiumDoc.numPages};
        document.documentElement.dataset.pdfEngine='pdfium-raster';
        const first=await state.pdfiumDoc.getPageSize(0),ratio=first.height/Math.max(1,first.width);for(let i=1;i<=state.pdf.numPages;i++)createPageShell(i,ratio);
        // Engine preflight: render a small off-screen first page before exposing the document.
        const probe=document.createElement('canvas');await state.pdfiumDoc.renderPage(0,probe,Math.min(320,Math.max(240,getPageWidth(first.width))),1);
        if(!probe.width||!probe.height)throw new Error('PDFium preflight render returned an empty page');
      }catch(pdfiumErr){
        console.error('[InkNote] Safe PDF raster engine failed:',pdfiumErr);closeActivePdfEngine();
        // On Apple devices a PDF.js fallback can visibly corrupt complex embedded Arabic/Latin fonts. Do not show a wrong document.
        if(isAppleMobile())throw new Error(`SAFE_RASTER_REQUIRED: ${pdfiumErr?.message||pdfiumErr}`);
        // Non-Apple browsers may use PDF.js only as an emergency fallback.
        let pdfjs;try{pdfjs=await window.pdfjsReady;}catch(engineErr){throw pdfiumErr;}
        if(token!==state.loadToken)return false;
        const pdfVersion=String(pdfjs?.version||'3.11.174'),assetVersion=/^5\./.test(pdfVersion)?'5.6.205':'3.11.174';
        const task=pdfjs.getDocument({data:state.pdfBytes.slice(),useWorkerFetch:false,isEvalSupported:false,disableFontFace:true,useSystemFonts:false,fontExtraProperties:false,isOffscreenCanvasSupported:false,isImageDecoderSupported:false,cMapUrl:`https://cdn.jsdelivr.net/npm/pdfjs-dist@${assetVersion}/cmaps/`,cMapPacked:true,standardFontDataUrl:`https://cdn.jsdelivr.net/npm/pdfjs-dist@${assetVersion}/standard_fonts/`});
        state.pdf=await task.promise;state.pdfEngine='pdfjs';if(!state.pdf?.numPages)throw new Error('PDF has no pages');
        document.documentElement.dataset.pdfEngine='pdfjs-emergency';
        const firstPage=await state.pdf.getPage(1),natural=firstPage.getViewport({scale:1}),ratio=natural.height/Math.max(1,natural.width);for(let i=1;i<=state.pdf.numPages;i++)createPageShell(i,ratio);state.pages[0].page=firstPage;
      }
      if(token!==state.loadToken)return false;$('#floatingPageCount').textContent=`${state.pdf.numPages} ${t('pagesCount')}`;await renderPage(1);
      if(token!==state.loadToken)return false;if(!state.pages[0]?.rendered||!state.pages[0]?.base)throw new Error('First page did not render');
      // Open every PDF in scroll/pan mode so touch gestures move the document first.
      // The user explicitly switches to a pen only when they want to write.
      setTool('hand');
      pushHistory(true);setupLazyPageRendering();observePages();$('#loadingState').hidden=true;updatePageLabel();updateToolMode();scheduleSave();return true;
    }catch(err){console.error('[InkNote] PDF open/render failed:',err);closeActivePdfEngine();if(token===state.loadToken){$('#loadingState').hidden=true;toast(t('pdfOpenFail'));resetToWelcome();}return false;}
  }
  async function startWhiteboard(annotations={},name=t('whiteboardName'),docId=null,orientation='portrait'){
    closeActivePdfEngine();++state.loadToken;if(!docId){state.retentionHours=Math.max(24,Math.min(360,Number(cfg.defaultRetentionHours||24)));state.currentExpiresAt=0;state.bookmarks=[];state.saveDisabled=false;}state.annotations=annotations||{};state.currentDocId=docId||newDocumentId();state.pdf=null;state.pdfBytes=null;state.boardOrientation=orientation==='landscape'?'landscape':'portrait';enterEditor(name||t('whiteboardName'),'whiteboard');$('#loadingState').hidden=true;
    const area=$('#documentViewport'),availableWidth=Math.max(290,area.clientWidth-36),ratio=1.4142;
    let cssWidth=Math.min(state.boardOrientation==='portrait'?760:1080,availableWidth);
    let cssHeight=state.boardOrientation==='portrait'?cssWidth*ratio:cssWidth/ratio;
    const pixelRatio=Math.min(devicePixelRatio||1,isAppleMobile()?2:1.75);
    const wrap=document.createElement('div');wrap.className=`pdf-page whiteboard-page ${state.boardOrientation}`;wrap.dataset.page='1';wrap.style.width=`${cssWidth}px`;wrap.style.height=`${cssHeight}px`;
    const base=document.createElement('canvas');base.width=Math.round(cssWidth*pixelRatio);base.height=Math.round(cssHeight*pixelRatio);base.style.width=`${cssWidth}px`;base.style.height=`${cssHeight}px`;const baseCtx=base.getContext('2d',{alpha:false});baseCtx.fillStyle='#fff';baseCtx.fillRect(0,0,base.width,base.height);
    const overlay=document.createElement('canvas');overlay.className='annotation-canvas';overlay.width=base.width;overlay.height=base.height;overlay.style.width=`${cssWidth}px`;overlay.style.height=`${cssHeight}px`;
    wrap.append(base,overlay);$('#pagesStack').append(wrap);state.pages=[{number:1,wrap,base,overlay,cssWidth,cssHeight,baseCssWidth:cssWidth,baseCssHeight:cssHeight,pixelRatio,rendered:true,page:null,thumb:null}];
    $('#floatingPageCount').textContent=t('boardLabel');$('#pageLabel').textContent=t('boardLabel');bindCanvas(overlay,1);redrawPage(1);pushHistory(true);updateToolMode();scheduleSave();
  }
  function getPageWidth(naturalWidth=595){
    const viewport=Math.max(270,$('#documentViewport').clientWidth-32);
    const cap=window.innerWidth>=1200?680:(window.innerWidth>=780?640:viewport);
    const mobileFactor=window.innerWidth<620?.94:.82;
    return Math.max(250,Math.min(naturalWidth*1.08,viewport*mobileFactor,cap));
  }
  function getRenderPixelRatio(cssWidth,cssHeight){
    // PDFium already preserves the original PDF geometry. Render at a Retina-grade
    // backing resolution so text looks as close as possible to the native viewer,
    // while keeping each page below a safe pixel budget on iPhone/iPad.
    const dpr=Math.max(1,Number(devicePixelRatio||1));
    const desired=isAppleMobile()?Math.min(3.35,Math.max(2.65,dpr*1.08)):Math.min(3.1,Math.max(2.35,dpr));
    const maxPixels=isAppleMobile()?9_500_000:12_500_000;
    const byPixels=Math.sqrt(maxPixels/Math.max(1,cssWidth*cssHeight));
    return Math.max(2,Math.min(desired,byPixels));
  }
  function releaseRenderedPage(number){
    if(state.mode!=='pdf')return;
    const entry=state.pages[number-1];
    if(!entry?.rendered||state.drawing?.pageNum===number)return;
    entry.overlay?.remove();entry.base?.remove();
    if(!entry.wrap.querySelector('.page-placeholder')){
      const placeholder=document.createElement('div');placeholder.className='page-placeholder';placeholder.innerHTML=`<span>${String(number).padStart(2,'0')}</span>`;
      entry.wrap.insertBefore(placeholder,entry.wrap.querySelector('.page-number-chip'));
    }
    entry.base=null;entry.overlay=null;entry.rendered=false;entry.renderPromise=null;
  }
  function releaseFarPages(center=state.currentPage){
    if(state.mode!=='pdf')return;
    const radius=2;
    state.pages.forEach(p=>{if(Math.abs(p.number-center)>radius)releaseRenderedPage(p.number);});
  }
  function scheduleZoomRerender(){
    clearTimeout(state.zoomRenderTimer);
    state.zoomRenderTimer=setTimeout(async()=>{
      if(!state.mode)return;
      const nums=state.mode==='whiteboard'?[1]:[state.currentPage-1,state.currentPage,state.currentPage+1].filter(n=>n>=1&&n<=state.pages.length);
      for(const n of nums){
        const p=state.pages[n-1];if(!p?.rendered||state.drawing?.pageNum===n)continue;
        releaseRenderedPage(n);await renderPage(n);
      }
      releaseFarPages(state.currentPage);
    },220);
  }
  function createPageShell(number,ratio){
    const cssWidth=getPageWidth(),cssHeight=cssWidth*ratio;
    const wrap=document.createElement('div'); wrap.className='pdf-page is-pending'; wrap.dataset.page=number; wrap.style.width=`${cssWidth}px`; wrap.style.height=`${cssHeight}px`;
    const placeholder=document.createElement('div');placeholder.className='page-placeholder';placeholder.innerHTML=`<span>${String(number).padStart(2,'0')}</span>`;
    const badge=document.createElement('span'); badge.className='page-number-chip'; badge.textContent=String(number).padStart(2,'0'); wrap.append(placeholder,badge); $('#pagesStack').append(wrap);
    const thumb=document.createElement('button'); thumb.className='thumbnail is-pending'; thumb.type='button'; thumb.dataset.page=number; thumb.innerHTML=`<div class="thumb-placeholder"></div><span>${number}</span>`; thumb.onclick=()=>scrollToPage(number); $('#thumbnails').append(thumb);
    state.pages[number-1]={number,wrap,thumb,cssWidth,cssHeight,baseCssWidth:cssWidth,baseCssHeight:cssHeight,rendered:false,renderPromise:null,page:null,base:null,overlay:null};
  }
  async function renderPage(number){
    const entry=state.pages[number-1];if(!entry||entry.rendered)return entry;if(entry.renderPromise)return entry.renderPromise;
    entry.renderPromise=(async()=>{
      let naturalWidth,naturalHeight,page=null;
      if(state.pdfEngine==='pdfium'){const size=await state.pdfiumDoc.getPageSize(number-1);naturalWidth=size.width;naturalHeight=size.height;}
      else{page=entry.page||await state.pdf.getPage(number);const n=page.getViewport({scale:1});naturalWidth=n.width;naturalHeight=n.height;}
      const baseCssWidth=getPageWidth(naturalWidth),baseCssHeight=naturalHeight*(baseCssWidth/naturalWidth);
      const cssWidth=baseCssWidth*state.zoom,cssHeight=baseCssHeight*state.zoom;
      const cssScale=cssWidth/naturalWidth,pixelRatio=getRenderPixelRatio(cssWidth,cssHeight);
      entry.baseCssWidth=baseCssWidth;entry.baseCssHeight=baseCssHeight;
      const base=document.createElement('canvas'),overlay=document.createElement('canvas');overlay.className='annotation-canvas';
      base.style.width=overlay.style.width=`${cssWidth}px`;base.style.height=overlay.style.height=`${cssHeight}px`;
      entry.wrap.style.width=`${cssWidth}px`;entry.wrap.style.height=`${cssHeight}px`;
      const placeholder=entry.wrap.querySelector('.page-placeholder');if(placeholder)placeholder.replaceWith(base);else entry.wrap.insertBefore(base,entry.wrap.firstChild);
      entry.wrap.insertBefore(overlay,entry.wrap.querySelector('.page-number-chip'));entry.wrap.classList.remove('is-pending');
      if(state.pdfEngine==='pdfium'){
        const dims=await state.pdfiumDoc.renderPage(number-1,base,cssWidth,pixelRatio);
        overlay.width=base.width;overlay.height=base.height;overlay.style.width=`${dims.width}px`;overlay.style.height=`${dims.height}px`;entry.cssHeight=dims.height;
      }else{
        const viewport=page.getViewport({scale:cssScale*pixelRatio});base.width=Math.ceil(viewport.width);base.height=Math.ceil(viewport.height);overlay.width=base.width;overlay.height=base.height;
        await page.render({canvasContext:base.getContext('2d',{alpha:false}),viewport,intent:'display'}).promise;entry.page=page;
      }
      entry.base=base;entry.overlay=overlay;entry.cssWidth=cssWidth;entry.cssHeight=parseFloat(base.style.height)||cssHeight;entry.pixelRatio=pixelRatio;
      if(entry.thumb){
        let tc=entry.thumb.querySelector('canvas');
        if(!tc){tc=document.createElement('canvas');entry.thumb.querySelector('.thumb-placeholder')?.replaceWith(tc);}
        const tw=154,th=Math.round(tw*(base.height/base.width));tc.width=tw;tc.height=th;tc.getContext('2d',{alpha:false}).drawImage(base,0,0,tw,th);entry.thumb.classList.remove('is-pending');
      }
      entry.rendered=true;entry.renderPromise=null;bindCanvas(overlay,number);redrawPage(number);entry.wrap.classList.toggle('hand-mode',state.tool==='hand');syncBookmarksUI();return entry;
    })().catch(err=>{entry.renderPromise=null;console.error('[InkNote] Page render failed:',err);return entry;});return entry.renderPromise;
  }
  function setupLazyPageRendering(){
    state.renderObserver?.disconnect();
    state.renderObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)queuePageRender(+entry.target.dataset.page);}),{root:$('#documentViewport'),rootMargin:'700px 0px',threshold:.01});
    state.pages.slice(1).forEach(p=>state.renderObserver.observe(p.wrap));
  }
  function queuePageRender(number){ if(state.pages[number-1]?.rendered||state.pages[number-1]?.renderPromise||state.renderQueue.includes(number))return;state.renderQueue.push(number);processRenderQueue(); }
  function processRenderQueue(){
    if(state.renderBusy||!state.renderQueue.length)return;state.renderBusy=true;
    const run=async()=>{const number=state.renderQueue.shift();await renderPage(number);state.renderBusy=false;if(state.renderQueue.length)processRenderQueue();};
    if('requestIdleCallback'in window)requestIdleCallback(run,{timeout:450});else setTimeout(run,40);
  }
  function observePages(){
    if(state.observer) state.observer.disconnect();
    state.observer=new IntersectionObserver(entries=>{ const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0]; if(visible){ state.currentPage=+visible.target.dataset.page; updatePageLabel(); $$('.thumbnail').forEach(x=>x.classList.toggle('active',+x.dataset.page===state.currentPage)); releaseFarPages(state.currentPage); } },{root:$('#documentViewport'),threshold:[.2,.5,.8]}); state.pages.forEach(p=>state.observer.observe(p.wrap));
  }
  async function scrollToPage(number){ const p=state.pages[number-1]; if(p){renderPage(number);p.wrap.scrollIntoView({behavior:'smooth',block:'start'});} $('#pagesPanel').classList.remove('open'); }
  function updatePageLabel(){ if(state.mode==='whiteboard'){$('#pageLabel').textContent=t('boardLabel');return;}if(!state.pdf)return;$('#pageLabel').textContent=`${state.currentPage} / ${state.pdf.numPages}`;syncBookmarksUI(); }

  function syncBookmarksUI(){
    const marked=new Set((state.bookmarks||[]).map(Number));
    $$('.thumbnail').forEach(x=>x.classList.toggle('bookmarked',marked.has(+x.dataset.page)));
    const btn=$('#bookmarkPageBtn');if(btn){const isMarked=marked.has(Number(state.currentPage));btn.classList.toggle('active',isMarked);btn.querySelector('span').textContent=isMarked?(state.lang==='ar'?'إلغاء تعليم الصفحة':'Unmark page'):t('bookmarkPage');}
  }
  function toggleCurrentBookmark(){
    if(!state.mode)return;const page=Number(state.currentPage||1),set=new Set((state.bookmarks||[]).map(Number));let added=false;if(set.has(page))set.delete(page);else{set.add(page);added=true;}state.bookmarks=[...set].sort((a,b)=>a-b);syncBookmarksUI();scheduleSave();toast(t(added?'bookmarkAdded':'bookmarkRemoved'));closeToolPopovers();
  }
  function stopStudyTimer(showToast=false){
    clearInterval(state.studyTimerInterval);state.studyTimerInterval=0;state.studyTimerEnd=0;const pill=$('#studyTimerPill');if(pill)pill.hidden=true;if(showToast)toast(t('timerFinished'));
  }
  function openTimerModal(){
    const custom=$('#customTimerMinutes');if(custom)custom.value='';$$('[data-timer-minutes]').forEach(x=>x.classList.toggle('active',Number(x.dataset.timerMinutes)===Number(state.timerMinutes||25)));$('#timerModal')?.showModal();closeToolPopovers();
  }
  function startStudyTimer(minutes=25){
    minutes=Math.max(1,Math.min(999,Math.round(Number(minutes)||25)));state.timerMinutes=minutes;stopStudyTimer(false);state.studyTimerEnd=Date.now()+minutes*60*1000;const pill=$('#studyTimerPill');if(pill)pill.hidden=false;const tick=()=>{const left=Math.max(0,state.studyTimerEnd-Date.now()),sec=Math.ceil(left/1000),m=Math.floor(sec/60),r=sec%60;if($('#studyTimerText'))$('#studyTimerText').textContent=`${String(m).padStart(2,'0')}:${String(r).padStart(2,'0')}`;if(left<=0)stopStudyTimer(true);};tick();state.studyTimerInterval=setInterval(tick,1000);toast(state.lang==='ar'?`بدأ المؤقت لمدة ${minutes} دقيقة`:`${minutes}-minute timer started`);$('#timerModal')?.close();closeToolPopovers();
  }
  function toggleFocusMode(){state.focusMode=!state.focusMode;document.body.classList.toggle('focus-mode',state.focusMode);toast(t(state.focusMode?'focusOn':'focusOff'));closeToolPopovers();}

  function retentionLabel(hours){if(hours===24)return t('hours24');if(hours===48)return t('hours48');if(hours===72)return t('hours72');if(hours===168)return t('days7');if(hours===360)return t('days15');return `${hours}h`;}
  function formatExpiry(ts){if(!ts)return '';return dateFormatter({day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'}).format(ts);}
  function openSaveModal(){
    if(!state.mode)return;const hours=Math.max(24,Math.min(360,Number(state.retentionHours||24)));const radio=$(`input[name="retention"][value="${hours}"]`)||$('input[name="retention"][value="24"]');if(radio)radio.checked=true;updateSaveExpiryPreview();$('#saveModal').showModal();
  }
  function updateSaveExpiryPreview(){const checked=$('input[name="retention"]:checked');const hours=Number(checked?.value||24),when=Date.now()+hours*36e5;const el=$('#saveExpiry');if(el)el.textContent=`${t('savedUntil')}: ${formatExpiry(when)} · ${retentionLabel(hours)}`;}
  async function confirmSaveRetention(){const checked=$('input[name="retention"]:checked');state.retentionHours=Math.max(24,Math.min(360,Number(checked?.value||24)));state.saveDisabled=false;await saveDocument(true);$('#saveModal').close();toast(t('saveExtended'));}
  async function deleteSavedCopy(){if(!state.currentDocId)return;await dbDelete(state.currentDocId);state.saveDisabled=true;state.currentExpiresAt=0;$('#saveState')?.classList.add('is-off');$('#saveState')?.classList.remove('visible');if($('#saveState span'))$('#saveState span').textContent=t('notSaved');$('#saveModal').close();updateRecentFiles();toast(t('savedDeleted'));}

  function openTextEditor(page,index=null,draft=null){
    const existing=index!=null?state.annotations[page]?.[index]:null;
    state.textEditing={page,index,draft:draft||null};
    const color=existing?.color||draft?.color||state.color||'#1f2430',size=Number(existing?.size||draft?.size||22);
    $('#textEditorInput').value=existing?.text||'';
    $('#textColorInput').value=color;
    const sw=$('.text-custom-color span');if(sw)sw.style.background=color;
    $$('[data-text-color]').forEach(x=>x.classList.toggle('active',x.dataset.textColor.toLowerCase()===color.toLowerCase()));
    $$('[data-text-size]').forEach(x=>x.classList.toggle('active',Number(x.dataset.textSize)===size));
    $('#deleteTextAnnotation').hidden=index==null;
    $('#textEditorModal').showModal();setTimeout(()=>$('#textEditorInput')?.focus(),80);
  }
  function chosenTextColor(){const active=$('[data-text-color].active');return active?.dataset.textColor||$('#textColorInput')?.value||state.color||'#1f2430';}
  function saveTextEditor(){
    const ed=state.textEditing;if(!ed)return;const text=$('#textEditorInput').value.trim();const size=Number($('[data-text-size].active')?.dataset.textSize||22),color=chosenTextColor();
    if(ed.index==null){if(text){const draft=ed.draft||{};(state.annotations[ed.page]??=[]).push({type:'text',x:draft.x??.1,y:draft.y??.1,text,color,size});state.selected={page:ed.page,index:state.annotations[ed.page].length-1};commitChange();setTool('select');}}
    else{const a=state.annotations[ed.page]?.[ed.index];if(a){if(!text){state.annotations[ed.page].splice(ed.index,1);state.selected=null;}else{a.text=text;a.color=color;a.size=size;state.selected={page:ed.page,index:ed.index};}commitChange();redrawPage(ed.page);}}
    $('#textEditorModal').close();state.textEditing=null;
  }
  function deleteTextEditor(){
    const ed=state.textEditing;if(!ed)return;if(ed.index!=null&&state.annotations[ed.page]?.[ed.index]){state.annotations[ed.page].splice(ed.index,1);state.selected=null;commitChange();redrawPage(ed.page);}$('#textEditorModal').close();state.textEditing=null;
  }

  function setCalculatorMode(mode){state.calculatorMode=mode==='scientific'?'scientific':'basic';$$('[data-calc-mode]').forEach(x=>x.classList.toggle('active',x.dataset.calcMode===state.calculatorMode));$('#calculatorModal')?.classList.toggle('scientific',state.calculatorMode==='scientific');renderCalculator();}
  function calculatorModeLabel(){return state.calculatorMode==='scientific'?(state.lang==='ar'?'الوضع العلمي':'Scientific mode'):(state.lang==='ar'?'الوضع الأساسي':'Basic mode');}
  function renderCalculator(){
    const out=$('#calcDisplay'),small=$('#calcExpression');if(!out)return;
    if(state.calculatorError){out.textContent=t('calcError');if(small)small.textContent=state.calculatorLastExpression||calculatorModeLabel();return;}
    out.textContent=state.calculatorExpression||'0';if(small)small.textContent=calculatorModeLabel();
  }
  function evaluateCalculator(expr){
    let x=String(expr||'').trim().replace(/×/g,'*').replace(/÷/g,'/').replace(/−/g,'-').replace(/π/g,'Math.PI').replace(/\be\b/g,'Math.E').replace(/\^/g,'**');
    x=x.replace(/(\d+(?:\.\d+)?|\([^()]*\))%/g,'($1/100)');
    x=x.replace(/\bsqrt\(/g,'Math.sqrt(').replace(/\blog\(/g,'Math.log10(').replace(/\bln\(/g,'Math.log(');
    if(!x||x.length>220||/[^0-9+\-*/().,\sA-Za-z]/.test(x))throw new Error('bad expression');
    const identifiers=(x.match(/[A-Za-z]+/g)||[]);if(identifiers.some(id=>!['Math','PI','E','sqrt','log','log10','sin','cos','tan'].includes(id)))throw new Error('bad expression');
    const sin=v=>Math.sin(v*Math.PI/180),cos=v=>Math.cos(v*Math.PI/180),tan=v=>Math.tan(v*Math.PI/180);
    const value=Function('sin','cos','tan',`"use strict";return (${x})`)(sin,cos,tan);if(!Number.isFinite(value))throw new Error('bad result');return Math.round((value+Number.EPSILON)*1e12)/1e12;
  }
  function clearCalculatorError(){if(state.calculatorError){state.calculatorError=false;state.calculatorExpression='';state.calculatorLastExpression='';}}
  function lastNumberRange(expr){const m=String(expr).match(/(-?\d*\.?\d+)$/);return m?{start:m.index,end:m.index+m[0].length,value:m[0]}:null;}
  function appendCalculatorToken(value){
    let expr=state.calculatorExpression||'';
    if(value==='.') {const r=lastNumberRange(expr);if(r&&r.value.includes('.'))return;if(!r)expr+='0';}
    if(['+','−','×','÷','^'].includes(value)){if(!expr&&value!=='−')return;if(/[+−×÷^]$/.test(expr))expr=expr.slice(0,-1);}
    if(expr.length<220)state.calculatorExpression=expr+value;
  }
  function handleCalculatorKey(value){
    if(value==='clear'){state.calculatorExpression='';state.calculatorError=false;state.calculatorLastExpression='';renderCalculator();return;}
    if(value==='back'){if(state.calculatorError){clearCalculatorError();}else state.calculatorExpression=state.calculatorExpression.slice(0,-1);renderCalculator();return;}
    if(value==='equals'){const expr=state.calculatorExpression;if(!expr)return;try{const result=evaluateCalculator(expr);state.calculatorLastExpression=expr+' =';state.calculatorExpression=String(result);state.calculatorError=false;}catch{state.calculatorLastExpression=expr;state.calculatorError=true;}renderCalculator();return;}
    if(state.calculatorError)clearCalculatorError();
    if(value==='sign'){const r=lastNumberRange(state.calculatorExpression);if(r){const n=r.value.startsWith('-')?r.value.slice(1):'-'+r.value;state.calculatorExpression=state.calculatorExpression.slice(0,r.start)+n;}renderCalculator();return;}
    if(value==='percent'){const r=lastNumberRange(state.calculatorExpression);if(r)state.calculatorExpression=state.calculatorExpression.slice(0,r.start)+`(${r.value}/100)`;renderCalculator();return;}
    if(value==='square'){const r=lastNumberRange(state.calculatorExpression);if(r)state.calculatorExpression=state.calculatorExpression.slice(0,r.start)+`(${r.value})^2`;renderCalculator();return;}
    appendCalculatorToken(value);renderCalculator();
  }
  function openStickyEditor(page,index){
    const a=state.annotations[page]?.[index];if(!a||a.type!=='sticky')return;state.stickyEditing={page,index};$('#stickyText').value=a.text||'';$$('[data-sticky-color]').forEach(x=>x.classList.toggle('active',x.dataset.stickyColor.toLowerCase()===(a.color||'#fff3a3').toLowerCase()));$$('[data-sticky-align]').forEach(x=>x.classList.toggle('active',x.dataset.stickyAlign===(a.align||'right')));$$('[data-sticky-font]').forEach(x=>x.classList.toggle('active',Number(x.dataset.stickyFont)===Number(a.fontScale||1)));$('#stickyEditorModal').showModal();setTimeout(()=>$('#stickyText')?.focus(),80);
  }
  function saveStickyEditor(){
    const ed=state.stickyEditing,a=ed&&state.annotations[ed.page]?.[ed.index];if(!a)return;const c=$('[data-sticky-color].active'),al=$('[data-sticky-align].active'),fs=$('[data-sticky-font].active');a.text=$('#stickyText').value.trim();a.color=c?.dataset.stickyColor||a.color||'#fff3a3';a.align=al?.dataset.stickyAlign||a.align||'right';a.fontScale=Number(fs?.dataset.stickyFont||a.fontScale||1);$('#stickyEditorModal').close();state.stickyEditing=null;redrawPage(ed.page);commitChange();
  }
  function hitStickyResizeHandle(a,p){
    if(!a||a.type!=='sticky')return null;const b=annotationBounds(a),r=.028,corners={nw:[b.x,b.y],ne:[b.x+b.w,b.y],sw:[b.x,b.y+b.h],se:[b.x+b.w,b.y+b.h]};for(const [key,[x,y]] of Object.entries(corners))if(Math.hypot(p.x-x,p.y-y)<=r)return key;return null;
  }
  function resizeStickyFromOriginal(target,original,corner,p){
    const minW=.13,minH=.09,maxX=.98,maxY=.98;let left=original.x,top=original.y,right=original.x+original.w,bottom=original.y+original.h;if(corner.includes('w'))left=Math.min(p.x,right-minW);if(corner.includes('e'))right=Math.max(p.x,left+minW);if(corner.includes('n'))top=Math.min(p.y,bottom-minH);if(corner.includes('s'))bottom=Math.max(p.y,top+minH);left=Math.max(.01,left);top=Math.max(.01,top);right=Math.min(maxX,right);bottom=Math.min(maxY,bottom);target.x=left;target.y=top;target.w=Math.max(minW,right-left);target.h=Math.max(minH,bottom-top);
  }

  function annotationBounds(a){
    if(a.type==='stroke'&&a.points?.length){const xs=a.points.map(p=>p.x),ys=a.points.map(p=>p.y),pad=.015;return{x:Math.max(0,Math.min(...xs)-pad),y:Math.max(0,Math.min(...ys)-pad),w:Math.min(1,Math.max(...xs)+pad)-Math.max(0,Math.min(...xs)-pad),h:Math.min(1,Math.max(...ys)+pad)-Math.max(0,Math.min(...ys)-pad)};}
    if(a.type==='shape'){if(a.shape==='line'){const x=Math.min(a.x1,a.x2),y=Math.min(a.y1,a.y2);return{x,y,w:Math.max(.002,Math.abs(a.x2-a.x1)),h:Math.max(.002,Math.abs(a.y2-a.y1))};}return{x:a.x,y:a.y,w:a.w||.2,h:a.h||.15};}
    if(a.type==='image')return{x:a.x,y:a.y,w:a.w||.24,h:a.h||.10};
    if(a.type==='sticky')return{x:a.x,y:a.y,w:a.w||.22,h:a.h||.16};
    if(a.type==='text'){const lines=String(a.text||'').split(/\n/),longest=Math.max(1,...lines.map(x=>x.length)),scale=(a.size||22)/22;return{x:a.x,y:a.y,w:Math.min(.72,Math.max(.06,longest*.012*scale)),h:Math.max(.045,lines.length*.045*scale)};}
    return{x:a.x||0,y:a.y||0,w:.05,h:.05};
  }
  function hitTestAnnotation(page,p){const list=state.annotations[page]||[];for(let i=list.length-1;i>=0;i--){const a=list[i],b=annotationBounds(a),pad=.018;if(p.x>=b.x-pad&&p.x<=b.x+b.w+pad&&p.y>=b.y-pad&&p.y<=b.y+b.h+pad){if(a.type!=='stroke'||a.points.some(q=>Math.hypot(q.x-p.x,q.y-p.y)<.035))return i;}}return-1;}
  function moveAnnotationFromOriginal(target,original,dx,dy){
    if(target.type==='stroke'){target.points=original.points.map(p=>({...p,x:Math.max(0,Math.min(1,p.x+dx)),y:Math.max(0,Math.min(1,p.y+dy))}));return;}
    if(target.type==='shape'&&target.shape==='line'){target.x1=clamp(original.x1+dx,0,1);target.y1=clamp(original.y1+dy,0,1);target.x2=clamp(original.x2+dx,0,1);target.y2=clamp(original.y2+dy,0,1);return;}
    target.x=Math.max(0,Math.min(1-(target.w||0),original.x+dx));target.y=Math.max(0,Math.min(1-(target.h||0),original.y+dy));
  }
  function drawSelection(ctx,a,w,h){const b=annotationBounds(a);ctx.save();ctx.strokeStyle='#536df6';ctx.lineWidth=Math.max(1.5,w/700);ctx.setLineDash([6,5]);ctx.strokeRect(b.x*w,b.y*h,b.w*w,b.h*h);ctx.setLineDash([]);for(const [x,y] of [[b.x,b.y],[b.x+b.w,b.y],[b.x,b.y+b.h],[b.x+b.w,b.y+b.h]]){ctx.beginPath();ctx.fillStyle='#fff';ctx.strokeStyle='#536df6';ctx.arc(x*w,y*h,4.2*Math.max(1,w/760),0,Math.PI*2);ctx.fill();ctx.stroke();}ctx.restore();}
  function wrapCanvasText(ctx,text,x,y,maxWidth,lineHeight,maxLines=6){const words=String(text||'').split(/\s+/).filter(Boolean),lines=[];let line='';for(const word of words){const test=line?line+' '+word:word;if(ctx.measureText(test).width>maxWidth&&line){lines.push(line);line=word;if(lines.length>=maxLines-1)break;}else line=test;}if(line&&lines.length<maxLines)lines.push(line);lines.forEach((ln,i)=>ctx.fillText(ln,x,y+i*lineHeight));}

  function pointFromEvent(e,canvas){
    const r=canvas.getBoundingClientRect();
    // iOS reports noisy pressure values for finger input. Keep finger width stable;
    // Apple Pencil/stylus pressure is still preserved.
    const pressure=e.pointerType==='touch'?.55:((typeof e.pressure==='number'&&e.pressure>0)?e.pressure:.5);
    return {x:clamp((e.clientX-r.left)/Math.max(1,r.width),0,1),y:clamp((e.clientY-r.top)/Math.max(1,r.height),0,1),p:pressure,tiltX:e.tiltX||0,tiltY:e.tiltY||0};
  }
  function touchContactSize(e){return Math.max(Number(e.width||0),Number(e.height||0));}
  function isLikelyPalmTouch(e){return e.pointerType==='touch'&&touchContactSize(e)>34;}
  function rememberPointer(e){
    if(e.pointerType==='pen'){state.lastPenAt=Date.now();state.activePenPointer=e.pointerId;}
    if(e.pointerType==='touch')state.touchPointers.set(e.pointerId,{x:e.clientX,y:e.clientY,w:e.width||0,h:e.height||0});
  }
  function forgetPointer(e){
    if(e.pointerType==='pen'&&state.activePenPointer===e.pointerId)state.activePenPointer=null;
    if(e.pointerType==='touch')state.touchPointers.delete(e.pointerId);
    if(state.touchPointers.size<2)state.touchGesture=null;
  }
  function shouldIgnoreTouch(e){
    if(e.pointerType==='pen'){state.lastPenAt=Date.now();return false;}
    if(e.pointerType!=='touch')return false;
    if(state.tool==='hand')return false;
    // Never reject the pointer that is already producing an intentional finger stroke.
    // iOS changes touch width/height while a finger moves; treating that as a palm used
    // to cut handwriting in the middle of a word.
    if(state.drawing?.pointerId===e.pointerId)return false;
    // Palm rejection is only aggressive while a real stylus is active (or has just
    // lifted). Without a stylus, a broad finger contact is still legitimate input.
    const penIsActive=state.activePenPointer!=null || Date.now()-state.lastPenAt<260;
    if(!penIsActive)return false;
    return isLikelyPalmTouch(e);
  }
  function canStartTwoFingerGesture(){
    // Touches that reached rememberPointer have already passed palm rejection.
    // Do not use contact width here: real fingers on iPad frequently exceed the old
    // 34px threshold and would otherwise break pinch/pan and handwriting continuity.
    return state.activePenPointer==null&&state.touchPointers.size>=2;
  }
  function appendInterpolatedStrokePoints(stroke,points,canvas){
    let prev=stroke.points.at(-1),moved=false;
    const maxStep=Math.max(.0015,2.1/Math.max(320,canvas.getBoundingClientRect().width||canvas.width||760));
    for(const cp of points){
      if(!prev){stroke.points.push(cp);prev=cp;moved=true;continue;}
      const dist=Math.hypot(cp.x-prev.x,cp.y-prev.y);
      if(dist<.00045)continue;
      const steps=Math.min(28,Math.max(1,Math.ceil(dist/maxStep)));
      for(let i=1;i<=steps;i++){
        const f=i/steps,next={x:prev.x+(cp.x-prev.x)*f,y:prev.y+(cp.y-prev.y)*f,p:prev.p+(cp.p-prev.p)*f,tiltX:cp.tiltX||0,tiltY:cp.tiltY||0};
        stroke.points.push(next);drawLiveSegment(canvas,stroke,stroke.points.at(-2),next);moved=true;
      }
      prev=cp;
    }
    return moved;
  }
  function clearStraightHold(d){ if(d?.straightTimer){clearTimeout(d.straightTimer);d.straightTimer=0;} }
  function strokePathLength(points){let total=0;for(let i=1;i<points.length;i++)total+=Math.hypot(points[i].x-points[i-1].x,points[i].y-points[i-1].y);return total;}
  function recognizeSmartShape(stroke){
    const pts=stroke?.points||[];if(pts.length<3)return null;
    const xs=pts.map(p=>p.x),ys=pts.map(p=>p.y),minX=Math.min(...xs),maxX=Math.max(...xs),minY=Math.min(...ys),maxY=Math.max(...ys),w=maxX-minX,h=maxY-minY,diag=Math.hypot(w,h);if(diag<.012)return null;
    const first=pts[0],last=pts.at(-1),path=strokePathLength(pts),endDist=Math.hypot(last.x-first.x,last.y-first.y);
    const lineErr=pts.reduce((sum,p)=>{const den=Math.max(.00001,endDist),d=Math.abs((last.y-first.y)*p.x-(last.x-first.x)*p.y+last.x*first.y-last.y*first.x)/den;return sum+d;},0)/pts.length;
    if(endDist>diag*.55&&(endDist/path>.90||lineErr/diag<.035))return{type:'shape',shape:'line',x1:first.x,y1:first.y,x2:last.x,y2:last.y,color:stroke.color,size:stroke.size};
    const closed=endDist<Math.max(.035,diag*.25);if(!closed)return{type:'shape',shape:'line',x1:first.x,y1:first.y,x2:last.x,y2:last.y,color:stroke.color,size:stroke.size};
    const edgeErr=pts.reduce((sum,p)=>sum+Math.min(Math.abs(p.x-minX),Math.abs(p.x-maxX),Math.abs(p.y-minY),Math.abs(p.y-maxY)),0)/pts.length;
    const cx=(minX+maxX)/2,cy=(minY+maxY)/2,rx=Math.max(.008,w/2),ry=Math.max(.008,h/2);
    const radialErr=pts.reduce((sum,p)=>sum+Math.abs(Math.sqrt(((p.x-cx)/rx)**2+((p.y-cy)/ry)**2)-1),0)/pts.length;
    if(radialErr<.12)return{type:'shape',shape:'ellipse',x:minX,y:minY,w,h,color:stroke.color,size:stroke.size};
    if(w>.025&&h>.025&&edgeErr/diag<.055)return{type:'shape',shape:'rect',x:minX,y:minY,w,h,color:stroke.color,size:stroke.size};
    if(radialErr<.26)return{type:'shape',shape:'ellipse',x:minX,y:minY,w,h,color:stroke.color,size:stroke.size};
    return null;
  }
  function armStraightHold(canvas,pageNum,d){
    clearStraightHold(d);
    if(!d?.stroke||d.stroke.tool!=='pen'||d.smartLocked||!$('#smartInk')?.checked||d.stroke.points.length<3)return;
    d.straightTimer=setTimeout(()=>{
      if(state.drawing!==d||d.pageNum!==pageNum||d.stroke.tool!=='pen'||d.stroke.points.length<3)return;
      const shape=recognizeSmartShape(d.stroke);if(!shape)return;
      d.smartLocked=true;d.smartShape=shape;redrawPage(pageNum,shape);
    },3000);
  }
  function safeCapture(canvas,id){try{canvas.setPointerCapture(id);}catch{}}
  function beginTouchGesture(canvas,pageNum){
    if(state.touchPointers.size<2)return false;
    const pts=[...state.touchPointers.values()].slice(0,2);
    const mid={x:(pts[0].x+pts[1].x)/2,y:(pts[0].y+pts[1].y)/2};
    const dist=Math.hypot(pts[0].x-pts[1].x,pts[0].y-pts[1].y)||1;
    const viewport=$('#documentViewport'),vr=viewport.getBoundingClientRect(),localX=mid.x-vr.left,localY=mid.y-vr.top;
    if(state.drawing?.stroke&&state.drawing.pointerType==='touch'){
      const drawingPage=state.drawing.pageNum;clearStraightHold(state.drawing);state.drawing=null;if(drawingPage)redrawPage(drawingPage);
    }
    state.touchGesture={pageNum:pageNum||state.currentPage,startMid:mid,startDist:dist,startZoom:state.zoom,contentX:(viewport.scrollLeft+localX)/Math.max(.01,state.zoom),contentY:(viewport.scrollTop+localY)/Math.max(.01,state.zoom)};
    return true;
  }
  function updateTouchGesture(){
    const g=state.touchGesture;if(!g||state.touchPointers.size<2)return;
    const pts=[...state.touchPointers.values()].slice(0,2);
    const mid={x:(pts[0].x+pts[1].x)/2,y:(pts[0].y+pts[1].y)/2};
    const dist=Math.hypot(pts[0].x-pts[1].x,pts[0].y-pts[1].y)||1;
    if(state.gestureFrame)return;
    state.gestureFrame=requestAnimationFrame(()=>{
      state.gestureFrame=0;
      const target=clamp(g.startZoom*(dist/g.startDist),.5,3);
      setZoom(target,{clientX:mid.x,clientY:mid.y,contentX:g.contentX,contentY:g.contentY});
    });
  }
  function coalescedPoints(e,canvas){
    let events=[e];
    if(typeof e.getCoalescedEvents==='function'){
      try{const list=e.getCoalescedEvents();if(list&&list.length)events=list;}catch{}
    }
    return events.map(ev=>pointFromEvent(ev,canvas));
  }
  function clearNativeSelection(){
    try{const sel=window.getSelection?.();if(sel&&sel.rangeCount)sel.removeAllRanges();}catch{}
  }
  function bindCanvas(canvas,pageNum){
    canvas.addEventListener('pointerdown',e=>{
      clearNativeSelection();
      // Reject a palm before adding it to the gesture set. Previously a resting
      // palm could become a second pointer and cancel an active finger stroke.
      if(shouldIgnoreTouch(e)){e.preventDefault();return;}
      rememberPointer(e);
      if(e.pointerType==='touch'&&canStartTwoFingerGesture()){
        e.preventDefault();safeCapture(canvas,e.pointerId);beginTouchGesture(canvas,pageNum);return;
      }
      const p=pointFromEvent(e,canvas),viewport=$('#documentViewport');
      // Stylus eraser end / eraser button when the browser exposes it through Pointer Events.
      if(e.pointerType==='pen'&&(e.button===5||(e.buttons&32)===32)){
        e.preventDefault();safeCapture(canvas,e.pointerId);eraseAt(pageNum,p);
        state.drawing={erase:true,hardwareEraser:true,pageNum,pointerId:e.pointerId,pointerType:e.pointerType,lastErase:p};return;
      }
      if(state.tool==='hand'){
        e.preventDefault();safeCapture(canvas,e.pointerId);
        state.drawing={pan:true,pageNum,pointerId:e.pointerId,pointerType:e.pointerType,startClient:{x:e.clientX,y:e.clientY},startScroll:{x:viewport.scrollLeft,y:viewport.scrollTop}};return;
      }
      e.preventDefault();safeCapture(canvas,e.pointerId);
      if(state.tool==='select'){
        if(state.selected?.page===pageNum){const selected=state.annotations[pageNum]?.[state.selected.index],corner=hitStickyResizeHandle(selected,p);if(corner){state.drawing={resizeSticky:true,pageNum,pointerId:e.pointerId,pointerType:e.pointerType,index:state.selected.index,corner,original:JSON.parse(JSON.stringify(selected)),moved:false};redrawPage(pageNum);return;}}
        const index=hitTestAnnotation(pageNum,p);state.selected=index>=0?{page:pageNum,index}:null;
        if(index>=0){state.drawing={selectMove:true,pageNum,pointerId:e.pointerId,pointerType:e.pointerType,index,start:p,original:JSON.parse(JSON.stringify(state.annotations[pageNum][index])),moved:false};}
        redrawPage(pageNum);return;
      }
      if(state.tool==='text'){const hit=hitTestAnnotation(pageNum,p),existing=hit>=0?state.annotations[pageNum]?.[hit]:null;if(existing?.type==='text'){state.selected={page:pageNum,index:hit};redrawPage(pageNum);openTextEditor(pageNum,hit);}else openTextEditor(pageNum,null,{x:p.x,y:p.y,color:state.color,size:22});return;}
      if(state.tool==='sticky'){ const note={type:'sticky',x:Math.max(.02,Math.min(.73,p.x-.11)),y:Math.max(.02,Math.min(.80,p.y-.08)),w:.24,h:.17,text:'',color:'#fff3a3',align:state.lang==='ar'?'right':'left',fontScale:1};addAnnotation(pageNum,note);state.selected={page:pageNum,index:(state.annotations[pageNum]||[]).length-1};setTool('select');redrawPage(pageNum);requestAnimationFrame(()=>openStickyEditor(pageNum,state.selected.index));return; }
      if(state.tool==='signature'){ if(!state.signatureData){ openSignature(); return; } addAnnotation(pageNum,{type:'image',x:p.x,y:p.y,w:.24,h:.10,data:state.signatureData}); setTool('select'); return; }
      if(state.tool==='image'){if(!state.pendingImage){$('#imageInput')?.click();return;}const aspect=state.pendingImage.aspect||1.4,w=.30,h=Math.min(.38,w*(canvas.width/canvas.height)/aspect),x=Math.max(.01,Math.min(1-w,p.x-w/2)),y=Math.max(.01,Math.min(1-h,p.y-h/2));addAnnotation(pageNum,{type:'image',x,y,w,h,data:state.pendingImage.data});state.pendingImage=null;setTool('select');return;}
      if(state.tool==='eraser'){ eraseAt(pageNum,p); state.drawing={erase:true,pageNum,pointerId:e.pointerId,pointerType:e.pointerType,lastErase:p}; return; }
      if(state.tool==='magic'){state.drawing={magic:true,pageNum,pointerId:e.pointerId,pointerType:e.pointerType,stroke:{type:'stroke',tool:'magic',color:state.magicColor,size:state.magicSize,points:[p]}};drawMagicPoint(canvas,state.drawing.stroke,p);return;}
      state.drawing={pageNum,pointerId:e.pointerId,pointerType:e.pointerType,stroke:{type:'stroke',tool:state.tool,color:state.color,size:state.size,points:[p]}};
    },{passive:false});
    canvas.addEventListener('pointermove',e=>{
      if(e.pointerType==='touch'&&state.touchPointers.has(e.pointerId)){
        state.touchPointers.set(e.pointerId,{x:e.clientX,y:e.clientY,w:e.width||0,h:e.height||0});
        if(canStartTwoFingerGesture()){e.preventDefault();if(!state.touchGesture)beginTouchGesture(canvas,pageNum);updateTouchGesture();return;}
      }
      if(!state.drawing||state.drawing.pageNum!==pageNum||state.drawing.pointerId!==e.pointerId||shouldIgnoreTouch(e))return;
      const p=pointFromEvent(e,canvas);
      if(state.drawing.pan){e.preventDefault();const viewport=$('#documentViewport'),dx=e.clientX-state.drawing.startClient.x,dy=e.clientY-state.drawing.startClient.y;viewport.scrollLeft=state.drawing.startScroll.x-dx;viewport.scrollTop=state.drawing.startScroll.y-dy;return;}
      if(state.drawing.selectMove){e.preventDefault();const d=state.drawing,dx=p.x-d.start.x,dy=p.y-d.start.y;moveAnnotationFromOriginal(state.annotations[pageNum][d.index],d.original,dx,dy);d.moved=d.moved||Math.hypot(dx,dy)>.002;schedulePageRedraw(pageNum);return;}
      if(state.drawing.resizeSticky){e.preventDefault();const d=state.drawing,target=state.annotations[pageNum][d.index];resizeStickyFromOriginal(target,d.original,d.corner,p);d.moved=true;schedulePageRedraw(pageNum);return;}
      e.preventDefault();
      if(state.drawing.erase){ const last=state.drawing.lastErase; if(last&&Math.hypot(p.x-last.x,p.y-last.y)<.008)return; state.drawing.lastErase=p; if(eraseAt(pageNum,p,false))schedulePageRedraw(pageNum); return; }
      const d=state.drawing,s=d.stroke;
      if(d.smartLocked){if(d.smartShape?.shape==='line'){d.smartShape.x2=p.x;d.smartShape.y2=p.y;redrawPage(pageNum,d.smartShape);}return;}
      const pts=coalescedPoints(e,canvas);
      const moved=appendInterpolatedStrokePoints(s,pts,canvas);
      if(moved)armStraightHold(canvas,pageNum,d);
    },{passive:false});
    const finish=e=>{
      forgetPointer(e);
      if(!state.drawing||state.drawing.pageNum!==pageNum||state.drawing.pointerId!==e.pointerId)return;
      const d=state.drawing;
      if(d.pan){state.drawing=null;return;}
      if(d.resizeSticky){state.drawing=null;if(d.moved)commitChange();else redrawPage(pageNum);return;}
      if(d.selectMove){state.drawing=null;if(d.moved)commitChange();else{redrawPage(pageNum);const a=state.annotations[pageNum]?.[d.index];if(a?.type==='sticky')setTimeout(()=>openStickyEditor(pageNum,d.index),40);else if(a?.type==='text')setTimeout(()=>openTextEditor(pageNum,d.index),40);}return;}
      clearStraightHold(d);
      if(d.magic){const ghost={...d.stroke,startedAt:performance.now(),duration:1200};(state.magicGhosts[pageNum]??=[]).push(ghost);state.drawing=null;animateMagicPage(pageNum);return;}
      if(d.smartShape){(state.annotations[pageNum]??=[]).push(d.smartShape);redrawPage(pageNum);}else if(d.stroke){const st=d.stroke;(state.annotations[pageNum]??=[]).push(st);redrawPage(pageNum);}
      state.drawing=null;commitChange();
    };
    canvas.addEventListener('pointerup',finish,{passive:false});
    canvas.addEventListener('pointercancel',finish,{passive:false});
    canvas.addEventListener('lostpointercapture',e=>{if(state.drawing?.pointerId===e.pointerId)finish(e);});
  }
  function addAnnotation(page,obj){ (state.annotations[page]??=[]).push(obj); redrawPage(page); commitChange(); }
  function splitStrokeAtPoint(stroke,p,radius=.022){
    const pts=stroke.points||[];if(pts.length<2)return pts.some(q=>Math.hypot(q.x-p.x,q.y-p.y)<radius)?[]:[stroke];
    const chunks=[];let chunk=[];
    for(const q of pts){
      if(Math.hypot(q.x-p.x,q.y-p.y)<radius){if(chunk.length>1)chunks.push(chunk);chunk=[];}
      else chunk.push(q);
    }
    if(chunk.length>1)chunks.push(chunk);
    if(chunks.length===1&&chunks[0].length===pts.length)return [stroke];
    return chunks.map(points=>({...stroke,points:points.map(q=>({...q}))}));
  }
  function textCharIndexAtPoint(page,a,p){
    const chars=Array.from(String(a.text||''));if(!chars.length)return -1;
    const b=annotationBounds(a),rel=clamp((p.x-b.x)/Math.max(.0001,b.w),0,.9999);let idx=Math.floor(rel*chars.length);
    if(state.lang==='ar')idx=chars.length-1-idx;return clamp(idx,0,chars.length-1);
  }
  function annotationTouched(a,p){
    if(a.type==='stroke')return (a.points||[]).some(q=>Math.hypot(q.x-p.x,q.y-p.y)<.026);
    if(a.type==='shape'&&a.shape==='line'){const ax=a.x1,ay=a.y1,bx=a.x2,by=a.y2,dx=bx-ax,dy=by-ay,l2=dx*dx+dy*dy||1,tv=clamp(((p.x-ax)*dx+(p.y-ay)*dy)/l2,0,1),qx=ax+tv*dx,qy=ay+tv*dy;return Math.hypot(p.x-qx,p.y-qy)<.028;}
    const b=annotationBounds(a);return p.x>=b.x-.018&&p.x<=b.x+b.w+.018&&p.y>=b.y-.018&&p.y<=b.y+b.h+.018;
  }
  function eraseAt(page,p,redraw=true){
    const list=state.annotations[page]||[];let changed=false,next=[];
    if(state.eraserMode==='object'){
      for(const a of list){if(annotationTouched(a,p)){changed=true;continue;}next.push(a);}
      if(changed){state.annotations[page]=next;if(state.selected?.page===page)state.selected=null;if(redraw)redrawPage(page);}return changed;
    }
    for(const a of list){
      if(a.type==='stroke'){const pieces=splitStrokeAtPoint(a,p,.023);if(pieces.length!==1||pieces[0]!==a)changed=true;next.push(...pieces);continue;}
      if(a.type==='text'){const b=annotationBounds(a),inside=p.x>=b.x-.018&&p.x<=b.x+b.w+.018&&p.y>=b.y-.018&&p.y<=b.y+b.h+.018;if(inside){const idx=textCharIndexAtPoint(page,a,p);if(idx>=0){const chars=Array.from(a.text||'');chars.splice(idx,1);const value=chars.join('');changed=true;if(value)next.push({...a,text:value});continue;}}next.push(a);continue;}
      if(a.type==='shape'||a.type==='image'||a.type==='sticky'){if(annotationTouched(a,p)){changed=true;continue;}next.push(a);continue;}
      next.push(a);
    }
    if(changed){state.annotations[page]=next;if(state.selected?.page===page)state.selected=null;if(redraw)redrawPage(page);}return changed;
  }
  function syncEraserUI(){$$('[data-eraser-mode]').forEach(x=>x.classList.toggle('active',x.dataset.eraserMode===state.eraserMode));}
  function schedulePageRedraw(page){ if(state.eraseFrame)return; state.eraseFrame=requestAnimationFrame(()=>{state.eraseFrame=0;redrawPage(page);}); }
  function drawMagicPoint(canvas,s,p){const ctx=canvas.getContext('2d'),w=canvas.width,h=canvas.height,r=Math.max(2,s.size*(w/760)*.82);ctx.save();ctx.fillStyle=s.color;ctx.globalAlpha=.94;ctx.beginPath();ctx.arc(p.x*w,p.y*h,r,0,Math.PI*2);ctx.fill();ctx.restore();}
  function drawLiveSegment(canvas,s,a,b){
    if(!a||!b)return;const ctx=canvas.getContext('2d'),w=canvas.width,h=canvas.height;
    ctx.save();ctx.strokeStyle=s.color;const high=s.tool==='highlighter',magic=s.tool==='magic';
    const pressure=(!high&&!magic)?(.62+.72*clamp(((a.p||.5)+(b.p||.5))/2,.05,1)):1;
    ctx.lineWidth=s.size*(w/760)*(high?3.4:(magic?1.25:pressure));
    ctx.globalAlpha=high?.34:(magic?.94:1);ctx.lineCap='round';ctx.lineJoin='round';
    ctx.beginPath();ctx.moveTo(a.x*w,a.y*h);ctx.lineTo(b.x*w,b.y*h);ctx.stroke();ctx.restore();
  }
  function drawStroke(ctx,s,w,h,alphaMultiplier=1){
    const pts=s.points;if(!pts.length)return;ctx.save();ctx.strokeStyle=s.color;const high=s.tool==='highlighter',magic=s.tool==='magic';
    ctx.globalAlpha=(high?.34:(magic?.94:1))*alphaMultiplier;ctx.globalCompositeOperation='source-over';ctx.lineCap='round';ctx.lineJoin='round';
    if(!high&&!magic&&pts.length>1){
      // Resampled points make finger handwriting continuous on iOS even when
      // Safari delivers sparse touch frames. Draw tiny connected segments with
      // stable round caps while retaining Pencil pressure.
      for(let i=1;i<pts.length;i++){
        const a=pts[i-1],b=pts[i],pressure=.62+.72*clamp(((a.p||.5)+(b.p||.5))/2,.05,1);
        ctx.lineWidth=s.size*(w/760)*pressure;ctx.beginPath();ctx.moveTo(a.x*w,a.y*h);ctx.lineTo(b.x*w,b.y*h);ctx.stroke();
      }
    }else{
      ctx.lineWidth=s.size*(w/760)*(high?3.4:(magic?1.25:1));ctx.beginPath();ctx.moveTo(pts[0].x*w,pts[0].y*h);
      if(pts.length===1)ctx.lineTo(pts[0].x*w+.1,pts[0].y*h+.1);
      for(let i=1;i<pts.length-1;i++){const mx=(pts[i].x+pts[i+1].x)/2*w,my=(pts[i].y+pts[i+1].y)/2*h;ctx.quadraticCurveTo(pts[i].x*w,pts[i].y*h,mx,my);}
      if(pts.length>1){const q=pts.at(-1);ctx.lineTo(q.x*w,q.y*h);}ctx.stroke();
    }
    ctx.restore();
  }
  function magicGhostAlpha(g,now){const elapsed=now-g.startedAt;if(elapsed<0||elapsed>=g.duration)return 0;const hold=Math.min(720,g.duration*.62);return elapsed<=hold?1:Math.max(0,1-(elapsed-hold)/Math.max(1,g.duration-hold));}
  function animateMagicPage(pageNum){if(state.magicAnimations[pageNum])return;state.magicAnimations[pageNum]=true;const tick=()=>{const now=performance.now(),arr=(state.magicGhosts[pageNum]||[]).filter(g=>now-g.startedAt<g.duration);state.magicGhosts[pageNum]=arr;redrawPage(pageNum);if(arr.length)requestAnimationFrame(tick);else{delete state.magicAnimations[pageNum];redrawPage(pageNum);}};requestAnimationFrame(tick);}
  function redrawPage(pageNum,preview){ const p=state.pages[pageNum-1]; if(!p?.overlay)return; const c=p.overlay,ctx=c.getContext('2d'); ctx.clearRect(0,0,c.width,c.height); const list=state.annotations[pageNum]||[]; for(const a of list) drawAnnotation(ctx,a,c.width,c.height); const ghosts=state.magicGhosts[pageNum]||[];if(ghosts.length){const now=performance.now();for(const g of ghosts){const alpha=magicGhostAlpha(g,now);if(alpha>0)drawStroke(ctx,g,c.width,c.height,alpha);}} if(preview) drawAnnotation(ctx,preview,c.width,c.height); if(state.selected?.page===pageNum&&list[state.selected.index])drawSelection(ctx,list[state.selected.index],c.width,c.height); }
  function drawAnnotation(ctx,a,w,h){
    if(a.type==='stroke') return drawStroke(ctx,a,w,h);
    if(a.type==='shape'){ctx.save();ctx.strokeStyle=a.color||'#1f2430';ctx.lineWidth=(a.size||4)*(w/760);ctx.lineCap='round';ctx.lineJoin='round';ctx.globalAlpha=1;ctx.beginPath();if(a.shape==='line'){ctx.moveTo(a.x1*w,a.y1*h);ctx.lineTo(a.x2*w,a.y2*h);}else if(a.shape==='rect'){ctx.roundRect(a.x*w,a.y*h,a.w*w,a.h*h,Math.min(8,w*.01));}else{ctx.ellipse((a.x+a.w/2)*w,(a.y+a.h/2)*h,Math.abs(a.w*w/2),Math.abs(a.h*h/2),0,0,Math.PI*2);}ctx.stroke();ctx.restore();return;}
    if(a.type==='text'){ctx.save();const fontSize=(a.size||22)*(w/760),lines=String(a.text||'').split(/\n/);ctx.fillStyle=a.color||'#1f2430';ctx.font=`${fontSize}px ${state.lang==='ar'?'IBM Plex Sans Arabic':'Manrope'},sans-serif`;ctx.textBaseline='top';ctx.textAlign='start';ctx.direction=state.lang==='ar'?'rtl':'ltr';const x=a.x*w,y=a.y*h,lineH=fontSize*1.35;for(let i=0;i<lines.length;i++)ctx.fillText(lines[i],x,y+i*lineH);ctx.restore();}
    if(a.type==='sticky'){const x=a.x*w,y=a.y*h,ww=(a.w||.24)*w,hh=(a.h||.17)*h,r=Math.min(14,w*.018),fold=Math.min(20,ww*.13,hh*.16);ctx.save();ctx.fillStyle=a.color||'#fff3a3';ctx.shadowColor='rgba(31,42,72,.11)';ctx.shadowBlur=Math.max(4,w*.010);ctx.shadowOffsetY=Math.max(2,w*.004);ctx.beginPath();ctx.roundRect(x,y,ww,hh,r);ctx.fill();ctx.shadowColor='transparent';ctx.fillStyle='rgba(255,255,255,.42)';ctx.beginPath();ctx.moveTo(x+ww-fold,y);ctx.lineTo(x+ww,y);ctx.lineTo(x+ww,y+fold);ctx.closePath();ctx.fill();const scale=Math.max(.72,Math.min(1.35,Number(a.fontScale||1))),fontSize=Math.max(11,w*.018*scale),lineHeight=Math.max(15,fontSize*1.45),align=a.align||((state.lang==='ar')?'right':'left');ctx.fillStyle='#2c3343';ctx.font=`${fontSize}px ${state.lang==='ar'?'IBM Plex Sans Arabic':'Manrope'},sans-serif`;ctx.textBaseline='top';ctx.textAlign=align;ctx.direction=state.lang==='ar'?'rtl':'ltr';const tx=align==='center'?x+ww*.5:(align==='right'?x+ww*.90:x+ww*.10),maxLines=Math.max(2,Math.floor((hh*.72)/lineHeight));wrapCanvasText(ctx,a.text,tx,y+hh*.14,ww*.80,lineHeight,maxLines);ctx.restore();return;}
    if(a.type==='image'){
      let img=imageCache.get(a.data);const page=state.pages.find(p=>p?.overlay===ctx.canvas)?.number;
      if(img?.complete&&img.naturalWidth){ctx.drawImage(img,a.x*w,a.y*h,a.w*w,a.h*h);return;}
      if(!img){img=new Image();imageCache.set(a.data,img);img.src=a.data;}
      if(page)img.addEventListener('load',()=>schedulePageRedraw(page),{once:true});
    }
  }
  function redrawAll(){ state.pages.forEach(p=>{if(p.rendered)redrawPage(p.number)}); }

  async function preloadAnnotationImages(){
    const sources=[...new Set(Object.values(state.annotations).flat().filter(a=>a?.type==='image'&&a.data).map(a=>a.data))];
    await Promise.all(sources.map(src=>new Promise(resolve=>{let img=imageCache.get(src);if(img?.complete&&img.naturalWidth)return resolve();if(!img){img=new Image();imageCache.set(src,img);img.src=src;}const done=()=>resolve();img.addEventListener('load',done,{once:true});img.addEventListener('error',done,{once:true});setTimeout(done,1800);}))); 
  }
  function readImage(file){
    return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>{const img=new Image();img.onload=()=>resolve({data:reader.result,aspect:img.naturalWidth/Math.max(1,img.naturalHeight)});img.onerror=reject;img.src=reader.result;};reader.onerror=reject;reader.readAsDataURL(file);});
  }
  async function chooseImage(file){
    if(!file||!/^image\/(png|jpeg|webp|gif)$/i.test(file.type||'')){toast(t('invalidImage'));return;}
    try{state.pendingImage=await readImage(file);setTool('image');toast(t('imageReady'));}catch(e){console.error(e);toast(t('imageReadFail'));}
  }

  function snapshot(){ return JSON.stringify(state.annotations); }
  function pushHistory(initial=false){ const snap=snapshot(); if(!initial&&state.history[state.historyIndex]===snap)return; state.history=state.history.slice(0,state.historyIndex+1); state.history.push(snap); if(state.history.length>40)state.history.shift(); state.historyIndex=state.history.length-1; updateHistoryButtons(); }
  function commitChange(){ pushHistory(); updateHistoryButtons(); const saveLabel=$('#saveState span');if(saveLabel)saveLabel.textContent='…';$('#saveState')?.classList.add('visible'); scheduleSave(); }
  function undo(){ if(state.historyIndex<=0)return; state.historyIndex--; state.selected=null; state.annotations=JSON.parse(state.history[state.historyIndex]); redrawAll(); updateHistoryButtons(); scheduleSave(); }
  function redo(){ if(state.historyIndex>=state.history.length-1)return; state.historyIndex++; state.selected=null; state.annotations=JSON.parse(state.history[state.historyIndex]); redrawAll(); updateHistoryButtons(); scheduleSave(); }
  function updateHistoryButtons(){ const noUndo=state.historyIndex<=0,noRedo=state.historyIndex>=state.history.length-1;$('#undoBtn').disabled=noUndo;$('#redoBtn').disabled=noRedo;if($('#menuUndoBtn'))$('#menuUndoBtn').disabled=noUndo;if($('#menuRedoBtn'))$('#menuRedoBtn').disabled=noRedo;if($('#quickUndoBtn'))$('#quickUndoBtn').disabled=noUndo; }
  function scheduleSave(){ clearTimeout(state.saveTimer); state.saveTimer=setTimeout(saveDocument,800); }
  async function saveDocument(force=false){
    if(!state.mode||!state.currentDocId)return;
    if(state.saveDisabled&&!force){if($('#saveState span'))$('#saveState span').textContent=t('notSaved');$('#saveState')?.classList.remove('visible');return;}
    if(force)state.saveDisabled=false;
    try{
      const hours=Math.max(24,Math.min(360,Number(state.retentionHours||cfg.defaultRetentionHours||24))),expiresAt=Date.now()+hours*36e5;
      await dbPut({id:state.currentDocId,type:state.mode,name:state.filename,pdf:state.mode==='pdf'?state.pdfBytes.buffer.slice(0):null,annotations:state.annotations,boardOrientation:state.mode==='whiteboard'?state.boardOrientation:null,bookmarks:state.bookmarks||[],retentionHours:hours,expiresAt,savedAt:Date.now()});
      state.currentExpiresAt=expiresAt;flashSaveState(t('saved'));updateRecentFiles();
    }catch(e){console.error(e);toast(t('saveFailed'));}
  }

  function syncPenUI(){
    const preset=state.penPresets[state.activePen];
    $$('.pen-preset').forEach((el,i)=>{el.classList.toggle('active',state.tool==='pen'&&i===state.activePen);const sw=el.querySelector('.pen-swatch');if(sw)sw.style.background=state.penPresets[i].color;});
    if(preset){$('#colorInput').value=preset.color;const paletteSelected=$('#paletteSelected');if(paletteSelected)paletteSelected.style.background=preset.color;$$('.size-dots button').forEach(x=>x.classList.toggle('active',+x.dataset.size===preset.size));}
    $$('.quick-colors button').forEach(x=>x.classList.toggle('active',x.dataset.color.toLowerCase()===(preset?.color||'').toLowerCase()));
    if($('#highlighterDot'))$('#highlighterDot').style.background=state.highlighterColor;if($('#highlighterColorInput'))$('#highlighterColorInput').value=state.highlighterColor;if($('#highlighterPaletteSelected'))$('#highlighterPaletteSelected').style.background=state.highlighterColor;
    if($('#magicDot'))$('#magicDot').style.background=state.magicColor;if($('#magicColorInput'))$('#magicColorInput').value=state.magicColor;if($('#magicPaletteSelected'))$('#magicPaletteSelected').style.background=state.magicColor;
    $$('[data-highlight-color]').forEach(x=>x.classList.toggle('active',x.dataset.highlightColor.toLowerCase()===state.highlighterColor.toLowerCase()));
    $$('[data-magic-color]').forEach(x=>x.classList.toggle('active',x.dataset.magicColor.toLowerCase()===state.magicColor.toLowerCase()));
    $$('[data-magic-size]').forEach(x=>x.classList.toggle('active',+x.dataset.magicSize===state.magicSize));syncEraserUI();
  }
  function setTool(tool){
    if(tool==='highlighter'){state.color=state.highlighterColor;state.size=5;}
    else if(tool==='magic'){state.color=state.magicColor;state.size=state.magicSize;}
    else if(tool==='pen'){const preset=state.penPresets[state.activePen];state.color=preset.color;state.size=preset.size;}
    state.tool=tool; state.selected=tool==='select'?state.selected:null;
    $$('.tool[data-tool]').forEach(x=>x.classList.toggle('active',x.dataset.tool===tool));
    $$('.pen-preset').forEach((x,i)=>x.classList.toggle('active',tool==='pen'&&i===state.activePen));
    $('#moreToolsBtn')?.classList.remove('active'); $('#createToolsBtn')?.classList.toggle('active',['text','sticky','signature','image'].includes(tool));
    closeToolPopovers(); updateToolMode(); redrawAll(); syncPenUI(); if(tool==='signature'&&!state.signatureData) openSignature();
  }
  function choosePen(index,openSettings=true){
    state.activePen=Math.max(0,Math.min(state.penPresets.length-1,index));
    const preset=state.penPresets[state.activePen];
    state.color=preset.color;state.size=preset.size;
    setTool('pen');syncPenUI();
    // On touch devices a single tap must both select the pen and reveal its options.
    if(openSettings)openToolPopover('toolSettingsPopover',$$('.pen-preset')[state.activePen]);
  }
  function updateToolMode(){ state.pages.forEach(p=>{p.wrap.classList.toggle('hand-mode',state.tool==='hand');p.wrap.classList.toggle('select-mode',state.tool==='select');}); }
  function resetToWelcome(){ clearPendingDownload(); closeActivePdfEngine();state.loadToken++;state.renderQueue=[];state.observer?.disconnect();state.renderObserver?.disconnect();stopStudyTimer(false);state.focusMode=false;document.body.classList.remove('editor-active','whiteboard-mode','focus-mode');$('#welcomeView').hidden=false;$('#siteFooter').hidden=false;$('#editorView').hidden=true;$('#fileHeader').hidden=true;$('#downloadBtn').hidden=true;state.mode=null;state.currentDocId=null;state.pdf=null;state.pdfBytes=null;state.selected=null;state.magicGhosts={};state.magicAnimations={};state.touchPointers.clear();state.touchGesture=null;state.activePenPointer=null;$('#fileInput').value='';updateRecentFiles(); }
  function setZoom(value,anchor=null){
    const viewport=$('#documentViewport'),oldZoom=Math.max(.01,state.zoom||1),next=clamp(value,.5,3);
    if(Math.abs(next-oldZoom)<.001)return;
    const vr=viewport.getBoundingClientRect(),localX=anchor?anchor.clientX-vr.left:viewport.clientWidth/2,localY=anchor?anchor.clientY-vr.top:viewport.clientHeight/2;
    const contentX=anchor&&Number.isFinite(anchor.contentX)?anchor.contentX:(viewport.scrollLeft+localX)/oldZoom;
    const contentY=anchor&&Number.isFinite(anchor.contentY)?anchor.contentY:(viewport.scrollTop+localY)/oldZoom;
    state.zoom=next;const stack=$('#pagesStack');stack.style.transform='none';stack.style.marginBottom='0';stack.style.gap=`${Math.max(8,state.basePageGap*next)}px`;
    state.pages.forEach(p=>{
      const bw=p.baseCssWidth||p.cssWidth/oldZoom||p.cssWidth,bh=p.baseCssHeight||p.cssHeight/oldZoom||p.cssHeight;
      p.baseCssWidth=bw;p.baseCssHeight=bh;const w=bw*next,h=bh*next;p.cssWidth=w;p.cssHeight=h;p.wrap.style.width=`${w}px`;p.wrap.style.height=`${h}px`;
      if(p.base){p.base.style.width=`${w}px`;p.base.style.height=`${h}px`;}
      if(p.overlay){p.overlay.style.width=`${w}px`;p.overlay.style.height=`${h}px`;}
    });
    viewport.scrollLeft=Math.max(0,contentX*next-localX);viewport.scrollTop=Math.max(0,contentY*next-localY);
    $('#zoomLabel').textContent=`${Math.round(next*100)}%`;scheduleZoomRerender();
  }

  function openSignature(){ $('#signatureModal').showModal(); requestAnimationFrame(setupSignaturePad); }
  function setupSignaturePad(){ const c=$('#signaturePad'),r=c.getBoundingClientRect(),ratio=Math.min(devicePixelRatio||1,2); c.width=r.width*ratio;c.height=r.height*ratio; const ctx=c.getContext('2d');ctx.strokeStyle='#17213d';ctx.lineCap='round';ctx.lineJoin='round'; let drawing=false,last=null,pointerId=null;c.dataset.used='false';
    c.onpointerdown=e=>{e.preventDefault();drawing=true;pointerId=e.pointerId;safeCapture(c,e.pointerId);last={x:(e.clientX-r.left)*ratio,y:(e.clientY-r.top)*ratio,p:e.pressure||.5};c.dataset.used='true'};
    c.onpointermove=e=>{if(!drawing||e.pointerId!==pointerId)return;e.preventDefault();const events=(typeof e.getCoalescedEvents==='function'&&e.getCoalescedEvents().length)?e.getCoalescedEvents():[e];for(const ev of events){const p={x:(ev.clientX-r.left)*ratio,y:(ev.clientY-r.top)*ratio,p:ev.pressure||.5};ctx.lineWidth=2.2*ratio*(.65+.7*((last.p+p.p)/2));ctx.beginPath();ctx.moveTo(last.x,last.y);ctx.lineTo(p.x,p.y);ctx.stroke();last=p;}};
    c.onpointerup=c.onpointercancel=e=>{if(e.pointerId===pointerId){drawing=false;pointerId=null;}};
  }
  function clearSignature(){ const c=$('#signaturePad');c.getContext('2d').clearRect(0,0,c.width,c.height);c.dataset.used='false'; }
  function useSignature(){ const c=$('#signaturePad');if(c.dataset.used!=='true'){toast(t('emptySignature'));return;} state.signatureData=c.toDataURL('image/png');$('#signatureModal').close();setTool('signature');toast(t('signatureReady')); }

  async function cleanupLegacyDownloadWorkers(){
    try{
      if('serviceWorker' in navigator){const regs=await navigator.serviceWorker.getRegistrations();for(const reg of regs){const url=reg.active?.scriptURL||reg.waiting?.scriptURL||reg.installing?.scriptURL||'';if(/download-sw(?:-v\d+)?\.js/.test(url)&&!/download-sw-v28\.js(?:\?|$)/.test(url))await reg.unregister();}}
      if('caches' in window){const names=await caches.keys();await Promise.all(names.filter(n=>n.startsWith('inknote-native-downloads-')&&n!=='inknote-native-downloads-v28').map(n=>caches.delete(n)));}
    }catch(err){console.warn('[InkNote] download worker cleanup skipped',err);}
  }
  let downloadWorkerPromise=null;
  const DOWNLOAD_CACHE_V26='inknote-native-downloads-v28';
  function safeAttachmentName(name){
    let value=String(name||'inknote.pdf').replace(/[\/\r\n]/g,'_').trim();if(!value.toLowerCase().endsWith('.pdf'))value+='.pdf';return value||'inknote.pdf';
  }
  function attachmentDisposition(name){
    const real=safeAttachmentName(name),ascii=real.normalize('NFKD').replace(/[^\x20-\x7E]+/g,'_').replace(/[";]+/g,'_').replace(/_+/g,'_').slice(0,120)||'inknote.pdf';
    const encoded=encodeURIComponent(real).replace(/[!'()*]/g,c=>'%'+c.charCodeAt(0).toString(16).toUpperCase());
    return `attachment; filename="${ascii}"; filename*=UTF-8''${encoded}`;
  }
  function warmDownloadWorker(){
    if(downloadWorkerPromise)return downloadWorkerPromise;
    if(!('serviceWorker' in navigator)||!window.isSecureContext||location.protocol!=='https:')return Promise.resolve(null);
    downloadWorkerPromise=(async()=>{
      try{
        const reg=await navigator.serviceWorker.register('./download-sw-v28.js?v=28',{scope:'./',updateViaCache:'none'});await navigator.serviceWorker.ready;try{await reg.update();}catch{}
        const active=()=>navigator.serviceWorker.controller&&/download-sw-v28\.js(?:\?|$)/.test(navigator.serviceWorker.controller.scriptURL||'');
        if(!active())await new Promise(resolve=>{let done=false;const finish=()=>{if(done)return;done=true;resolve();};navigator.serviceWorker.addEventListener('controllerchange',finish,{once:true});setTimeout(finish,2200);});
        return reg;
      }catch(err){console.warn('[InkNote] Native download worker unavailable:',err);return null;}
    })();return downloadWorkerPromise;
  }
  async function stageAttachment(blob,filename){
    const reg=await warmDownloadWorker();if(!reg||!('caches' in window))return null;
    const controller=navigator.serviceWorker.controller;if(!controller||!/download-sw-v28\.js(?:\?|$)/.test(controller.scriptURL||''))return null;
    const token=`${Date.now()}-${Math.random().toString(36).slice(2)}`,safe=safeAttachmentName(filename);
    const href=new URL(`./__inknote_download__/${encodeURIComponent(token)}/${encodeURIComponent(safe)}`,location.href).href;
    try{
      const cache=await caches.open(DOWNLOAD_CACHE_V26);for(const req of await cache.keys())await cache.delete(req);const headers=new Headers({'Content-Type':'application/pdf','Content-Disposition':attachmentDisposition(safe),'Cache-Control':'no-store, max-age=0','X-Content-Type-Options':'nosniff'});
      await cache.put(href,new Response(blob,{status:200,headers}));
      if(!(await cache.match(href)))return null;
      return href;
    }catch(err){console.warn('[InkNote] Could not stage native attachment:',err);return null;}
  }
  async function serviceWorkerDownload(blob,filename){
    const href=await stageAttachment(blob,filename);if(!href)return false;
    try{
      if(isAppleMobile()){
        // Top-level navigation to a same-origin attachment response is the route
        // Safari uses for its native View / Download sheet and Downloads manager.
        window.location.assign(href);
      }else{
        const a=document.createElement('a');a.href=href;a.download=safeAttachmentName(filename);a.rel='noopener';a.style.display='none';document.body.append(a);a.click();setTimeout(()=>a.remove(),1200);
      }
      return true;
    }catch(err){console.warn('[InkNote] Native attachment navigation failed:',err);return false;}
  }
  async function directDownload(blob,filename){
    if(await serviceWorkerDownload(blob,filename))return true;
    if(!isAppleMobile()&&typeof window.showSaveFilePicker==='function'){
      try{const handle=await window.showSaveFilePicker({suggestedName:filename,types:[{description:'PDF',accept:{'application/pdf':['.pdf']}}]});const writable=await handle.createWritable();await writable.write(blob);await writable.close();return true;}catch(err){if(err?.name==='AbortError')return false;}
    }
    const a=document.createElement('a'),url=URL.createObjectURL(blob);a.href=url;a.download=filename;a.rel='noopener';a.style.display='none';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),120000);return true;
  }

  function clearPendingDownload(){
    const pending=state.pendingDownload;
    if(pending?.previewUrl){try{URL.revokeObjectURL(pending.previewUrl)}catch{}}if(pending?.downloadUrl){try{URL.revokeObjectURL(pending.downloadUrl)}catch{}}
    state.pendingDownload=null;
  }
  function normalizeDownloadName(value,fallback='inknote.pdf'){
    let name=String(value||fallback).trim().replace(/[\/\r\n]/g,'_').replace(/\.pdf$/i,'');if(!name)name=String(fallback||'inknote').replace(/\.pdf$/i,'');return name+'.pdf';
  }
  function pendingDownloadName(){return normalizeDownloadName($('#downloadFilenameInput')?.value,state.pendingDownload?.filename||'inknote.pdf');}
  function showDownloadChoice(blob,filename){
    clearPendingDownload();
    const pdfBlob=blob.type==='application/pdf'?blob:new Blob([blob],{type:'application/pdf'}),safe=normalizeDownloadName(filename);
    state.pendingDownload={blob:pdfBlob,filename:safe,previewUrl:URL.createObjectURL(pdfBlob)};
    const input=$('#downloadFilenameInput');if(input)input.value=safe.replace(/\.pdf$/i,'');
    const name=$('#downloadChoiceName');if(name)name.textContent=safe;
    $('#downloadChoiceModal')?.showModal();setTimeout(()=>input?.select?.(),80);
  }
  function syncDownloadPreviewName(){const pending=state.pendingDownload;if(!pending)return;const name=pendingDownloadName();const el=$('#downloadChoiceName');if(el)el.textContent=name;}
  function viewPendingDownload(){const pending=state.pendingDownload;if(!pending)return;syncDownloadPreviewName();window.open(pending.previewUrl,'_blank','noopener');}
  async function downloadPendingFile(){
    const pending=state.pendingDownload;if(!pending)return;const filename=pendingDownloadName();syncDownloadPreviewName();const btn=$('#directDownloadBtn');if(btn)btn.disabled=true;
    try{const ok=await directDownload(pending.blob,filename);if(ok){toast(t('exported'));$('#downloadChoiceModal')?.close();}}finally{if(btn)btn.disabled=false;}
  }

  function updateExportMeta(){
    if(!$('#exportMeta'))return;
    const count=state.mode==='whiteboard'?1:(state.pdf?.numPages||0);
    $('#exportName').textContent=state.filename;
    $('#exportMeta').textContent=`${count} ${t('pagesCount')} · ${t('freePlan')}`;
  }
  async function exportPdf(){
    if(!state.mode)return;toast(t('exporting'));
    const btn=$('#confirmExport');
    btn.disabled=true;
    btn.querySelector('span').textContent=t('exporting');
    const selectionBeforeExport=state.selected;
    state.selected=null;
    redrawAll();
    try{
      await preloadAnnotationImages();
      const lib=await window.ensurePdfLib();
      let pdfDoc,pages;
      if(state.mode==='whiteboard'){
        pdfDoc=await lib.PDFDocument.create();
        const board=state.pages[0],ratio=board.overlay.height/board.overlay.width;
        pdfDoc.addPage([960,960*ratio]);
        pages=pdfDoc.getPages();
      }else{
        pdfDoc=await lib.PDFDocument.load(state.pdfBytes.slice());
        pages=pdfDoc.getPages();
      }
      for(let i=0;i<pages.length;i++){
        const ann=state.annotations[i+1]||[];
        if(ann.length||state.mode==='whiteboard'){
          const rendered=state.mode==='whiteboard'?state.pages[0]:await renderPage(i+1),source=rendered.overlay;
          redrawPage(i+1);
          await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
          // All users get the highest annotation export quality.
          const exportCanvas=document.createElement('canvas');
          exportCanvas.width=Math.max(1,source.width*2);
          exportCanvas.height=Math.max(1,source.height*2);
          const hctx=exportCanvas.getContext('2d');
          for(const a of ann)drawAnnotation(hctx,a,exportCanvas.width,exportCanvas.height);
          const png=await pdfDoc.embedPng(exportCanvas.toDataURL('image/png')),size=pages[i].getSize();
          pages[i].drawImage(png,{x:0,y:0,width:size.width,height:size.height});
        }
      }
      const out=await pdfDoc.save(),blob=new Blob([out],{type:'application/pdf'}),downloadName=state.filename.replace(/\.pdf$/i,'')+'-inknote.pdf';
      if($('#exportModal')?.open)$('#exportModal').close();
      showDownloadChoice(blob,downloadName);
    }catch(e){
      console.error(e);toast(t('exportFail'));
    }finally{
      state.selected=selectionBeforeExport;redrawAll();btn.disabled=false;btn.querySelector('span').textContent=t('downloadPdf');
    }
  }

  function loadAds(){
    if(!cfg.adsenseClient||!cfg.adsenseSlot)return;
    if(!document.getElementById('inknote-adsense-script')){const s=document.createElement('script');s.id='inknote-adsense-script';s.async=true;s.crossOrigin='anonymous';s.src=`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(cfg.adsenseClient)}`;document.head.append(s);}
    $$('.ad-slot').forEach(box=>{ if(box.querySelector('.adsbygoogle'))return; const reserved=box.querySelector('.ad-reserved')||box; const ad=document.createElement('ins'); ad.className='adsbygoogle'; ad.style.display='block'; ad.style.width='100%'; ad.style.minHeight='50px'; ad.dataset.adClient=cfg.adsenseClient; ad.dataset.adSlot=cfg.adsenseSlot; ad.dataset.adFormat='horizontal'; ad.dataset.fullWidthResponsive='true'; reserved.replaceChildren(ad); try{(window.adsbygoogle=window.adsbygoogle||[]).push({});}catch{} });
  }

  const toolPopoverIds=['toolSettingsPopover','highlighterPopover','magicPopover','eraserPopover','createToolsPopover','moreToolsPopover'];
  function portalizeToolPopovers(){
    for(const id of toolPopoverIds){
      const pop=$('#'+id);if(!pop)continue;
      if(pop.parentElement!==document.body)document.body.appendChild(pop);
      pop.classList.add('portal-popover');
    }
  }
  function isTouchToolbar(){
    return navigator.maxTouchPoints>0 || matchMedia('(pointer: coarse)').matches || innerWidth<=820;
  }
  function clearPopoverPosition(pop){
    for(const prop of ['top','bottom','left','right','inset-inline-start','inset-inline-end','width','max-width','transform'])pop.style.removeProperty(prop);
    pop.removeAttribute('data-touch-sheet');pop.removeAttribute('data-touch-anchor');
  }
  function positionToolPopover(pop,button){
    clearPopoverPosition(pop);
    if(isTouchToolbar()){
      pop.setAttribute('data-touch-anchor','1');
      pop.style.setProperty('position','fixed','important');
      pop.style.setProperty('bottom','auto','important');
      pop.style.setProperty('right','auto','important');
      pop.style.setProperty('transform','none','important');
      const rect=button.getBoundingClientRect();
      const preferred=pop.classList.contains('ink-settings-popover')?292:(pop.classList.contains('more-tools-popover')?210:244);
      const width=Math.min(preferred,innerWidth-20);
      pop.style.setProperty('width',`${width}px`,'important');
      pop.style.setProperty('max-width',`${innerWidth-20}px`,'important');
      // Keep touch menus fixed to the toolbar rather than turning them into a moving bottom sheet.
      const bar=$('#unifiedToolbar')?.getBoundingClientRect(),measured=Math.min(pop.scrollHeight||220,Math.max(150,innerHeight*.55));
      let top=(bar?.bottom||rect.bottom)+8;if(top+measured>innerHeight-8)top=Math.max(8,(bar?.top||rect.top)-measured-8);
      const left=Math.max(10,Math.min(innerWidth-width-10,rect.left+rect.width/2-width/2));
      pop.style.setProperty('--popover-arrow-x',`${Math.max(16,Math.min(width-16,rect.left+rect.width/2-left))}px`);
      pop.style.setProperty('top',`${Math.round(top)}px`,'important');
      pop.style.setProperty('left',`${Math.round(left)}px`,'important');
      return;
    }
    const rect=button.getBoundingClientRect();
    const width=Math.min(360,Math.max(280,pop.scrollWidth||300));
    const left=Math.max(12,Math.min(innerWidth-width-12,rect.left+rect.width/2-width/2));
    const top=Math.min(innerHeight-180,rect.bottom+10);
    pop.style.setProperty('position','fixed','important');
    pop.style.setProperty('top',`${Math.max(12,top)}px`,'important');
    pop.style.setProperty('bottom','auto','important');
    pop.style.setProperty('left',`${left}px`,'important');
    pop.style.setProperty('right','auto','important');
    pop.style.setProperty('transform','none','important');
    pop.style.setProperty('width',`${width}px`,'important');
  }
  function closeToolPopovers(except=null){
    if(!except){const tools=$('.toolbar-tools');tools?.classList.remove('popover-locked');document.body.classList.remove('tool-popover-open');}
    for(const id of toolPopoverIds){
      const el=$('#'+id);if(!el||id===except)continue;
      el.hidden=true;el.classList.remove('is-open');clearPopoverPosition(el);
    }
    $$('[aria-controls]').forEach(btn=>{const controlled=btn.getAttribute('aria-controls');if(toolPopoverIds.includes(controlled)&&controlled!==except)btn.setAttribute('aria-expanded','false');});
  }
  function openToolPopover(id,button){
    const pop=$('#'+id);if(!pop||!button)return;
    closeToolPopovers(id);
    $$('[aria-controls="'+id+'"]').forEach(btn=>btn.setAttribute('aria-expanded','false'));
    pop.hidden=false;pop.classList.add('is-open');button.setAttribute('aria-expanded','true');
    const tools=$('.toolbar-tools');if(isTouchToolbar()&&tools){tools.dataset.lockedScroll=String(tools.scrollLeft);tools.classList.add('popover-locked');document.body.classList.add('tool-popover-open');requestAnimationFrame(()=>{tools.scrollLeft=Number(tools.dataset.lockedScroll||0);});}
    requestAnimationFrame(()=>positionToolPopover(pop,button));
  }
  function toggleToolPopover(id,button){
    const pop=$('#'+id);if(!pop)return;
    if(pop.hidden||!pop.classList.contains('is-open'))openToolPopover(id,button);else closeToolPopovers();
  }

  function materializeToolbarIcons(){
    $$('.context-bar svg use,.tool-popover svg use').forEach(use=>{const href=use.getAttribute('href')||use.getAttribute('xlink:href');if(!href||!href.startsWith('#'))return;const symbol=document.querySelector(href),svg=use.closest('svg');if(!symbol||!svg)return;svg.setAttribute('viewBox',symbol.getAttribute('viewBox')||'0 0 24 24');svg.setAttribute('fill','none');svg.innerHTML=symbol.innerHTML;});
  }

  function bindUI(){
    portalizeToolPopovers();
    materializeToolbarIcons();
    $('#langBtn').onclick=()=>setLanguage(state.lang==='ar'?'en':'ar'); if($('#editorLangBtn')) $('#editorLangBtn').onclick=()=>setLanguage(state.lang==='ar'?'en':'ar'); $('#chooseFile').onclick=e=>{e.stopPropagation();$('#fileInput').click()}; $('#dropZone').onclick=e=>{if(e.target.closest('button'))return;$('#fileInput').click()}; $('#dropZone').onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();$('#fileInput').click()}}; $('#fileInput').onchange=e=>openFile(e.target.files[0]);
    for(const event of ['dragenter','dragover']) $('#dropZone').addEventListener(event,e=>{e.preventDefault();$('#dropZone').classList.add('dragover')}); for(const event of ['dragleave','drop']) $('#dropZone').addEventListener(event,e=>{e.preventDefault();$('#dropZone').classList.remove('dragover')}); $('#dropZone').addEventListener('drop',e=>openFile(e.dataTransfer.files[0]));
    $('#startWhiteboard').onclick=()=>$('#whiteboardModal').showModal(); $$('.orientation-option').forEach(el=>el.onclick=()=>{const orientation=el.dataset.orientation;$$('.orientation-option').forEach(x=>x.classList.toggle('active',x===el));$('#whiteboardModal').close();startWhiteboard({},t('whiteboardName'),null,orientation);});
    $$('.tool[data-tool]').forEach(el=>el.onclick=()=>setTool(el.dataset.tool)); $$('[data-menu-tool]').forEach(el=>el.onclick=()=>setTool(el.dataset.menuTool));
    $$('.pen-preset').forEach((el,i)=>{el.setAttribute('aria-controls','toolSettingsPopover');el.setAttribute('aria-haspopup','dialog');el.setAttribute('aria-expanded','false');el.onclick=e=>{e.preventDefault();e.stopPropagation();choosePen(i,true);};});
    $('#highlighterBtn').setAttribute('aria-controls','highlighterPopover');$('#highlighterBtn').setAttribute('aria-haspopup','dialog');$('#highlighterBtn').setAttribute('aria-expanded','false');$('#highlighterBtn').onclick=e=>{e.preventDefault();e.stopPropagation();setTool('highlighter');openToolPopover('highlighterPopover',$('#highlighterBtn'));};
    $('#magicPenBtn').setAttribute('aria-controls','magicPopover');$('#magicPenBtn').setAttribute('aria-haspopup','dialog');$('#magicPenBtn').setAttribute('aria-expanded','false');$('#magicPenBtn').onclick=e=>{e.preventDefault();e.stopPropagation();setTool('magic');openToolPopover('magicPopover',$('#magicPenBtn'));};
    $('#eraserBtn').setAttribute('aria-controls','eraserPopover');$('#eraserBtn').setAttribute('aria-haspopup','dialog');$('#eraserBtn').setAttribute('aria-expanded','false');$('#eraserBtn').onclick=e=>{e.preventDefault();e.stopPropagation();setTool('eraser');openToolPopover('eraserPopover',$('#eraserBtn'));};
    $$('[data-highlight-color]').forEach(el=>el.onclick=e=>{e.preventDefault();e.stopPropagation();state.highlighterColor=el.dataset.highlightColor;localStorage.setItem('inksyHighlighterColor',state.highlighterColor);state.color=state.highlighterColor;state.tool='highlighter';syncPenUI();redrawAll();openToolPopover('highlighterPopover',$('#highlighterBtn'));});
    if($('#highlighterColorInput'))$('#highlighterColorInput').oninput=e=>{state.highlighterColor=e.target.value;localStorage.setItem('inksyHighlighterColor',state.highlighterColor);state.color=state.highlighterColor;state.tool='highlighter';syncPenUI();};
    $$('[data-magic-color]').forEach(el=>el.onclick=e=>{e.preventDefault();e.stopPropagation();state.magicColor=el.dataset.magicColor;localStorage.setItem('inksyMagicColor',state.magicColor);state.color=state.magicColor;state.tool='magic';syncPenUI();redrawAll();openToolPopover('magicPopover',$('#magicPenBtn'));});
    if($('#magicColorInput'))$('#magicColorInput').oninput=e=>{state.magicColor=e.target.value;localStorage.setItem('inksyMagicColor',state.magicColor);state.color=state.magicColor;state.tool='magic';syncPenUI();};
    $$('[data-eraser-mode]').forEach(el=>el.onclick=e=>{e.preventDefault();e.stopPropagation();state.eraserMode=el.dataset.eraserMode==='object'?'object':'partial';localStorage.setItem('inknoteEraserMode',state.eraserMode);setTool('eraser');syncEraserUI();openToolPopover('eraserPopover',$('#eraserBtn'));});
    $$('[data-magic-size]').forEach(el=>el.onclick=e=>{e.preventDefault();e.stopPropagation();state.magicSize=+el.dataset.magicSize;localStorage.setItem('inksyMagicSize',state.magicSize);state.size=state.magicSize;state.tool='magic';syncPenUI();redrawAll();openToolPopover('magicPopover',$('#magicPenBtn'));});
    $('#createToolsBtn').setAttribute('aria-controls','createToolsPopover');$('#createToolsBtn').setAttribute('aria-haspopup','dialog');$('#moreToolsBtn').setAttribute('aria-controls','moreToolsPopover');$('#moreToolsBtn').setAttribute('aria-haspopup','dialog');$('#createToolsBtn').onclick=e=>{e.preventDefault();e.stopPropagation();toggleToolPopover('createToolsPopover',$('#createToolsBtn'))}; $('#moreToolsBtn').onclick=e=>{e.preventDefault();e.stopPropagation();toggleToolPopover('moreToolsPopover',$('#moreToolsBtn'))};
    $('#addImageBtn').onclick=e=>{e.stopPropagation();closeToolPopovers();$('#imageInput').click();};$('#imageInput').onchange=e=>{chooseImage(e.target.files[0]);e.target.value='';};
    $('#colorInput').oninput=e=>{state.color=e.target.value;state.penPresets[state.activePen].color=state.color;syncPenUI()}; $$('.quick-colors button').forEach(el=>el.onclick=e=>{e.preventDefault();e.stopPropagation();state.color=el.dataset.color;state.penPresets[state.activePen].color=state.color;syncPenUI();openToolPopover('toolSettingsPopover',$$('.pen-preset')[state.activePen]);}); $$('.size-dots button').forEach(el=>el.onclick=e=>{e.preventDefault();e.stopPropagation();state.size=+el.dataset.size;state.penPresets[state.activePen].size=state.size;syncPenUI();openToolPopover('toolSettingsPopover',$$('.pen-preset')[state.activePen]);}); syncPenUI();
    const openExport=()=>{updateExportMeta();exportPdf();};
    $('#undoBtn').onclick=undo;$('#redoBtn').onclick=redo;if($('#quickUndoBtn'))$('#quickUndoBtn').onclick=undo;$('#menuUndoBtn').onclick=()=>{undo();closeToolPopovers()};$('#menuRedoBtn').onclick=()=>{redo();closeToolPopovers()};$('#zoomIn').onclick=()=>setZoom(state.zoom+.1);$('#zoomOut').onclick=()=>setZoom(state.zoom-.1);$('#menuZoomIn').onclick=()=>{setZoom(state.zoom+.1);closeToolPopovers()};$('#menuZoomOut').onclick=()=>{setZoom(state.zoom-.1);closeToolPopovers()};$('#downloadBtn').onclick=openExport;$('#editorDownloadBtn').onclick=openExport;$('#confirmExport').onclick=exportPdf;$('#saveWorkBtn').onclick=openSaveModal;if($('#viewDownloadBtn'))$('#viewDownloadBtn').onclick=viewPendingDownload;if($('#directDownloadBtn'))$('#directDownloadBtn').onclick=downloadPendingFile;if($('#downloadFilenameInput'))$('#downloadFilenameInput').oninput=syncDownloadPreviewName;
    $('#bookmarkPageBtn').onclick=toggleCurrentBookmark;$('#studyTimerBtn').onclick=openTimerModal;$('#focusModeBtn').onclick=toggleFocusMode;if($('#calculatorBtn'))$('#calculatorBtn').onclick=()=>{setCalculatorMode(state.calculatorMode);renderCalculator();$('#calculatorModal').showModal();};$('#stopStudyTimer').onclick=()=>stopStudyTimer(false);
    $$('input[name="retention"]').forEach(el=>el.onchange=updateSaveExpiryPreview);$('#confirmSaveWork').onclick=confirmSaveRetention;$('#deleteSavedCopy').onclick=deleteSavedCopy;
    $$('[data-text-color]').forEach(el=>el.onclick=()=>{$$('[data-text-color]').forEach(x=>x.classList.toggle('active',x===el));if($('#textColorInput'))$('#textColorInput').value=el.dataset.textColor;const sw=$('.text-custom-color span');if(sw)sw.style.background=el.dataset.textColor;});if($('#textColorInput'))$('#textColorInput').oninput=e=>{$$('[data-text-color]').forEach(x=>x.classList.remove('active'));const sw=$('.text-custom-color span');if(sw)sw.style.background=e.target.value;};$$('[data-text-size]').forEach(el=>el.onclick=()=>{$$('[data-text-size]').forEach(x=>x.classList.toggle('active',x===el));});if($('#saveTextAnnotation'))$('#saveTextAnnotation').onclick=saveTextEditor;if($('#deleteTextAnnotation'))$('#deleteTextAnnotation').onclick=deleteTextEditor;
    $$('[data-timer-minutes]').forEach(el=>el.onclick=()=>{$$('[data-timer-minutes]').forEach(x=>x.classList.toggle('active',x===el));if($('#customTimerMinutes'))$('#customTimerMinutes').value='';state.timerMinutes=Number(el.dataset.timerMinutes)||25;});if($('#customTimerMinutes'))$('#customTimerMinutes').oninput=e=>{$$('[data-timer-minutes]').forEach(x=>x.classList.remove('active'));};if($('#startTimerNow'))$('#startTimerNow').onclick=()=>{const custom=Number($('#customTimerMinutes')?.value||0),preset=Number($('[data-timer-minutes].active')?.dataset.timerMinutes||0);startStudyTimer(custom||preset||state.timerMinutes||25);};
    $$('[data-calc-mode]').forEach(el=>el.onclick=()=>setCalculatorMode(el.dataset.calcMode));$$('[data-calc]').forEach(el=>el.onclick=()=>handleCalculatorKey(el.dataset.calc));
    $$('[data-sticky-color]').forEach(el=>el.onclick=()=>{$$('[data-sticky-color]').forEach(x=>x.classList.toggle('active',x===el));});$$('[data-sticky-align]').forEach(el=>el.onclick=()=>{$$('[data-sticky-align]').forEach(x=>x.classList.toggle('active',x===el));});$$('[data-sticky-font]').forEach(el=>el.onclick=()=>{$$('[data-sticky-font]').forEach(x=>x.classList.toggle('active',x===el));});$('#saveStickyEdit').onclick=saveStickyEditor;
    $('#openPages').onclick=()=>$('#pagesPanel').classList.add('open');$('#closePages').onclick=()=>$('#pagesPanel').classList.remove('open');    $$('[data-close]').forEach(el=>el.onclick=()=>$('#'+el.dataset.close).close());$$('.modal').forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close()}));$('#textEditorModal')?.addEventListener('close',()=>{state.textEditing=null});
    $('#clearSignature').onclick=clearSignature;$('#useSignature').onclick=useSignature;
    const renameDocument=()=>{const n=prompt(t('rename'),state.filename);if(n){state.filename=n.toLowerCase().endsWith('.pdf')?n:n+'.pdf';$('#documentName').textContent=state.filename;$('#floatingDocumentName').textContent=state.filename;scheduleSave()}};
    $('#renameBtn').onclick=renameDocument;$('#floatingRenameBtn').onclick=renameDocument;$('#exitEditor').onclick=async()=>{await saveDocument();resetToWelcome()};
    const editorRoot=$('#editorView'),viewport=$('#documentViewport');
    // Global two-finger gesture tracking: works even if the two touches start on
    // different canvases/pages. It cancels a one-finger stroke only when a real
    // second finger joins, then keeps the pinch midpoint anchored under the fingers.
    const trackViewportTouch=e=>{if(e.pointerType!=='touch')return;state.touchPointers.set(e.pointerId,{x:e.clientX,y:e.clientY,w:e.width||0,h:e.height||0});if(state.touchPointers.size>=2){e.preventDefault();if(!state.touchGesture)beginTouchGesture(null,state.currentPage);}};
    const moveViewportTouch=e=>{if(e.pointerType!=='touch'||!state.touchPointers.has(e.pointerId))return;state.touchPointers.set(e.pointerId,{x:e.clientX,y:e.clientY,w:e.width||0,h:e.height||0});if(state.touchGesture&&state.touchPointers.size>=2){e.preventDefault();updateTouchGesture();}};
    const endViewportTouch=e=>{if(e.pointerType!=='touch')return;state.touchPointers.delete(e.pointerId);if(state.touchPointers.size<2){state.touchGesture=null;scheduleZoomRerender();}};
    viewport.addEventListener('pointerdown',trackViewportTouch,{capture:true,passive:false});
    viewport.addEventListener('pointermove',moveViewportTouch,{capture:true,passive:false});
    viewport.addEventListener('pointerup',endViewportTouch,{capture:true,passive:false});
    viewport.addEventListener('pointercancel',endViewportTouch,{capture:true,passive:false});
    const isEditorNonEditableTarget=target=>editorRoot&&!editorRoot.hidden&&editorRoot.contains(target)&&!target.closest('input,textarea,[contenteditable="true"]');
    document.addEventListener('selectstart',e=>{if(isEditorNonEditableTarget(e.target)){e.preventDefault();clearNativeSelection();}},{passive:false});
    document.addEventListener('dragstart',e=>{if(isEditorNonEditableTarget(e.target))e.preventDefault();},{passive:false});
    document.addEventListener('contextmenu',e=>{if(viewport?.contains(e.target)){e.preventDefault();clearNativeSelection();}},{passive:false});
    document.addEventListener('selectionchange',()=>{if(!editorRoot||editorRoot.hidden)return;const sel=window.getSelection?.();const node=sel?.anchorNode;if(node&&editorRoot.contains(node.nodeType===1?node:node.parentElement))clearNativeSelection();});
    document.addEventListener('pointerdown',e=>{if(!e.target.closest('.toolbar-popover-wrap,.tool-popover.portal-popover'))closeToolPopovers()}); window.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){e.preventDefault();e.shiftKey?redo():undo()}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='s'){e.preventDefault();if(state.mode)openSaveModal();}});
    window.addEventListener('beforeunload',()=>{if(state.mode)saveDocument()});
    window.addEventListener('resize',()=>{const open=$('.tool-popover.portal-popover.is-open');if(open){const btn=$(`[aria-controls="${open.id}"][aria-expanded="true"]`);if(btn)positionToolPopover(open,btn);}});
    $('#documentViewport').addEventListener('wheel',e=>{if(state.mode==='whiteboard'&&(e.ctrlKey||e.metaKey)){e.preventDefault();setZoom(state.zoom+(e.deltaY<0?.1:-.1));}},{passive:false});
  }

  function registerWebMCP(){
    const context=document.modelContext;
    if(!context?.registerTool) return;
    const lifecycle=new AbortController();
    const register=tool=>Promise.resolve(context.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{});
    register({name:'read_pdf_editor_status',title:'Read editor status',description:'Read the currently open PDF or whiteboard name, page count, and active annotation tool without changing it.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute:()=>({documentOpen:!!state.mode,type:state.mode,filename:state.mode?state.filename:null,pageCount:state.mode==='whiteboard'?1:(state.pdf?.numPages||0),currentPage:state.currentPage,activeTool:state.tool,access:'free'})});
    register({name:'start_pdf_upload',title:'Choose a PDF',description:'Open the device file picker so the user can choose a PDF to annotate.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute:()=>{if(state.mode)throw new Error('A document is already open.');$('#fileInput').click();return{status:'file_picker_opened'}}});
    register({name:'start_whiteboard',title:'Start a whiteboard',description:'Open a new blank whiteboard for handwriting, drawing, and later PDF download.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute:async()=>{if(state.mode)throw new Error('A document is already open.');await startWhiteboard();return{status:'whiteboard_opened'}}});
    register({name:'open_pdf_export_review',title:'Review export',description:'Open the export review for the current PDF or whiteboard. This does not download until the user confirms.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute:()=>{if(!state.mode)throw new Error('Open a document first.');updateExportMeta();$('#exportModal').showModal();return{status:'export_review_opened',watermark:false}}});
  }

  window.addEventListener('DOMContentLoaded',()=>{ setLanguage(state.lang); bindUI(); resetToWelcome(); cleanupLegacyDownloadWorkers(); updateAdUI(); loadAds(); registerWebMCP(); setInterval(updateRecentFiles,30*60*1000); });
})();
