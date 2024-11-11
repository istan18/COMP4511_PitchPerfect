import React from "react";
import { View, Text, ScrollView } from "react-native";
import ImageSlider from "@/components/ImageSlider";
import ProjectHeader from "@/app/(tabs)/project/projectHeader";

const ProjectOverview = () => {
  const images = [
    "https://picsum.photos/1024/767",
    "https://picsum.photos/1024/768",
    "https://picsum.photos/1024/769",
  ];

  return (
    <ScrollView className="flex-1 bg-[#171F20]">
      <ProjectHeader projectName="Meal Planner" />
      <View className="">
        <ImageSlider images={images} height={250} />
        <Text className="p-4 mt-4 text-base text-gray-600">
          Welcome to the project overview page. Here you will find all the
          details about the project.
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProjectOverview;
