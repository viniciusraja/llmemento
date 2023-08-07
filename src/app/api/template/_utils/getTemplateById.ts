import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getTemplateById = async (templateId?: string) => {
  const template = await prisma.template.findUnique({
    where: {
      id: templateId,
    },
  });

  return template;
};

export default getTemplateById;
