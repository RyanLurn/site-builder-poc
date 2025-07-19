import { pagesTable } from "@/database/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

const pageSelectValidator = createSelectSchema(pagesTable);
const pageInsertValidator = createInsertSchema(pagesTable);

export { pageSelectValidator, pageInsertValidator };
