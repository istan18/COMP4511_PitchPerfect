import React, { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import ProjectCard from "@/components/MyProjectCard";

export default function MyProjectsContent() {
  const [showHint, setShowHint] = useState(true);

  const hideHint = () => {
    setShowHint(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#171F20]">
      <View className="flex-1 mt-5">
        <ScrollView className="px-4 pt-2">
          <ProjectCard
            projectName="Skill Swap"
            projectIcon={require("@/assets/images/skill-swap.png")}
            hideHint={hideHint}
          />
          <ProjectCard
            projectName="Second Project"
            projectIcon={require("@/assets/images/second-project.png")}
            hideHint={hideHint}
          />
          <ProjectCard
            projectName="Third Project"
            projectIcon={require("@/assets/images/project-3.png")}
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
