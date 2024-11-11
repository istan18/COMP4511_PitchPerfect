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
          <View className="flex-row justify-around mt-1 px-5">
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
          <Text className="px-5 pt-2 text-2xl text-white">
            Estimated Release: 23/03/25
          </Text>
          <View className="flex-row items-center px-5 pt-2">
            <Text className="text-2xl text-white mr-2">Progress:</Text>
            <View className="bg-[#46AAAC] h-2 w-20 mx-1 rounded-full" />
            <View className="bg-white h-2 w-44 rounded-full" />
            <Text className="text-2xl ml-5 text-white">30%</Text>
          </View>
          <View className="flex-row items-center px-5 pt-2">
            <Text className="text-2xl text-white mr-3.5">Funding:</Text>
            <View className="bg-[#46AAAC] h-2 w-10 mx-1 rounded-full" />
            <View className="bg-white h-2 w-[190px] rounded-full" />
            <Text className="text-2xl ml-5 text-white">$125</Text>
          </View>
          <Text className="px-5 pt-2 text-2xl text-white text-center">
            Skills Required
          </Text>
          <View className="flex-row justify-around mt-2 px-5">
            <View className="bg-[#46AAAC] px-3 py-1 rounded-full">
              <Text className="text-white">Software Engineer</Text>
            </View>
            <View className="bg-[#46AAAC] px-3 py-1 rounded-full">
              <Text className="text-white">UI/UX Design</Text>
            </View>
            <View className="bg-[#46AAAC] px-3 py-1 rounded-full">
              <Text className="text-white">Photographer</Text>
            </View>
          </View>
          <Text className="px-5 pt-4 text-2xl text-white text-center">
            Project Updates
          </Text>
          <Text className="px-5 text-xl text-gray-400">
            As the user base grows, we’ve added new features to our community
            forums: the ability to create private groups, share photos, and
          </Text>
          <Text className="px-5 text-xl text-blue-400 text-right">more</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProjectOverview;
