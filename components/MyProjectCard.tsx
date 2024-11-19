import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ButtonSmall from "@/components/ButtonSmall";
import { router } from "expo-router";

interface ProjectCardProps {
  projectName: string;
  projectIcon: ImageSourcePropType;
  handleLongPress: () => void;
}

export default function ProjectCard({
  projectName,
  projectIcon,
  handleLongPress,
}: ProjectCardProps) {
  return (
    <View className="w-9/10 self-center mb-8">
      <Text className="absolute -top-3.5 left-3 px-2 text-xl font-extralight text-white bg-background z-10">
        {projectName}
      </Text>
      <TouchableOpacity
        className="h-40 rounded-lg border border-white p-4"
        onLongPress={handleLongPress}
        delayLongPress={500}
        onPress={() => router.push("/project/project-overview")}
      >
        <View className="flex-1 flex-row items-center">
          <Image
            source={projectIcon}
            className="w-[32%] h-[92%] mr-5 rounded-3xl"
          />
          <View className="w-[1px] h-[80%] bg-white mx-4" />
          <View className="flex-1 items-start ml-2">
            <ButtonSmall
              title="View Applicants"
              route="/project/applicants" // Change this later with path to view applicants
              filled={false}
              push={true}
              icon={require("@/assets/images/person.png")}
            />
            <ButtonSmall
              title="Project Schedule"
              filled={false}
              icon={require("@/assets/images/calendar.png")}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
