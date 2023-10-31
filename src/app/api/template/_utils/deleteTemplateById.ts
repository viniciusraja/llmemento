import prisma from "../../_config/db";

const deleteTemplateById = async (templateId: string) => {
  const deleteTemplate = await prisma.template.delete({
    where: {
      id: templateId,
    },
  });

  return deleteTemplate;
};

export default deleteTemplateById;
