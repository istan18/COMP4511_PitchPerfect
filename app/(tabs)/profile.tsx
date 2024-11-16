import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "@/components/BackButton";
import { AntDesign, Feather } from "@expo/vector-icons";
import FilledButton from "@/components/FilledButton";
import { router } from "expo-router";
import IonIcons from "@expo/vector-icons/Ionicons";
import JobCard from "@/components/JobCard";

const Profile = () => {
  const [sentConnection, setSentConnection] = useState(false);
  return (
    <SafeAreaView className={"flex-1 bg-background"}>
      <BackButton />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View className={"mt-12 flex items-center flex-row"}>
          <Image
            source={require("@/assets/images/woman.jpg")}
            className="rounded-full ml-10 h-40 w-40"
          />
          <View className={"ml-6 flex flex-col gap-y-2 items-center"}>
            <Text className={" mr-auto text-left text-white text-4xl"}>
              Jenny Liu
            </Text>
            <Text className={" mr-auto text-white text-xl font-thin text-left"}>
              B. Commerce
            </Text>
            <View className={"flex flex-row items-center justify-center"}>
              <Text className={" mr-auto text-white text-xl text-left"}>
                University of Sydney
              </Text>
              <View className={"ml-2 mt-1 w-5 h-5 bg-lime-500 rounded-full"}>
                <AntDesign
                  name={"check"}
                  color={"white"}
                  size={12}
                  className={"ml-auto mb-auto mr-[0.2rem] mt-[0.2rem]"}
                />
              </View>
            </View>
            <TouchableOpacity className={"mr-auto"}>
              <Text className={" underline text-gray-500 text-md text-left"}>
                500+ connections
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className={"flex w-[90%]  mt-4 gap-x-4 mx-auto flex-row"}>
          <FilledButton
            onPress={() => router.push("/messages/individual")}
            width="w-52"
            title={"Message"}
            icon={
              <Feather
                name={"message-circle"}
                size={28}
                color={"black"}
                className={"mt-[0.3rem]"}
              />
            }
          />
          <FilledButton
            width="w-52"
            icon={
              sentConnection ? (
                <Feather
                  name={"clock"}
                  size={28}
                  color="black"
                  className={"mt-[0.2rem]"}
                />
              ) : (
                <IonIcons
                  className={"mt-[0.2rem]"}
                  name={"person-add-outline"}
                  size={28}
                  color={"black"}
                />
              )
            }
            onPress={() => setSentConnection(!sentConnection)}
            title={`${sentConnection ? "Pending" : "Connect"}`}
          />
        </View>
        <View className={"w-full border-t-[6px] mt-4 border-black"} />
        <Text className={"text-white text-4xl mt-8 ml-8 mr-auto"}>
          Public Projects
        </Text>
        <View className={"w-full flex flex-col mt-4 justify-center gap-y-4"}>
          <JobCard
            title={"Pitcher"}
            company={"Inside the Box"}
            duration={"July 2022 - Present ⋅ 2 years 3 months"}
          />
          <JobCard
            title={"Collaborator"}
            company={"Robotic Chefs"}
            duration={"August 2021 - June 2022 ⋅ 10 months"}
          />
        </View>
        <View className={"w-full border-t-[6px] mt-8 border-black"} />
        <Text className={"text-white text-4xl mt-8 ml-8 mr-auto"}>
          Experience / Education
        </Text>
        <View
          className={"flex flex-col ml-8 mt-4 mr-auto justify-center gap-y-4"}
        >
          <View className={"flex flex-row items-center justify-center"}>
            <Image className="w-20 h-20 rounded-xl bg-gray-500" />
            <View className={"ml-4 flex flex-col justify-center"}>
              <Text className={" text-white text-2xl text-left"}>
                University of Sydney
              </Text>
              <Text className={"text-textGray text-lg text-left"}>
                Jan 2021 - Present
              </Text>
            </View>
          </View>
          <View className={"flex flex-row items-center justify-center"}>
            <Image className="w-20 h-20 rounded-xl bg-gray-500" />
            <View className={"ml-4 flex flex-col justify-center"}>
              <Text className={" text-white text-2xl text-left"}>
                Atlassian ⋅ PM Intern
              </Text>
              <Text className={"text-textGray text-lg text-left"}>
                Jan 2023 - Feb 2024
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
