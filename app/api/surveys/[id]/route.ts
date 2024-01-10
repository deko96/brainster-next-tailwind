import { NextRequest, NextResponse } from "next/server";

export const GET = (request: NextRequest, context: any) => {
  console.log(context);
  return NextResponse.json({});
};
