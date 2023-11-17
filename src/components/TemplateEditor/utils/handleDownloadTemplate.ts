import html2canvas from "html2canvas";
import jsPDF, { HTMLFontFace } from "jspdf";
import { RefObject } from "react";
import { BoxElement, TemplateData, TextElement } from "../templateTypes";
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

const addLinkElementsToPDF = (templateData: TemplateData, pdf: jsPDF) => {
  const linkELements = Object.values(
    templateData?.elements as BoxElement[]
  )?.filter((element) => element.type === "box");

  linkELements?.forEach((linkElement) =>
    pdf.link(
      linkElement.position.x * SCALE_FOR_TEMPLATE_DOWNLOAD,
      linkElement.position.y * SCALE_FOR_TEMPLATE_DOWNLOAD,
      linkElement.size.width * SCALE_FOR_TEMPLATE_DOWNLOAD,
      linkElement.size.height * SCALE_FOR_TEMPLATE_DOWNLOAD,
      { url: linkElement.url }
    )
  );
};

const getFontFaces = (templateData: TemplateData) => {
  const elementsToRender = Object.values(templateData?.elements || {});

  const textElements = elementsToRender?.filter(
    (element) => element?.type === "text"
  ) as TextElement[];

  return textElements?.map(
    (textElement) =>
      ({
        family: textElement?.fontFamily,
        weight: textElement?.fontWeight,
        style: textElement?.fontStyle,
        src: [
          {
            url: textElement?.fontUrl,
            format: "truetype" as const,
          },
        ],
      } as HTMLFontFace)
  );
};

const downloadPDF = async (
  printableComponent: RefObject<HTMLDivElement>,
  templateData: TemplateData
) => {
  if (!printableComponent?.current) return undefined;
  const { clientHeight, clientWidth } = printableComponent?.current;

  const pdfFileSize = [
    SCALE_FOR_TEMPLATE_DOWNLOAD * Math.ceil(clientWidth),
    SCALE_FOR_TEMPLATE_DOWNLOAD * Math.ceil(clientHeight) + 10,
  ];
  const pdf = new jsPDF("p", "px", pdfFileSize);
  const customPdfFonts = getFontFaces(templateData);

  pdf.setFont("FraktionSans-Regular");
  addLinkElementsToPDF(templateData, pdf);

  pdf.html(printableComponent?.current, {
    callback: function (doc) {
      doc.save("template.pdf");
    },
    x: 0,
    y: 0,
    fontFaces: customPdfFonts,
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
  const downloadTemplatePdf = (templateData: TemplateData) =>
    downloadPDF(printableComponent, templateData);

  return { downloadTemplatePng, downloadTemplatePdf };
};

export default handleDownloadTemplate;
