import {
  Image,
  ImageURISource,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import Tag from "@/components/Tag";

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
  return (
    <React.Fragment>
      <View className="flex-row justify-between mb-2">
        <TouchableOpacity
          onPress={() => router.push("/profile")}
          className="flex-row gap-2 items-center w-9/10"
        >
          <Image
            source={profile}
            className="w-[10%] aspect-square rounded-full"
            resizeMode="cover"
          />
          <Text className="text-white text-xl">{manager}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => router.replace("/project/project-overview")}
        className="mb-8 gap-1.5"
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
            <Tag tag={tag} key={index} />
          ))}
        </View>
      </TouchableOpacity>
    </React.Fragment>
  );
}
