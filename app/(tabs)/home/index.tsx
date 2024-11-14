import { SafeAreaView } from "react-native";
import { useState } from "react";
import TabNavigation from "@/components/TabNavigation";
import Explore from "./explore";
import Connected from "./connected";

export default function Index() {
  const [activeTab, setActiveTab] = useState("Explore");

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TabNavigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tab1Name="Explore"
        tab2Name="Connected"
      />
      {activeTab === "Explore" ? (
        <Explore />
      ) : (
        <Connected />
      )}
    </SafeAreaView>
  );
};
