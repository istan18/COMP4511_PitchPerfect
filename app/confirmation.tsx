import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import FilledButton from "@/components/FilledButton";
import { router } from "expo-router";

export default function confirmation() {
  return (
    <View className="flex-1 bg-background">
      <SafeAreaView
        className="flex-1 items-center w-f
      ull"
      >
        <Image
          source={require("../assets/images/tick.png")}
          className="w-40 h-40 mt-20"
        />
        <Text className="w-[80%] text-4xl text-center text-white mt-20 mb-8">
          Your password has been reset!
        </Text>
        <View className="absolute bottom-20 w-full items-center">
          <FilledButton
            title="Log in"
            onPress={() => router.replace("/login")}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
