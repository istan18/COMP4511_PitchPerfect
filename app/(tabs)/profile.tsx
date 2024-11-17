import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import BackButton from "@/components/BackButton";
import JobCard from "@/components/JobCard";
import ProfileHeader from "@/components/ProfileHeader";
import Tag from "@/components/Tag";
import FilledButton from "@/components/FilledButton";
import ReviewSummary from "@/components/ReviewSummary";
import ReviewCard from "@/components/ReviewCard";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import IonIcons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

const tags = [
  ["Communicative", "Requirements Defining"],
  ["Management", "Accounting"],
  ["Microsoft Excel", "Python"],
  ["Financial Mathematics", "SQL"],
  ["Strategist Excel", "R"],
];

const reviews = [
  { stars: 5, count: 15 },
  { stars: 4, count: 7 },
  { stars: 3, count: 3 },
  { stars: 2, count: 1 },
  { stars: 1, count: 1 },
];

const totalReviews = 27;

const Profile = () => {
  const [sentConnection, setSentConnection] = useState(false);

  const headerButtons = [
    {
      icon: <Feather
        name={"message-circle"}
        size={20}
        color={"black"}
      />,
      onPress: () => router.push("/messages/individual"),
      title: "Message",
    },
    {
      icon: sentConnection ? (
        <Feather
          name="clock"
          size={20}
          color="black"
        />
      ) : (
        <IonIcons
          name="person-add-outline"
          size={20}
          color="black"
        />
      ),
      onPress: () => setSentConnection(!sentConnection),
      title: `${sentConnection ? "Pending" : "Connect"}`
    },
  ];

  return (
    <SafeAreaView className={"flex-1 bg-background"}>
      <BackButton />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View className={"w-full items-center"}>
          <ProfileHeader
            name="Jenny Liu"
            degree="B. Commerce"
            university="USyd"
            imageSource={require("@/assets/images/woman.jpg")}
            connections="500+ connections"
            buttons={headerButtons}
          />
          <View className={"w-full border-t-[6px] mt-4 border-black"} />

          <View className={"items-center w-[90%] flex flex-col mt-8 gap-y-8"}>
            <Text className={"w-full text-white text-3xl"}>
              Public Projects
            </Text>
            <JobCard
              title={"Pitcher"}
              company={"Inside the Box"}
              duration={"July 2022 - Present"}
              durationLength="2 yrs 3 mths"
            />
            <JobCard
              title={"Collaborator"}
              company={"Robotic Chefs"}
              duration={"August 2021 - June 2022"}
              durationLength="10 mths"
            />
          </View>

          <View className={"w-full border-t-[6px] mt-8 border-black"} />
          
          <View className={"w-[90%] items-center flex flex-col mt-8 gap-y-8"}>
            <Text className={"w-full text-white text-3xl"}>
              Experience
            </Text>
            <JobCard
              title={"PM Intern"}
              company={"Atlassian"}
              duration={"Jan 2023 - Feb 2024"}
              durationLength="1 yr 1 mth"
            />
          </View>

          <View className={"w-full border-t-[6px] mt-8 border-black"} />
          
          <Text className={"text-white text-4xl mt-8 ml-8 mr-auto"}>Skills</Text>
          <View className={"flex flex-col mt-4 mr-auto justify-center gap-y-1"}>
            {tags.map((pair, index) => (
              <View key={index} className={"w-full flex flex-row"}>
                <Tag
                  textSize={"text-xl"}
                  tagStyle={"ml-8 mr-auto"}
                  tag={pair[0]}
                />
                <Tag
                  textSize={"text-xl"}
                  tagStyle={"ml-auto mr-8"}
                  tag={pair[1]}
                />
              </View>
            ))}
          </View>
          <View className={"w-full border-t-[6px] mt-8 border-black"} />
          <View className={"flex flex-row mt-8 ml-8 mb-2 mr-auto w-full"}>
            <Text className={"text-white text-4xl mr-auto"}>Reviews</Text>
            <View className={"flex flex-col mr-10 ml-auto"}>
              <Text className="text-white text-4xl font-bold mr-8 ml-auto">
                4.5
              </Text>
              <Text className="text-gray-300 text-md mr-8 ml-auto">
                {totalReviews} reviews
              </Text>
            </View>
          </View>
          <ReviewSummary totalReviews={totalReviews} reviews={reviews} />
          <View className={"w-full border-t-[6px] mt-8 border-black"} />
          <ReviewCard
            name="Christian Tolentino"
            avatar={require("@/assets/images/man.png")}
            timestamp="2 mins ago"
            stars={4}
            title="Collaborated with Jenny on Inside the Box"
            reviewText="Jenny is a great team lead. She is organised and very ambitious. She always gets the best out of her team."
          />
          <View
            className={"w-9/10 mx-auto border-t mt-8 border-gray-500 opacity-50"}
          />
          <ReviewCard
            name="Angela Shan"
            avatar={require("@/assets/images/woman.jpg")}
            timestamp="5 mins ago"
            stars={2}
            title="Collaborated with Jenny on Inside the Box"
            reviewText="Jenny was very bossy and never did any work herself!"
          />
          <View
            className={"w-9/10 mx-auto border-t mt-8 border-gray-500 opacity-50"}
          />
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
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
