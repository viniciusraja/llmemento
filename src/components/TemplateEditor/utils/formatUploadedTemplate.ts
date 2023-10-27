import { TemplateData } from "../templateTypes";

const formatUploadedTemplate = (template: any) => {
  const { elements, BackgroundTemplateElement } = template;

  const formattedTemplatePayload = {
    background: {
      a: BackgroundTemplateElement?.Color?.a,
      r: BackgroundTemplateElement?.Color?.r,
      g: BackgroundTemplateElement?.Color?.g,
      b: BackgroundTemplateElement?.Color?.b,
      pageConfig: { size: BackgroundTemplateElement?.PageConfig },
    } as any,
    elements: Object.fromEntries(
      elements?.map((element: any) => [element?.id, element])
    ),
  } as TemplateData;

  return formattedTemplatePayload;
};

export default formatUploadedTemplate;
