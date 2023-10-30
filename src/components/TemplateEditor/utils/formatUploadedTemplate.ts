import { TemplateData } from "../templateTypes";

const formatUploadedTemplate = (template: any) => {
  const { elements, BackgroundTemplateElement, id } = template;

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
    id,
  } as TemplateData;

  return formattedTemplatePayload;
};

export default formatUploadedTemplate;
