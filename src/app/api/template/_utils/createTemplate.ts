import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type CreateTemplate = {
  background: {};
  elements: {};
};

const createTemplate = async ({ background, elements }: CreateTemplate) => {
  const createdTemplate = await prisma.template.create({
    data: {
      background,
      elements,
    },
  });

  return createdTemplate;
};

export default createTemplate;
