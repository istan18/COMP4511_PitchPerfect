import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import BackButton from "@/components/BackButton";
import FilledButton from "@/components/FilledButton";
import { router } from "expo-router";
import Slider from "@react-native-community/slider";

const Progress = () => {
  const [progress, setProgress] = useState<number>(0);

  const handleValueChange = (value: number) => {
    const roundedValue = Math.round(value / 5) * 5;
    setProgress(roundedValue);
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <BackButton />
      <Text className="mt-20 text-center mx-auto text-4xl mb-20 text-white">
        Project Progress
      </Text>
      <View className="w-4/5 items-center mx-auto">
        <Text className="text-3xl text-white mb-4">{`Progress: ${progress}%`}</Text>
        <View className="relative w-full">
          <Slider
            style={{ width: "100%", height: 20 }}
            minimumValue={0}
            maximumValue={100}
            step={5} // Adding step to ensure snapping by 10s
            minimumTrackTintColor="#3A5B5B"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#3A5B5B"
            value={progress}
            onValueChange={handleValueChange}
          />
        </View>
      </View>
      <View
        className={"absolute bottom-12 left-12   w-4/5 mx-auto rounded-2xl "}
      >
        <FilledButton
          otherStyles={"w-3/4"}
          title={"Save"}
          onPress={() => router.back()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Progress;
