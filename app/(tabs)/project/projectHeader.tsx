import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import BackButton from "@/components/BackButton2";

interface ProjectHeaderProps {
  projectName: string;
}

export default function ProjectHeader({ projectName }: ProjectHeaderProps) {
  return (
    <SafeAreaView className="bg-background">
      <View className="flex-row justify-between bg-background px-5 pb-5 border-b border-white">
        <BackButton />
        <Text className="text-4xl font-normal text-white text-center mt-2">
          {projectName}
        </Text>
        <Image
          source={require("@/assets/images/mealplanner.png")}
          className="w-14 h-14 rounded-full"
        />
      </View>
    </SafeAreaView>
  );
}
