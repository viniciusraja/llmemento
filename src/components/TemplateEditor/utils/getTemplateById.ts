const getTemplateById = async (templateId: string) => {
  try {
    const response = await fetch(`/api/template/${templateId}/`);

    const template = await response.json();
    return template;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default getTemplateById;
