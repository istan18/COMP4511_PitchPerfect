import React from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import BackButton from "@/components/BackButton";
import Man from "@/assets/images/man.png";
import FilledButton from "@/components/FilledButton";
import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import ButtonSmall from "@/components/ButtonSmall";

const Applicant = () => {
  const handleDecline = () => {
    Alert.alert(
      "Decline Applicant",
      "Are you sure you want to decline this applicant? This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Continue",
          style: "destructive",
          onPress: () => router.replace("/project/applicants"),
        },
      ]
    );
  };

  const handleAccept = () => {
    Alert.alert(
      "Accept Applicant",
      "Are you sure you want to accept this applicant? This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Continue",
          style: "default",
          onPress: () => router.push("/project/applicants/confirmation"),
        },
      ]
    );
  };

  const handleLinkedIn = async () => {
    const url = "https://www.linkedin.com";
    try {
      await WebBrowser.openBrowserAsync(url);
    } catch (error) {
      console.error("Failed to open URL:", error);
    }
  };

  return (
    <View className="flex-1 bg-background">
      <SafeAreaView className={"flex-1 w-full"}>
        <BackButton />
        <ScrollView
          contentContainerClassName="items-center"
          showsVerticalScrollIndicator={false}
        >
          <View
            className={
              "mt-12 w-[90%] flex-row items-center justify-between gap-x-4 items-start"
            }
          >
            <Image source={Man} className="w-24 h-24 rounded-full" />
            <View className={"flex flex-col gap-y-2 px-2"}>
              <Text className={"text-3xl text-white"}>Christian Tolentino</Text>
              <View className={"flex-1 mx-auto flex-row gap-x-4"}>
                <ButtonSmall
                  width={"w-32 h-16"}
                  icon={
                    <MaterialCommunityIcons
                      name={"account-outline"}
                      size={20}
                      color={"black"}
                    />
                  }
                  title={"View Profile"}
                  route={"/(tabs)/otherUsers/profile"}
                />
                <ButtonSmall
                  width={"w-32 h-16"}
                  filled={false}
                  icon={
                    <Feather
                      name={"message-circle"}
                      size={20}
                      color={"white"}
                      className={"mr-2"}
                    />
                  }
                  title={"Message"}
                  route={"/messages/individual"}
                />
              </View>
            </View>
          </View>

          <View className={"border-white border-t mt-4 w-full"} />

          <View className={"my-8 flex w-[85%] flex-col gap-y-8"}>
            <View className={"w-full h-fit"}>
              <Text className={"text-left font-bold text-white text-2xl"}>
                Preferred Role
              </Text>
              <Text className={"text-left text-white text-xl"}>
                Javascript Developer
              </Text>
            </View>
            <View className={" h-fit"}>
              <Text className={"text-left font-bold text-white text-2xl"}>
                Motivations for applying
              </Text>
              <Text className={"text-left text-white text-xl"}>
                I really like planning my protein intake for my meals everyday.
                I want to improve my skills.
              </Text>
            </View>
            <View className={"h-fit"}>
              <Text className={"text-left font-bold text-white text-2xl"}>
                Relevant Skills/Experience
              </Text>
              <Text className={"text-left text-white text-xl"}>
                I have done lots of JavaScript
              </Text>
            </View>
            <View className={"flex flex-row items-center justify-between"}>
              <Text className={"font-bold text-white text-2xl"}>
                Availability
              </Text>
              <Text className={"text-white text-xl"}>Weekly</Text>
            </View>
          </View>

          <FilledButton
            icon={
              <MaterialCommunityIcons
                color="white"
                name="clipboard-text-outline"
                size={28}
              />
            }
            title={"View Resume"}
            filled={false}
          />
          <FilledButton
            onPress={handleLinkedIn}
            title={"LinkedIn Profile"}
            filled={false}
            icon={<FontAwesome5 name={"linkedin"} size={28} color={"white"} />}
          />
          <View className={"border-white border-t my-4 w-full"} />
        </ScrollView>

        <FilledButton onPress={handleAccept} title={"Accept"} />
        <FilledButton
          onPress={handleDecline}
          title={"Decline"}
          filled={false}
          otherStyles={"mb-4"}
        />
      </SafeAreaView>
    </View>
  );
};

export default Applicant;
