import prisma from "../../_config/db";

const getTemplates = async () => {
  const templates = await prisma.template.findMany();
  return templates;
};

export default getTemplates;
