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
              height: (background.pageConfig as any).height,
              width: (background.pageConfig as any).width,
              unit: (background.pageConfig as any).unit,
              dpi: (background.pageConfig as any).dpi,
            },
          },
        },
      },
      elements: elements as any,
    },
  });

  return createdTemplate;
};

export default createTemplate;
