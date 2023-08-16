import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { RefObject } from "react";
const SCALE_FOR_TEMPLATE_DOWNLOAD = 4;
const downloadImage = async (printableComponent: RefObject<HTMLDivElement>) => {
  if (!printableComponent?.current) return undefined;

  const htm2Canvas = await html2canvas(printableComponent?.current, {
    logging: true,
    allowTaint: false,
    useCORS: true,
    scale: SCALE_FOR_TEMPLATE_DOWNLOAD,
  });

  const imgData = htm2Canvas.toDataURL("image/png");

  if (!imgData) return undefined;
  const link = document.createElement("a");
  link.href = imgData;
  link.download = "template.png"; // Set the desired filename
  link.click();
};

const downloadPDF = async (printableComponent: RefObject<HTMLDivElement>) => {
  if (!printableComponent?.current) return undefined;
  const { clientHeight, clientWidth } = printableComponent?.current;

  const pdfFileSize = [
    SCALE_FOR_TEMPLATE_DOWNLOAD * Math.ceil(clientWidth),
    SCALE_FOR_TEMPLATE_DOWNLOAD * Math.ceil(clientHeight) + 10,
  ];
  const pdf = new jsPDF("p", "px", pdfFileSize);
  pdf.html(printableComponent?.current, {
    callback: function (doc) {
      doc.save("template.pdf");
    },
    x: 0,
    y: 0,
    html2canvas: {
      scale: SCALE_FOR_TEMPLATE_DOWNLOAD,
      allowTaint: false,
      useCORS: true,
    },
  });
};

const handleDownloadTemplate = (
  printableComponent: RefObject<HTMLDivElement>
) => {
  const downloadTemplatePng = () => downloadImage(printableComponent);
  const downloadTemplatePdf = () => downloadPDF(printableComponent);
  return { downloadTemplatePng, downloadTemplatePdf };
};

export default handleDownloadTemplate;
