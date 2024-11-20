import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";

interface ApplicantCardProps {
  name: string;
  location: string;
  time: string;
  image: React.ReactElement;
}

const ApplicantCard = ({ name, location, time, image }: ApplicantCardProps) => {
  return (
    <TouchableOpacity
      className={"w-[85%] border border-white rounded-2xl h-28"}
      onPress={() => router.push("/project/applicants/applicant")}
    >
      <View className={"flex h-full flex-row justify-between items-center p-4"}>
        {image}
        <View className={"flex max-w-72 flex-col pl-4 mr-2 flex-1"}>
          <Text className={"text-white text-2xl text-left"}>{name}</Text>
          <Text className={"text-white text-lg text-left"}>
            {location} - {time}
          </Text>
        </View>
        <Entypo name={"chevron-thin-right"} size={28} color="white" />
      </View>
    </TouchableOpacity>
  );
};

export default ApplicantCard;
