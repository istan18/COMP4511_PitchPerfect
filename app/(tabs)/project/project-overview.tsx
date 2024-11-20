import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import ImageSlider from "@/components/ImageSlider";
import ProjectHeader from "@/app/(tabs)/project/projectHeader";
import { router } from "expo-router";
import ProjectOptions from "@/components/ProjectOptions";
import { Ionicons } from "@expo/vector-icons";

const ProjectOverview = () => {
  const [showOptions, setShowOptions] = useState(false);
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
      role: "Lead",
      icon: require("@/assets/images/jennyProfile.png"),
    },
    {
      role: "Designer",
      icon: require("@/assets/images/defaultProfile.jpg"),
    },
    {
      role: "Tester",
      icon: require("@/assets/images/man.png"),
    },
    {
      role: "Developer",
      icon: require("@/assets/images/aliceProfile.jpg"),
    },
    {
      role: "Investor",
      icon: require("@/assets/images/kevinProfile.png"),
    },
  ];

  const options = [
    {
      name: "Edit Project",
      icon: (
        <Ionicons
          className="mr-2"
          name="create-outline"
          size={24}
          color="white"
        />
      ),
    },
    {
      name: "Delete Project",
      icon: (
        <Ionicons className="mr-2" name="trash-outline" size={24} color="white" />
      ),
    },
    {
      name: "Share Project",
      icon: (
        <Ionicons
          className="mr-2"
          name="share-social-outline"
          size={24}
          color="white"
        />
      ),
    },
  ];

  return (
    <View className="flex-1 items-center bg-background">
      <SafeAreaView className="flex-1 w-full">
        <ProjectHeader projectName="Inside the Box" edit={true} setShowOptions={() => setShowOptions(!showOptions)} />
        {showOptions && (
          <ProjectOptions
            options={options}
            otherStyles="right-8 absolute top-20 pl-4 w-[1/2]"
            close={() => setShowOptions(!showOptions)}
          />
        )}
        <ScrollView 
          className="flex-1 w-full -z-10" 
          contentContainerClassName="items-center"
          showsVerticalScrollIndicator={false}
        >
          <TouchableWithoutFeedback onPress={() => setShowOptions(false)}>
            <View className="w-full items-center">
              <ImageSlider images={images} height={250} />
              <View className="flex-col gap-4 mt-4 pb-28 w-[85%]">
                <Text className="text-2xl text-white text-center font-bold mt-4">
                  Project Details
                </Text>
                <Text className="pt-2 text-2xl text-white font-extralight">
                  Estimated Release: 23/03/25
                </Text>

                <View className="flex-row w-full gap-1 items-center pt-2">
                  <Text className="text-2xl mr-4 text-white font-extralight">
                    Progress:
                  </Text>
                  <View className="bg-filledButton mr-1 h-2 w-[30%] rounded-full" />
                  <View className="flex-1 bg-white h-2 w-[70%] rounded-full" />
                  <Text className="text-2xl ml-4 text-white font-extralight">
                    55%
                  </Text>
                </View>
                <View className="flex-row w-full gap-1 items-center pt-2">
                  <Text className="text-2xl text-white mr-4 font-extralight">
                    Funding:
                  </Text>
                  <View className="bg-filledButton h-2 w-[10%] mr-1 rounded-full" />
                  <View className="flex-1 bg-white h-2 w-[90%] rounded-full" />
                  <Text className="text-2xl ml-4 text-white font-extralight">
                    $125
                  </Text>
                </View>

                <Text className="pt-5 text-xl text-white">
                  This app is designed to help students coordinate meal plans, form
                  dining groups, and discover the best on-campus dining spots. Whether
                  students are looking for a quick meal between classes or a chance to
                  socialise over lunch, this app provides a seamless experience for
                  organising group meals on campus.
                </Text>
                <View className="border-b border-gray-500 mt-5" />

                <Text className="pt-4 text-2xl text-white text-center font-extrabold">
                  Members
                </Text>
                <View className="flex flex-row justify-between mt-1">
                  {members.map((member, index) => (
                    <TouchableOpacity
                      onPress={() => router.push("/(tabs)/otherUsers/profile")}
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

                <Text className="pt-5 text-2xl text-white text-center font-bold">
                  Skills Required
                </Text>
                <View className="w-full flex-row flex-wrap justify-start mt-2 gap-2">
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
                <View className="border-b border-gray-500 mt-7" />

                <Text className="pt-5 text-2xl text-white text-center font-bold">
                  Project Updates
                </Text>
                <Text className="pb-5 text-xl text-gray-400">
                  As the user base grows, we’ve added new features to our community
                  forums: the ability to create private groups, share photos, and...
                  <Text className="text-blue-500"> more</Text>
                </Text>
              </View>  
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
        
        <View className="absolute bottom-0 w-full items-center">
          <View className="absolute bottom-0 w-full border-t border-t-gray-500 rounded-tl-4xl rounded-tr-4xl  flex-row  bg-background justify-around items-center px-5 py-3">
            <Image
              source={require("@/assets/images/commentProject.png")}
              className="w-8 h-14 mt-1"
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
                className="w-8 h-14 mt-1"
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProjectOverview;
