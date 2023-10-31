import { TemplateData } from "~/components/TemplateEditor/templateTypes";
import prisma from "../../_config/db";

type UpdateTemplateById = {
  templateId: string;
  background: TemplateData["background"];
  elements: TemplateData["elements"];
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

  return updatedTemplate;
};

export default updateTemplateById;
