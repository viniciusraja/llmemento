import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteTemplateById = async (templateId: string) => {
  const deleteTemplate = await prisma.template.delete({
    where: {
      id: templateId,
    },
  });

  return deleteTemplate;
};

export default deleteTemplateById;
