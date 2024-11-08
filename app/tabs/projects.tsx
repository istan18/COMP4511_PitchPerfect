import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { useState, useEffect } from "react";
import ProjectCard from "@/components/MyProjectCard";
import TabNavigation from "@/components/TabNavigation";

export default function MyProjects() {
  const [showHint, setShowHint] = useState(true);

  const hideHint = () => {
    setShowHint(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#171F20]">
      <TabNavigation />
      <View className="flex-1 mt-5">
        <ScrollView className="px-4 pt-2">
          <ProjectCard
            projectName="Skill Swap"
            projectIcon={require("@/assets/images/project-logo-1.png")}
            hideHint={hideHint}
          />
          <ProjectCard
            projectName="Second Project"
            projectIcon={require("@/assets/images/project-logo-2.png")}
            hideHint={hideHint}
          />
          <ProjectCard
            projectName="Third Project"
            projectIcon={require("@/assets/images/project-logo-3.png")}
            hideHint={hideHint}
          />
          {showHint && (
            <Text className="text-gray-400 text-xs text-center">
              Hold any project card to manage project
            </Text>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
