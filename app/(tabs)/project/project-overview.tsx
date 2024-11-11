import React from "react";
import { View, Text, ScrollView, SafeAreaView, Image } from "react-native";
import ImageSlider from "@/components/ImageSlider";
import ProjectHeader from "@/app/(tabs)/project/projectHeader";

const ProjectOverview = () => {
  const images = [
    require("@/assets/images/meal-planner-2.png"),
    require("@/assets/images/meal-planner-1.png"),
    require("@/assets/images/meal-planner-3.png"),
  ];

  const members = [
    {
      role: "Developer",
      icon: require("@/assets/images/jennyProfile.png"),
    },
    {
      role: "Designer",
      icon: require("@/assets/images/emptyProfile.png"),
    },
    {
      role: "Manager",
      icon: require("@/assets/images/emptyProfile.png"),
    },
    {
      role: "Tester",
      icon: require("@/assets/images/emptyProfile.png"),
    },
    {
      role: "Support",
      icon: require("@/assets/images/kevinProfile.png"),
    },
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
          <Text className="px-5 pt-2 text-2xl text-white text-center font-extrabold">
            Members
          </Text>
          <View className="flex-row justify-around mt-4 px-5">
            {members.map((member, index) => (
              <View key={index} className="items-center">
                <Image
                  source={member.icon}
                  className="w-16 h-16 rounded-full"
                />
                <Text className="text-white mt-2">{member.role}</Text>
              </View>
            ))}
          </View>
          <View className="border-b border-gray-500 mt-3" />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProjectOverview;
