const formatTemplateToSave = (uploadedTemplate: any) => {
  return {
    background: {
      a: uploadedTemplate?.background?.a,
      b: uploadedTemplate?.background?.b,
      g: uploadedTemplate?.background?.g,
      r: uploadedTemplate?.background?.r,
      pageConfig: uploadedTemplate?.background?.pageConfig?.size,
    } as any,
    elements: Object.values(uploadedTemplate?.elements || {}),
  };
};

export default formatTemplateToSave;
