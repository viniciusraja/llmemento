import prisma from "~/app/api/_config/db";
import { TemplateData } from "~/components/TemplateEditor/templateTypes";

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
              a: background?.a,
              b: background?.b,
              g: background?.g,
              r: background?.r,
            },
          },
          PageConfig: {
            create: {
              //A4 default size
              width: 210,
              height: 297,
              unit: "mm",
              dpi: 96,
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
