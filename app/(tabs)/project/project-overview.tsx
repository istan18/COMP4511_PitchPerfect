import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import ImageSlider from "@/components/ImageSlider";
import ProjectHeader from "@/app/(tabs)/project/projectHeader";

const ProjectOverview = () => {
  const images = [
    require("@/assets/images/meal-planner-2.png"),
    require("@/assets/images/meal-planner-1.png"),
    require("@/assets/images/meal-planner-3.png"),
  ];

  return (
    <View className="flex-1">
      <ProjectHeader projectName="Meal Planner" />
      <ScrollView className="flex-1 bg-[#171F20]">
        <View className="mt-5">
          <ImageSlider images={images} height={250} />
          <Text className="px-5 pt-3 text-xl text-white">
            This app is designed to help students coordinate meal plans, form
            dining groups, and discover the best on-campus dining spots. Whether
            students are looking for a quick meal between classes or a chance to
            socialise over lunch, this app provides a seamless experience for
            organising group meals on campus.
          </Text>
          <View className="border-b border-gray-500 mt-3" />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProjectOverview;
