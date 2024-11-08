import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import Button from "@/components/ButtonSmall";

interface ProjectCardProps {
  projectName: string;
  projectIcon: ImageSourcePropType;
}

export default function ProjectCard({
  projectName,
  projectIcon,
}: ProjectCardProps) {
  return (
    <View className="w-[90%] self-center mb-8">
      <Text className="absolute -top-2.5 left-3 px-2 text-lg font-medium text-white bg-[#171F20] z-10">
        {projectName}
      </Text>
      <TouchableOpacity className="h-36 rounded-lg border border-white p-4">
        <View className="flex-1 flex-row items-center">
          <Image source={projectIcon} className="w-[27%] h-[90%]" />
          <View className="w-[1px] h-[80%] bg-white mx-4" />
          <View className="flex-1 items-start ml-2">
            <Button
              title="View Applicants"
              route="/register"
              filled={false}
              icon={require("../assets/images/person.png")}
            />
            <Button
              title="Project Schedule"
              route="/register"
              filled={false}
              icon={require("../assets/images/calendar.png")}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
