import BuilderCanvas from "@/features/builder/canvas/components/main";
import BuilderLeftSidebar from "@/features/builder/left-sidebar/components/main";
import BuilderRightSidebar from "@/features/builder/right-sidebar/components/main";
import BuilderToolbar from "@/features/builder/toolbar/components/main";
import { Separator } from "@/components/ui/separator";

export default function BuilderPage() {
  return (
    <div className="flex h-full w-full flex-col">
      <BuilderToolbar />
      <Separator />
      <div className="flex flex-1">
        <BuilderLeftSidebar />
        <BuilderCanvas />
        <BuilderRightSidebar />
      </div>
    </div>
  );
}
