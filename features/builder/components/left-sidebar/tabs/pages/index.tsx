import { Button } from "@/components/ui/button";
import PagesList from "@/features/builder/components/left-sidebar/tabs/pages/pages-list";
import { Plus } from "lucide-react";

export default function PagesTab() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <div>Pages</div>
        <Button variant="ghost" size="icon">
          <Plus />
        </Button>
      </div>
      <PagesList />
    </div>
  );
}
