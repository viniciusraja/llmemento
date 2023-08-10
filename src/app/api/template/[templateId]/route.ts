import getTemplateById from "../_utils/getTemplateById";
import updateTemplateById from "../_utils/updateTemplateById";
import deleteTemplateById from "../_utils/deleteTemplateById";
import { NextResponse } from "next/server";
import limitRoute from "../../_utils/limitNumberOfRequests";
import getHeaders from "../../_utils/getHeaders";

type TemplateRouteContext = {
  params: { templateId: string };
};

export const GET = async (req: Request, { params }: TemplateRouteContext) =>
  await limitRoute(async () => {
    const { templateId } = params;

    if (!templateId)
      return new NextResponse(null, {
        headers: getHeaders(req),
        status: 404,
        statusText: "You need to send a valid template template id",
      });

    const template = await getTemplateById(templateId as string);

    if (!template) {
      return new NextResponse(null, {
        headers: getHeaders(req),
        status: 404,
        statusText: "Template not found",
      });
    } else {
      return new NextResponse(JSON.stringify(template), {
        headers: getHeaders(req),
        status: 404,
        statusText: "Template not found",
      });
    }
  });

export const DELETE = async (req: Request, { params }: TemplateRouteContext) =>
  limitRoute(async () => {
    const { templateId } = params;
    if (!templateId)
      return new NextResponse(null, {
        headers: getHeaders(req),
        status: 404,
        statusText: "You need to send a valid template template id",
      });

    const deleteTemplate = await deleteTemplateById(templateId);

    if (!deleteTemplate) {
      return new NextResponse(null, {
        headers: getHeaders(req),
        status: 404,
        statusText: "Template not found",
      });
    } else {
      return new NextResponse(null, {
        headers: getHeaders(req),
        status: 201,
        statusText: "Template deleted successfully",
      });
    }
  });

export const PUT = async (req: Request, { params }: TemplateRouteContext) =>
  limitRoute(async () => {
    const { templateId } = params;
    if (!templateId)
      return new NextResponse(null, {
        headers: getHeaders(req),
        status: 404,
        statusText: "You need to send a valid template template id",
      });
    const templateData = await req.json();
    const { elements, background } = templateData;

    const updatedTemplate = await updateTemplateById({
      templateId,
      background,
      elements,
    });

    if (!updatedTemplate) {
      return new NextResponse(null, {
        headers: getHeaders(req),
        status: 404,
        statusText: "Template not found",
      });
    } else {
      return new NextResponse(JSON.stringify(updatedTemplate), {
        headers: getHeaders(req),
        status: 404,
        statusText: "Template not found",
      });
    }
  });
