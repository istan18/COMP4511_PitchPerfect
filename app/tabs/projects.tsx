import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import TabNavigation from "@/components/TabNavigation";
import MyProjectsContent from "@/app/myProjects";
import MyApplicationsContent from "@/app/myApplications";

export default function MyProjects() {
  const [activeTab, setActiveTab] = useState("My Projects");

  return (
    <SafeAreaView className="flex-1 bg-[#171F20]">
      <TabNavigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tab1Name="My Projects"
        tab2Name="My Applications"
      />
      {activeTab === "My Projects" ? (
        <MyProjectsContent />
      ) : (
        <MyApplicationsContent />
      )}
    </SafeAreaView>
  );
}
