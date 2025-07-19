import { pageSelectValidator } from "@/database/validators";
import { z } from "zod/v4";

type PageType = z.infer<typeof pageSelectValidator>;

export type { PageType };
