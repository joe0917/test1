document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.print-button.disabled');
  buttons.forEach(btn => {
    const pdfUrl = btn.closest('[data-pdf-url]')?.dataset.pdfUrl;
    if (pdfUrl) checkPDF(pdfUrl, btn);
  });
});

function checkPDF(url, element) {
  fetch(url, { method: 'HEAD' })
    .then(res => {
      if (res.ok) {
        element.outerHTML = `
          <a href="${url}" class="print-button" target="_blank">
            ${element.innerHTML}
          </a>`;
      }
    });
}