import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState("projects");
  const router = useRouter();

  const handleNavigation = (tab: string) => {
    setActiveTab(tab);
    if (tab === "projects") {
      router.replace("/tabs/projects");
    } else if (tab === "applications") {
      // Navigate to applications page (to be implemented)
    }
  };

  return (
    <View className="flex-row justify-around border-b border-white">
      <TouchableOpacity
        className={`py-4 ${activeTab === "projects" ? "border-b-4 border-white" : "border-b-2 border-gray-400"}`}
        onPress={() => handleNavigation("projects")}
      >
        <Text
          className={`text-3xl ${activeTab === "projects" ? "text-white" : "text-gray-500"}`}
        >
          My Projects
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`py-4 ${activeTab === "applications" ? "border-b-4 border-white" : "border-b-2 border-gray-500"}`}
        onPress={() => handleNavigation("applications")}
      >
        <Text
          className={`text-3xl ${activeTab !== "projects" ? "text-white" : "text-gray-500"}`}
        >
          Applications
        </Text>
      </TouchableOpacity>
    </View>
  );
}
