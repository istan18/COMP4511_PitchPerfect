import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import BackButton from "@/components/BackButton2";

interface ProjectHeaderProps {
  projectName: string;
}

export default function Header({ projectName }: ProjectHeaderProps) {
  return (
    <SafeAreaView className="bg-background">
      <View className="flex-row justify-between items-center bg-background px-5 pb-5 border-b border-white">
        <BackButton />
        <View className="flex-1 items-center">
          <Text className="text-4xl font-normal text-white mt-2">
            {projectName}
          </Text>
        </View>
        <View style={{ width: 40 }} />
      </View>
    </SafeAreaView>
  );
}
