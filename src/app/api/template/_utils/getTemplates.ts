import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getTemplates = async () => {
  const templates = await prisma.template.findMany();
  return templates;
};

export default getTemplates;
