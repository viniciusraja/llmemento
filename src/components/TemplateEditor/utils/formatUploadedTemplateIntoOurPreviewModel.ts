import { TemplateData } from "./../templateTypes";

const formatUploadedTemplateIntoOurPreviewModel = (template: any) => {
  const { elements, BackgroundTemplateElement } = template;
  return {
    background: {
      a: BackgroundTemplateElement?.Color?.a,
      r: BackgroundTemplateElement?.Color?.r,
      g: BackgroundTemplateElement?.Color?.g,
      b: BackgroundTemplateElement?.Color?.b,
      pageConfig: { size: BackgroundTemplateElement?.PageConfig },
    } as any,
    elements,
  } as TemplateData;
};

export default formatUploadedTemplateIntoOurPreviewModel;
