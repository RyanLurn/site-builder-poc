import { Button } from "@/components/ui/button";
import { AppWindow, Wifi, WifiOff } from "lucide-react";

export default function PageItem({
  path,
  status
}: {
  path: string;
  status: string;
}) {
  return (
    <Button variant="ghost" className="w-full">
      <AppWindow />
      {path}
      {status === "draft" ? <WifiOff color="gray" /> : <Wifi color="green" />}
    </Button>
  );
}
