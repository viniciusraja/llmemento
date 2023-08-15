import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Ref, RefAttributes, RefObject } from "react";

const downloadImage = async (printableComponent: RefObject<HTMLDivElement>) => {
  if (!printableComponent?.current) return undefined;

  const htm2Canvas = await html2canvas(printableComponent?.current, {
    logging: true,
    allowTaint: false,
    useCORS: true,
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

  const htm2Canvas = await html2canvas(printableComponent?.current, {
    logging: true,
    allowTaint: false,
    useCORS: true,
  });

  const imgData = htm2Canvas.toDataURL("image/png");

  if (!imgData) return undefined;
  const pdf = new jsPDF();
  pdf?.addImage(imgData, "PNG", 0, 0, undefined as any, undefined as any);
  pdf?.save("download.pdf");
};

const handleDownloadTemplate = (
  printableComponent: RefObject<HTMLDivElement>
) => {
  const downloadTemplatePng = () => downloadImage(printableComponent);
  const downloadTemplatePdf = () => downloadPDF(printableComponent);
  return { downloadTemplatePng, downloadTemplatePdf };
};

export default handleDownloadTemplate;
