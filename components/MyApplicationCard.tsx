import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";

interface ApplicationCardProps {
  role: string;
  status: string;
  applied: string;
  lead: string;
  projectName: string;
  projectIcon: ImageSourcePropType;
  routePath?: string;
  handleLongPress: () => void;
}

export default function ApplicationCard({
  role,
  status,
  applied,
  lead,
  projectName,
  projectIcon,
  routePath,
  handleLongPress,
}: ApplicationCardProps) {
  const handlePress = () => {
    if (routePath) {
      router.push(routePath as any);
    }
  };

  return (
    <View className="w-[85%] self-center mb-8">
      <Text className="absolute -top-3.5 left-3 px-2 text-xl font-extralight text-white bg-background z-10">
        {projectName}
      </Text>
      <TouchableOpacity
        className="flex-1 rounded-lg border border-white p-4"
        onPress={handlePress}
        onLongPress={handleLongPress}
        delayLongPress={500}
      >
        <View className="flex-1 flex-row items-center justify-between">
          <View className="flex flex-col gap-2 items-start w-[50%]">
            <Text className="text-base font-bold text-white mt-1">
              Role: <Text className="font-normal">{role}</Text>
            </Text>
            <Text className="text-base font-bold text-white">
              Status: <Text className="font-normal">{status}</Text>
            </Text>
            <Text className="text-base font-bold text-white">
              Applied: <Text className="font-normal">{applied}</Text>
            </Text>
            <Text className="text-base font-bold text-white">
              Lead: <Text className="font-normal">{lead}</Text>
            </Text>
          </View>
          <View className="w-[1px] h-[80%] bg-white" />
          <Image source={projectIcon} className="w-[32%] h-[92%] rounded-3xl" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
