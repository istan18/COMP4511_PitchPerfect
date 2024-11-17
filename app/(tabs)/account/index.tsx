import React from "react";
import { View, SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native";
import ProfileHeader from "@/components/ProfileHeader";
import { Feather, Ionicons } from "@expo/vector-icons";
import JobCard from "@/components/JobCard";

export default function Index(){
  const headerButtons = [
    {
      icon: <Feather name="edit-2" size={16} color="black" />,
      onPress: () => {},
      title: "Edit profile"
    },
  ];

  return (
    <View className="flex-1 bg-background">
      <ScrollView 
        className="w-full"
        showsHorizontalScrollIndicator={false}
      >
        <SafeAreaView className="w-full items-center">
          <ProfileHeader
            name="Alice Sharma"
            degree="B. Computer Science"
            university="UNSW"
            imageSource={require("@/assets/images/aliceProfile.jpg")}
            connections="500+ connections"
            buttons={headerButtons}
          />

          <View className={"w-full border-t-[6px] mt-4 border-black"} />

          <View className={"w-[90%] items-center flex flex-col mt-8 gap-y-8"}>
            <Text className={"w-full text-white text-3xl"}>
              Public Projects
            </Text>
            <JobCard
              title={"Pitcher"}
              company={"Inside the Box"}
              duration={"July 2022 - Present"}
              durationLength="2 yrs 3 mths"
              manageIcon={<Ionicons name="ellipsis-horizontal" size={20} color="white" />}
            />
            <JobCard
              title={"Collaborator"}
              company={"Robotic Chefs"}
              duration={"August 2021 - June 2022"}
              durationLength="10 mths"
              manageIcon={<Ionicons name="ellipsis-horizontal" size={20} color="white" />}
            />
          </View>
          
          <View className={"w-full border-t-[6px] mt-8 border-black"} />
        
          <View className={"w-[90%] items-center flex flex-col mt-8 gap-y-8"}>
            <View className="flex-row justify-between items-center">
              <Text className={"w-[90%] text-white text-3xl"}>
                Experience
              </Text>
              <TouchableOpacity>
                <Feather name="edit-2" size={20} color="white" />
              </TouchableOpacity>
            </View>

            <JobCard
              title={"PM Intern"}
              company={"Atlassian"}
              duration={"Jan 2023 - Feb 2024"}
              durationLength="1 yr 1 mth"
            />
          </View>

          <View className={"w-full border-t-[6px] mt-8 border-black"} />

        </SafeAreaView>
      </ScrollView>
    </View>
  );
};
