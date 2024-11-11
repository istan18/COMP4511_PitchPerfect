import React from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import BackButton from "@/components/BackButton2";

interface ProjectHeaderProps {
  projectName: string;
  projectLogo: string;
}

export default function ProjectHeader({
  projectName,
  projectLogo,
}: ProjectHeaderProps) {
  return (
    <SafeAreaView className="bg-[#171F20]">
      <View className="flex-row bg-[#171F20] px-5 border-b border-white">
        <BackButton top={30} left={10} fallbackRoute="/projects" />

        <Text className="text-4xl font-normal text-white text-center flex-1 mt-8">
          {projectName}
        </Text>

        <Image
          source={{ uri: projectLogo }}
          className="w-12 h-12 rounded-full mt-8"
        />
      </View>
    </SafeAreaView>
  );
}
