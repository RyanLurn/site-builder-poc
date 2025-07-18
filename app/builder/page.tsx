import BuilderCanvas from "@/features/builder/canvas/components/canvas";
import BuilderLeftSidebar from "@/features/builder/left-sidebar/components/left-sidebar";
import BuilderRightSidebar from "@/features/builder/right-sidebar/components/right-sidebar";
import BuilderToolbar from "@/features/builder/toolbar/components/toolbar";
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
