import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  Modal,
} from "react-native";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";

interface ApplicationCardProps {
  role: string;
  status: string;
  applied: string;
  lead: string;
  projectName: string;
  projectIcon: ImageSourcePropType;
  routePath?: string;
  hideHint: () => void;
}

export default function ApplicationCard({
  role,
  status,
  applied,
  lead,
  projectName,
  projectIcon,
  routePath,
  hideHint,
}: ApplicationCardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLongPress = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setIsModalVisible(true);
    hideHint();
  };

  const handlePress = () => {
    if (routePath) {
      router.replace(routePath as any);
    }
  };

  return (
    <View className="w-[90%] self-center mb-8">
      <Text className="absolute -top-3.5 left-3 px-2 text-xl font-extralight text-white bg-[#171F20] z-10">
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
          <Image source={projectIcon} className="w-[32%] h-[92%] ml-5" />
        </View>
      </TouchableOpacity>

      <Modal
        transparent
        visible={isModalVisible}
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <TouchableOpacity
          className="flex-1 bg-black/50 justify-center items-center"
          activeOpacity={1}
          onPress={() => setIsModalVisible(false)}
        >
          <View className="bg-[#171F20] w-72 rounded-lg border border-white">
            <TouchableOpacity className="p-4 border-b border-white">
              <Text className="text-white text-center">
                Message Project Lead
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="p-4">
              <Text className="text-red-600 text-center">
                Withdraw Application
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
