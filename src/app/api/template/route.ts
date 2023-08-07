import { NextApiRequest } from "next";
import getTemplates from "./_utils/getTemplates";
import { NextResponse } from "next/server";
import createTemplate from "./_utils/createTemplate";
import limitNumberOfRequests from "../_utils/limitNumberOfRequests";
import limitRoute from "../_utils/limitNumberOfRequests";

export const GET = () =>
  limitRoute(async () => {
    const templates = await getTemplates();

    return NextResponse.json(
      { data: templates },
      {
        status: 200,
      }
    );
  });

export const POST = () =>
  limitRoute(async (req: Request) => {
    const templateData = await req.json();
    const { elements, background } = templateData;

    const createdTemplate = await createTemplate({ background, elements });

    return NextResponse.json({ res: createdTemplate });
  });
