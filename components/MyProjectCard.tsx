import React, { useState } from "react";
import {
  Image,
  ImageSourcePropType,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ButtonSmall from "@/components/ButtonSmall";
import * as Haptics from "expo-haptics";

interface ProjectCardProps {
  projectName: string;
  projectIcon: ImageSourcePropType;
  hideHint: () => void;
}

export default function ProjectCard({
  projectName,
  projectIcon,
  hideHint,
}: ProjectCardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLongPress = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setIsModalVisible(true);
    hideHint();
  };

  return (
    <View className="w-[90%] self-center mb-8">
      <Text className="absolute -top-3.5 left-3 px-2 text-xl font-extralight text-white bg-[#171F20] z-10">
        {projectName}
      </Text>
      <TouchableOpacity
        className="h-40 rounded-lg border border-white p-4"
        onLongPress={handleLongPress}
        delayLongPress={500}
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
              icon={require("../assets/images/person.png")}
            />
            <ButtonSmall
              title="Project Schedule"
              filled={false}
              icon={require("../assets/images/calendar.png")}
            />
          </View>
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
              <Text className="text-white text-center">Leave Project</Text>
            </TouchableOpacity>
            <TouchableOpacity className="p-4">
              <Text className=" text-red-600 text-center">Delete Project</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
