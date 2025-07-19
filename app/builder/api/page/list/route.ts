import db from "@/database";
import { pagesTable } from "@/database/schema";
import { NextResponse } from "next/server";

export async function GET() {
  const results = await db.select().from(pagesTable);

  const response = NextResponse.json(results);

  return response;
}
