import { SurveyStatus } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import routeHandler from "@/lib/routeHandler";

const schema = z.object({
  name: z.string(),
  introduction: z.string().optional(),
  manager: z.string().email(),
  status: z.nativeEnum(SurveyStatus).default("DRAFT"),
});

export const POST = routeHandler(async (request: NextRequest) => {
  const rawData = await request.json();
  console.log("test");
  const data = await schema.safeParseAsync(rawData);

  if (!data.success) {
    throw data.error;
  }

  const survey = await prisma.survey.create({
    data: data.data,
  });

  return NextResponse.json({
    data: survey,
  });
});
