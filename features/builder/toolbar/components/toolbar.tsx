import { ModeToggle } from "@/components/mode-toggle";

export default function BuilderToolbar() {
  return (
    <div className="flex w-full items-center justify-between bg-sidebar p-3">
      <p>Site Builder PoC</p>
      <ModeToggle />
    </div>
  );
}
