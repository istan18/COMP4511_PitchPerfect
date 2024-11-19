import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ImageSlider from "@/components/ImageSlider";
import ProjectHeader from "@/app/(tabs)/project/projectHeader";
import { router } from "expo-router";

const ProjectOverview = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikePress = () => {
    setIsLiked(!isLiked);
  };

  const handleCollaboratePress = () => {
    router.push("/project/generalForm");
  };

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
    <SafeAreaView className="flex-1 bg-background">
      <ProjectHeader projectName="Inside the Box" edit={true} />
      <ScrollView className="flex-1 -z-10">
        <View className="mt-5 pb-28">
          <ImageSlider images={images} height={250} />
          <Text className="px-5 pt-5 text-xl text-white">
            This app is designed to help students coordinate meal plans, form
            dining groups, and discover the best on-campus dining spots. Whether
            students are looking for a quick meal between classes or a chance to
            socialise over lunch, this app provides a seamless experience for
            organising group meals on campus.
          </Text>
          <View className="border-b border-gray-500 mt-5" />
          <Text className="px-5 pt-4 text-2xl text-white text-center font-extrabold">
            Members
          </Text>
          <View className="flex-row justify-around mt-1 px-5">
            {members.map((member, index) => (
              <TouchableOpacity
                onPress={() => router.push("/profile")}
                key={index}
                className="items-center"
              >
                <Image
                  source={member.icon}
                  className="w-16 h-16 rounded-full"
                />
                <Text className="text-white mt-2">{member.role}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View className="border-b border-gray-500 mt-7" />
          <Text className="text-2xl text-white mr-2 text-center font-bold mt-6">
            Project Details
          </Text>
          <Text className="px-5 pt-2 text-2xl text-white font-extralight">
            Estimated Release: 23/03/25
          </Text>
          <View className="flex-row items-center px-5 pt-2">
            <Text className="text-2xl text-white mr-2 font-extralight">
              Progress:
            </Text>
            <View className="bg-filledButton h-2 w-20 mx-1 rounded-full" />
            <View className="bg-white h-2 w-44 rounded-full" />
            <Text className="text-2xl ml-5 text-white font-extralight">
              30%
            </Text>
          </View>
          <View className="flex-row items-center px-5 pt-2">
            <Text className="text-2xl text-white mr-3.5 font-extralight">
              Funding:
            </Text>
            <View className="bg-filledButton h-2 w-10 mx-1 rounded-full" />
            <View className="bg-white h-2 w-[190px] rounded-full" />
            <Text className="text-2xl ml-5 text-white font-extralight">
              $125
            </Text>
          </View>
          <Text className="px-5 pt-8 text-2xl text-white text-center font-bold">
            Skills Required
          </Text>
          <View className="flex-row justify-around mt-4 px-5">
            <View className="px-3 py-2 rounded-full border border-white">
              <Text className="text-white">Software Engineer</Text>
            </View>
            <View className="px-3 py-2 rounded-full border border-white">
              <Text className="text-white">UI/UX Design</Text>
            </View>
            <View className="px-3 py-2 rounded-full border border-white">
              <Text className="text-white">Photographer</Text>
            </View>
          </View>
          <Text className="px-5 pt-10 text-2xl text-white text-center font-bold">
            Project Updates
          </Text>
          <Text className="px-5 text-xl text-gray-400">
            As the user base grows, we’ve added new features to our community
            forums: the ability to create private groups, share photos, and...
            <Text className="text-blue-500"> more</Text>
          </Text>
        </View>
      </ScrollView>
      <View className="absolute bottom-0 w-full items-center">
        <View className="absolute bottom-0 w-full border-t border-t-gray-500 rounded-tl-4xl rounded-tr-4xl  flex-row  bg-background justify-around items-center px-5 py-3">
          <Image
            source={require("@/assets/images/commentProject.png")}
            className="w-10 h-16"
          />
          <TouchableOpacity
            className="bg-filledButton px-20 py-4 rounded-full items-center"
            onPress={handleCollaboratePress}
          >
            <Text className="text-black text-xl">Collaborate</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLikePress}>
            <Image
              source={
                isLiked
                  ? require("@/assets/images/likedProject.png")
                  : require("@/assets/images/likeProject.png")
              }
              className="w-10 h-16"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProjectOverview;
