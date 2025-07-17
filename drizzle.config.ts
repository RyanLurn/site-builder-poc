import serverEnv from "@/lib/env/server";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./database/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: serverEnv.DB_FILE_NAME
  }
});
