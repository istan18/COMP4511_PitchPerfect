import React from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import BackButton from "@/components/BackButton2";

interface ProjectHeaderProps {
  projectName: string;
}

export default function ProjectHeader({ projectName }: ProjectHeaderProps) {
  return (
    <SafeAreaView className="bg-[#171F20]">
      <View className="flex-row justify-between bg-[#171F20] px-5 pb-5 border-b border-white">
        <BackButton />

        <Text className="text-4xl font-normal text-white text-center mt-2">
          {projectName}
        </Text>

        <Image
          source={require("@/assets/images/project-logo-1.png")}
          className="w-14 h-14 s rounded-full"
        />
      </View>
    </SafeAreaView>
  );
}
