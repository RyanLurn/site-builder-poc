import db from "@/database";
import { pagesTable } from "@/database/schema";
import { pageInsertValidator } from "@/database/validators";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const newPage = pageInsertValidator.parse(body);

  const results = await db.insert(pagesTable).values(newPage).returning();

  const response = NextResponse.json(results[0]);

  return response;
}
