import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import BackButton2 from "@/components/BackButton2";
import JobCard from "@/components/JobCard";
import ProfileHeader from "@/components/ProfileHeader";
import Tag from "@/components/Tag";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import IonIcons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import Reviews from "@/components/Reviews";
import FilledButton from "@/components/FilledButton";

const tags = [
  ["Communicative", "Requirements Defining"],
  ["Management", "Accounting"],
  ["Microsoft Excel", "Python"],
  ["Financial Mathematics", "SQL"],
  ["Strategist Excel", "R"],
];

const reviewsList = [
  "Jenny is a great team lead. She is organised and very ambitious. She always gets the best out of her team.",
  "Jenny was very bossy and never did any work herself!",
];

const Profile = () => {
  const [sentConnection, setSentConnection] = useState(false);

  const headerButtons = [
    {
      icon: <Feather name={"message-circle"} size={20} color={"black"} />,
      onPress: () => router.push("/messages/individual"),
      title: "Message",
    },
    {
      icon: sentConnection ? (
        <Feather name="clock" size={20} color="black" />
      ) : (
        <IonIcons name="person-add-outline" size={20} color="black" />
      ),
      onPress: () => setSentConnection(!sentConnection),
      title: `${sentConnection ? "Pending" : "Connect"}`,
    },
  ];

  return (
    <SafeAreaView className={"flex-1 bg-background"}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View className={"w-full items-center"}>
          <View className="mr-auto ml-2">
            <BackButton2 />
          </View>
          <ProfileHeader
            name="Jenny Liu"
            degree="B. Commerce"
            university="USyd"
            imageSource={require("@/assets/images/woman.jpg")}
            connections="500+ connections"
            buttons={headerButtons}
            otherStyles="mt-0"
          />
          <View className={"w-full border-t-[6px] mt-4 border-black"} />

          <View className={"items-center w-[90%] flex flex-col mt-8 gap-y-4"}>
            <Text className={"w-full text-white text-3xl"}>
              Public Projects
            </Text>
            <JobCard
              title={"Pitcher"}
              company={"Inside the Box"}
              start={"Jul 2022"}
              end={"Present"}
              durationLength="2 yrs 3 mths"
              imageSource={require("@/assets/images/mealplanner.png")}
            />
            <JobCard
              title={"Collaborator"}
              company={"Robotic Chefs"}
              start={"Aug 2021"}
              end={"Jun 2022"}
              durationLength="10 mths"
              imageSource={require("@/assets/images/roboticChefs.png")}
            />
          </View>

          <View className={"w-full border-t-[6px] mt-8 border-black"} />

          <View className={"w-[90%] items-center flex flex-col mt-8 gap-y-4"}>
            <Text className={"w-full text-white text-3xl"}>Experience</Text>
            <JobCard
              title={"PM Intern"}
              company={"Atlassian"}
              start={"Jan 2023"}
              end={"Feb 2024"}
              durationLength="1 yr 1 mth"
              imageSource={require("@/assets/images/atlassian.png")}
            />
          </View>

          <View className={"w-full border-t-[6px] mt-8 border-black"} />

          <View className={"w-[90%] flex flex-col mt-8 gap-y-1"}>
            <Text className={"w-full mb-4 text-white text-3xl"}>Skills</Text>

            {tags.map((pair, index) => (
              <View key={index} className={"w-full flex flex-row"}>
                <Tag textSize={"text-xl"} tagStyle={"mr-auto"} tag={pair[0]} />
                <Tag textSize={"text-xl"} tagStyle={"ml-auto"} tag={pair[1]} />
              </View>
            ))}
          </View>

          <View className={"w-full border-t-[6px] mt-8 border-black"} />

          <Reviews reviewedPerson="Jenny" reviewsList={reviewsList} />
          <FilledButton
            icon={
              <Image
                source={require("@/assets/images/edit.png")}
                className={"w-8 h-8"}
              />
            }
            otherStyles={"w-3/5 mt-4 mb-8"}
            filled={false}
            title={"Leave a Review"}
            onPress={() => router.push("/(tabs)/otherUsers/reviewRating")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
