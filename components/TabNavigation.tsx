import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tab1Name: string;
  tab2Name: string;
}

export default function TabNavigation({
  activeTab,
  setActiveTab,
  tab1Name,
  tab2Name,
}: TabNavigationProps) {
  const handleNavigation = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <View className="flex-row justify-around border-b border-white">
      <TouchableOpacity
        className={`py-4 ${activeTab === tab1Name ? "border-b-4 border-white" : "border-b-2 border-gray-400"}`}
        onPress={() => handleNavigation(tab1Name)}
      >
        <Text
          className={`text-3xl ${activeTab === tab1Name ? "text-white" : "text-gray-500"}`}
        >
          {tab1Name}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`py-4 ${activeTab === tab2Name ? "border-b-4 border-white" : "border-b-2 border-gray-400"}`}
        onPress={() => handleNavigation(tab2Name)}
      >
        <Text
          className={`text-3xl ${activeTab === tab2Name ? "text-white" : "text-gray-500"}`}
        >
          {tab2Name}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
