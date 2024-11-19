import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import BackButton from "@/components/BackButton2";
import { Ionicons } from "@expo/vector-icons";
import ProjectOptions from "@/components/ProjectOptions";

interface ProjectHeaderProps {
  projectName: string;
  edit?: boolean;
}

const options = [
  {
    name: "Edit Project",
    icon: <Ionicons name="create-outline" size={24} color="white" />,
  },
  {
    name: "Delete Project",
    icon: <Ionicons name="trash-outline" size={24} color="white" />,
  },
  {
    name: "Share Project",
    icon: <Ionicons name="share-social-outline" size={24} color="white" />,
  },
];

export default function ProjectHeader({
  projectName,
  edit = false,
}: ProjectHeaderProps) {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => setShowOptions(false)}>
      <SafeAreaView className="bg-background">
        <View className="flex-row justify-between bg-background px-5 pb-5 border-b border-white">
          <BackButton />
          <Text className="text-4xl font-normal text-white text-center mt-2">
            {projectName}
          </Text>
          {edit ? (
            <TouchableOpacity
              onPress={() => setShowOptions(!showOptions)}
              className={"mt-4 mr-4  rounded-full"}
            >
              <Ionicons name="ellipsis-horizontal" size={24} color="white" />
            </TouchableOpacity>
          ) : (
            <Image
              source={require("@/assets/images/mealplanner.png")}
              className="w-14 h-14 s rounded-full"
            />
          )}
        </View>
        {showOptions && (
          <ProjectOptions
            options={options}
            otherStyles="z-[100] w-1/2 p-2 top-0 right-8 absolute"
            close={() => setShowOptions(!showOptions)}
          />
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
