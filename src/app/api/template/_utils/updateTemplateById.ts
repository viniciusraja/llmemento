import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type UpdateTemplateById = {
  templateId: string;
  background: {};
  elements: {};
};

const updateTemplateById = async ({
  templateId,
  background,
  elements,
}: UpdateTemplateById) => {
  const updatedTemplate = await prisma.template.update({
    where: {
      id: templateId,
    },
    data: {
      background,
      elements,
    },
  });

  return updatedTemplate;
};

export default updateTemplateById;
