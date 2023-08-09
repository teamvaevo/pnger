/**
 * Converts a PDF File object into multiple PNGs.
 * @param {File} pdfFile - The PDF File object.
 * @return {Promise} - Resolves with an array of PNG data URLs.
 */
export function pdfToPNGs(pdfFile) {
  return new Promise(async (resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = async function (event) {
      const typedArray = new Uint8Array(event.target.result);

      // Load the PDF file with pdf.js
      const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;

      const totalPages = pdf.numPages;
      const pngs = [];

      for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        const page = await pdf.getPage(pageNum);

        // Render the page to a canvas element
        const viewport = page.getViewport({ scale: 3 });
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const canvasContext = canvas.getContext("2d");
        await page.render({ canvasContext, viewport }).promise;

        // Convert the canvas to a PNG
        const pngDataURL = canvas.toDataURL("image/png");
        pngs.push(pngDataURL);
      }

      resolve(pngs);
    };

    fileReader.onerror = reject;

    fileReader.readAsArrayBuffer(pdfFile);
  });
}

export function downloadPNGs(pngDataUrls) {
  pngDataUrls.forEach((dataUrl, index) => {
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `page_${index + 1}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
}
