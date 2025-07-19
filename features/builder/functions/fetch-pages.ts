import type { PageType } from "@/database/types";

async function fetchPages() {
  const response = await fetch("/builder/api/page/list");
  const data: PageType[] = await response.json();

  return data;
}

export default fetchPages;
