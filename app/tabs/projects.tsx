import { View, ScrollView, SafeAreaView } from "react-native";
import ProjectCard from "@/components/MyProjectCard";

export default function MyProjects() {
  return (
    <SafeAreaView className="flex-1 bg-[#171F20]">
      <View className="flex-1">
        <ScrollView className="px-4 pt-2">
          <ProjectCard
            projectName="Skill Swap"
            projectIcon={require("@/assets/images/project-logo-1.png")}
          />
          <ProjectCard
            projectName="Second Project"
            projectIcon={require("@/assets/images/project-logo-2.png")}
          />
          <ProjectCard
            projectName="Third Project"
            projectIcon={require("@/assets/images/project-logo-3.png")}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
