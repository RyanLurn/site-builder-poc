import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type TabType = "pages" | "layers" | "assets";

export default function Header({
  activeTab,
  switchTab
}: {
  activeTab: TabType;
  switchTab: (tab: string) => void;
}) {
  return (
    <Tabs
      value={activeTab}
      onValueChange={switchTab}
      className="w-full items-center"
    >
      <TabsList className="w-full">
        <TabsTrigger value="pages">Pages</TabsTrigger>
        <TabsTrigger value="layers">Layers</TabsTrigger>
        <TabsTrigger value="assets">Assets</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
