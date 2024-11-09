import React from "react";
import { View, Text, ScrollView } from "react-native";
import ImageSlider from "@/components/ImageSlider";

const ProjectOverview = () => {
  const images = [
    "https://picsum.photos/1024/767",
    "https://picsum.photos/1024/768",
    "https://picsum.photos/1024/769",
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="">
        <Text className="text-2xl font-bold text-gray-800">
          Project Overview
        </Text>
        <Text className="mt-4 text-base text-gray-600">
          Welcome to the project overview page. Here you will find all the
          details about the project.
        </Text>
        <ImageSlider images={images} height={250} />
      </View>
    </ScrollView>
  );
};

export default ProjectOverview;
