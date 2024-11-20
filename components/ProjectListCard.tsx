import React, { useState } from "react";
import ProjectOptions from "./ProjectOptions";
import {
  Image,
  ImageURISource,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

interface ProjectListCardProps {
  profile: ImageURISource;
  manager: string;
  image: ImageURISource;
  title: string;
  description: string;
  hours: number;
  tags: string[];
}

export default function ProjectListCard({
  profile,
  manager,
  image,
  title,
  description,
  hours,
  tags,
}: ProjectListCardProps) {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const options = [
    {
      name: "Collaborate",
      icon: (
        <Ionicons
          name="people-outline"
          size={20}
          color="white"
          className="p-4"
        />
      ),
      onPress: () => router.push("/project/generalForm"),
    },
    {
      name: "Message",
      icon: (
        <Feather
          name="message-circle"
          size={20}
          color="white"
          className="p-4"
        />
      ),
      onPress: () => router.push("/messages/individual"),
    },
  ];

  return (
    <TouchableWithoutFeedback
      onPress={() => setIsOptionsVisible(!isOptionsVisible)}
    >
      <View className="mb-8 gap-1.5">
        <View className="flex-row justify-between mb-2">
          <TouchableOpacity className="flex-row gap-2 items-center w-[90%]">
            <Image
              source={profile}
              className="w-[10%] aspect-square rounded-full"
              resizeMode="cover"
            />
            <Text className="text-white text-xl">{manager}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setIsOptionsVisible(!isOptionsVisible)}
          >
            <Ionicons name="ellipsis-horizontal" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {isOptionsVisible && (
          <ProjectOptions
            close={() => setIsOptionsVisible(!isOptionsVisible)}
            options={options}
          />
        )}

        <TouchableOpacity
          onPress={() => router.push("/project/project-overview")}
          className="gap-1.5"
          disabled={isOptionsVisible}
        >
          <Image
            source={image}
            className="w-full h-60 mb-2 rounded-2xl"
            resizeMode="cover"
          />
          <View className="flex-row justify-between items-center">
            <Text className="text-white text-xl font-bold">{title}</Text>
            <View className="flex-row gap-2 items-center">
              <Ionicons name="time-outline" size={20} color="white" />
              <Text className="text-white text-lg">{hours} hr/week</Text>
            </View>
          </View>
          <Text className="text-white text-lg">{description}</Text>

          <View className="flex-row gap-2 mt-2">
            {tags.map((tag, index) => (
              <View
                key={index}
                className={`bg-tagBackground px-3 py-1 rounded-2xl`}
              >
                <Text className="text-tagBackgroundSelected text-s">{tag}</Text>
              </View>
            ))}
          </View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
