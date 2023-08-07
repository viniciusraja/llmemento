import getTemplateById from "../_utils/getTemplateById";
import updateTemplateById from "../_utils/updateTemplateById";
import deleteTemplateById from "../_utils/deleteTemplateById";
import { NextResponse } from "next/server";
import limitRoute from "../../_utils/limitNumberOfRequests";

type TemplateRouteContext = {
  params: { templateId: string };
};

export const GET = () =>
  limitRoute(async (req: Request, { params }: TemplateRouteContext) => {
    const { templateId } = params;

    if (!templateId)
      return NextResponse.json(
        { message: "You need to send a valid template template id" },
        { status: 404 }
      );

    const template = await getTemplateById(templateId as string);

    if (!template) {
      return NextResponse.json(
        { message: "Template not found" },
        { status: 404 }
      );
    } else {
      return NextResponse.json(template, { status: 200 });
    }
  });

export const DELETE = () =>
  limitRoute(async (req: Request, { params }: TemplateRouteContext) => {
    const { templateId } = params;
    if (!templateId)
      return NextResponse.json(
        { message: "You need to send a valid template template id" },
        { status: 404 }
      );

    const deleteTemplate = await deleteTemplateById(templateId);

    if (!deleteTemplate) {
      return NextResponse.json(
        { message: "Template not found" },
        { status: 404 }
      );
    } else {
      return NextResponse.json(
        { message: "Template deleted successfully" },
        { status: 200 }
      );
    }
  });

export const PUT = () =>
  limitRoute(async (req: Request, { params }: TemplateRouteContext) => {
    const { templateId } = params;
    if (!templateId)
      return NextResponse.json(
        { message: "You need to send a valid template template id" },
        { status: 404 }
      );
    const templateData = await req.json();
    const { elements, background } = templateData;

    const updatedTemplate = await updateTemplateById({
      templateId,
      background,
      elements,
    });

    if (!updatedTemplate) {
      return NextResponse.json(
        { message: "Template not found" },
        { status: 404 }
      );
    } else {
      return NextResponse.json(updatedTemplate, { status: 200 });
    }
  });
