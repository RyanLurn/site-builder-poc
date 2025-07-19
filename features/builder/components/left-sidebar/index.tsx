"use client";

import Header, {
  TabType
} from "@/features/builder/components/left-sidebar/header";
import AssetsTab from "@/features/builder/components/left-sidebar/tabs/assets";
import LayersTab from "@/features/builder/components/left-sidebar/tabs/layers";
import PagesTab from "@/features/builder/components/left-sidebar/tabs/pages";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

export default function LeftSidebar() {
  const [activeTab, setActiveTab] = useState<TabType>("pages");

  function switchTab(tab: string) {
    setActiveTab(tab as TabType);
  }

  return (
    <div className="flex h-full w-2xs flex-col bg-sidebar p-3">
      <Header activeTab={activeTab} switchTab={switchTab} />
      <Separator className="my-3" />
      <div className="w-full flex-1 overflow-y-auto">
        {activeTab === "pages" && <PagesTab />}
        {activeTab === "layers" && <LayersTab />}
        {activeTab === "assets" && <AssetsTab />}
      </div>
    </div>
  );
}
