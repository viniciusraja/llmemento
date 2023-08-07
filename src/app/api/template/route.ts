import { NextApiRequest } from "next";
import getTemplates from "./_utils/getTemplates";
import { NextResponse } from "next/server";
import createTemplate from "./_utils/createTemplate";

export async function GET() {
  const templates = await getTemplates();

  return NextResponse.json(
    { data: templates },
    {
      status: 200,
    }
  );
}

export async function POST(req: Request) {
  const templateData = await req.json();
  const { elements, background } = templateData;

  const createdTemplate = await createTemplate({ background, elements });

  return NextResponse.json({ res: createdTemplate });
}
