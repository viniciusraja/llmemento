import getTemplates from "./_utils/getTemplates";
import { NextResponse } from "next/server";
import createTemplate from "./_utils/createTemplate";
import limitRoute from "../_utils/limitNumberOfRequests";
import getHeaders from "../_utils/getHeaders";

export const GET = (req: Request) =>
  limitRoute(async () => {
    const templates = await getTemplates();

    return new NextResponse(JSON.stringify(templates), {
      headers: getHeaders(req),
      status: 200,
    });
  });

export const POST = async (req: Request) =>
  limitRoute(async () => {
    const templateData = await req.json();
    const { elements, background } = templateData;

    const createdTemplate = await createTemplate({ background, elements });

    return new NextResponse(JSON.stringify(createdTemplate), {
      headers: getHeaders(req),
      status: 200,
    });
  });
