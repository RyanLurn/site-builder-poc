import { pagesTable } from "@/database/schema";
import { createInsertSchema } from "drizzle-zod";

const pageInsertValidator = createInsertSchema(pagesTable);

export { pageInsertValidator };
