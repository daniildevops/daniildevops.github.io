declare const pdfjsLib: any;

document.addEventListener('DOMContentLoaded', () => {
  if (typeof pdfjsLib === 'undefined') {
    console.error('pdf.js library not loaded.');
    return;
  }
  
  // Set worker source
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  
  const canvases = document.querySelectorAll<HTMLCanvasElement>('canvas.pdf-preview');
  
  canvases.forEach(canvas => {
    const url = canvas.dataset.pdfUrl;
    if (!url) return;
    
    // Add a loading indicator style
    canvas.style.backgroundColor = '#f8f9fa';
    canvas.style.minHeight = '300px';

    const loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then((pdf: any) => {
      pdf.getPage(1).then((page: any) => {
        // Render at a higher scale for crisp text on mobile/retina
        const scale = 1.5;
        const viewport = page.getViewport({ scale: scale });
        
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        
        // Remove minHeight once loaded
        canvas.style.minHeight = 'auto';
        canvas.style.backgroundColor = 'transparent';
        
        const renderContext = {
          canvasContext: canvas.getContext('2d'),
          viewport: viewport
        };
        page.render(renderContext);
      });
    }).catch((err: any) => {
      console.error('Error loading PDF for preview:', err);
    });
  });
});
