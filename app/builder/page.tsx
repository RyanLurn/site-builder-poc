import BuilderCanvas from "@/features/builder/components/canvas";
import LeftSidebar from "@/features/builder/components/left-sidebar";
import BuilderRightSidebar from "@/features/builder/components/right-sidebar";
import BuilderToolbar from "@/features/builder/components/toolbar";
import { Separator } from "@/components/ui/separator";

export default function BuilderPage() {
  return (
    <div className="flex h-full w-full flex-col">
      <BuilderToolbar />
      <Separator />
      <div className="flex flex-1">
        <LeftSidebar />
        <BuilderCanvas />
        <BuilderRightSidebar />
      </div>
    </div>
  );
}
