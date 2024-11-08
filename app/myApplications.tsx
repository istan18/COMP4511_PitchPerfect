import React from "react";
import { SafeAreaView, Text, View } from "react-native";

export default function MyApplicationsContent() {
  return (
    <SafeAreaView className="flex-1 bg-[#171F20]">
      <View className="flex-1 mt-5">
        <Text className="text-white text-center">My Applications</Text>
      </View>
    </SafeAreaView>
  );
}
