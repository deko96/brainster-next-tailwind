import { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";
import { z, ZodError } from "zod";
import { NextRequest, NextResponse } from "next/server";

type HandlerFunction = (
  req: NextRequest,
  context: NextApiResponse
) => Promise<any>;

const routeHandler =
  (handler: HandlerFunction) =>
  async (req: NextRequest, context: NextApiResponse) => {
    try {
      const response = await handler(req, context);
      return response;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        console.error("Prisma Error:", error.message);
        return NextResponse.json(
          { error: "Internal Server Error" },
          {
            status: 500,
          }
        );
      } else if (error instanceof ZodError) {
        // Handle Zod errors
        console.error("Zod Error:", error.errors);
        return NextResponse.json(
          { error: error.errors },
          {
            status: 400,
          }
        );
        // res.status(400).json({ error: "Bad Request", details: error.errors });
      } else {
        // Handle other unexpected errors
        console.error("Unexpected Error:", error);
        return NextResponse.json({ error: "Internal Server Error" });
      }
    }
  };

export default routeHandler;
