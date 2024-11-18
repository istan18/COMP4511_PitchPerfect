import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import BackButton from "@/components/BackButton";
import FilledButton from "@/components/FilledButton";
import { router } from "expo-router";
import Slider from "@react-native-community/slider";

const Progress = () => {
  const [progress, setProgress] = useState<number>(0);

  const handleValueChange = (value: number) => {
    // Rounding the value to the nearest multiple of 10 for snapping
    const roundedValue = Math.round(value / 5) * 5;
    setProgress(roundedValue);
  };

  // Function to render snapping lines
  const renderSnappingLines = (count: number) => {
    const lines = [];
    for (let i = 0; i <= count; i++) {
      lines.push(<View key={i} className="w-[0.2rem] h-2.5 bg-barGreen" />);
    }
    return lines;
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <BackButton />
      <Text className="mt-20 text-center mx-auto text-5xl mb-20 text-white">
        Project Progress
      </Text>
      <View className="w-4/5 items-center mx-auto">
        <Text className="text-3xl text-white mb-4">{`Progress: ${progress}%`}</Text>
        <View className="relative w-full">
          <View className="absolute top-5 z-30 left-1 right-0 h-2.5 flex flex-row gap-x-[1rem]">
            {renderSnappingLines(20)}{" "}
            {/* Increase the count to 20 for smaller gaps */}
          </View>
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
      <View className="absolute bottom-20 left-12 bg-black w-4/5 mx-auto rounded-2xl h-20">
        <FilledButton
          otherStyles="w-3/4"
          title="Save"
          onPress={() => router.back()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Progress;
