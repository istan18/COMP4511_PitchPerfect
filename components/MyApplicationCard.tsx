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
    <View className="w-9/10 self-center mb-8">
      <Text className="absolute -top-3.5 left-3 px-2 text-xl font-extralight text-white bg-background z-10">
        {projectName}
      </Text>
      <TouchableOpacity
        className="h-40 rounded-lg border border-white p-4"
        onPress={handlePress}
        onLongPress={handleLongPress}
        delayLongPress={500}
      >
        <View className="flex-1 flex-row items-center">
          <View className="flex-1 items-start">
            <Text className="text-base font-bold text-white mb-2">
              Role: <Text className="font-normal">{role}</Text>
            </Text>
            <Text className="text-base font-bold text-white mb-2">
              Status: <Text className="font-normal">{status}</Text>
            </Text>
            <Text className="text-base font-bold text-white mb-2">
              Applied: <Text className="font-normal">{applied}</Text>
            </Text>
            <Text className="text-base font-bold text-white">
              Lead: <Text className="font-normal">{lead}</Text>
            </Text>
          </View>
          <View className="w-[1px] h-[80%] bg-white mx-4" />
          <Image
            source={projectIcon}
            className="w-[32%] h-[92%] ml-5 rounded-3xl"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
