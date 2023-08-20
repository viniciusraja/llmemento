import { PrismaClient } from "@prisma/client";
import { TemplateData } from "~/components/TemplateEditor/templateTypes";

const prisma = new PrismaClient();

type CreateTemplate = {
  background: TemplateData["background"];
  elements: TemplateData["elements"];
};

const createTemplate = async ({ background, elements }: CreateTemplate) => {
  const createdTemplate = await prisma.template.create({
    data: {
      BackgroundTemplateElement: {
        create: {
          Color: {
            create: {
              a: background.a,
              b: background.b,
              g: background.g,
              r: background.r,
            },
          },
          PageConfig: {
            create: {
              height: background.pageConfig.height,
              width: background.pageConfig.width,
              unit: background.pageConfig.unit,
              dpi: background.pageConfig.dpi,
            },
          },
        },
      },
      elements: {
        createMany: { data: elements },
      },
    },
  });

  return createdTemplate;
};

export default createTemplate;
