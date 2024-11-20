import React from "react";
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

interface ProjectHeaderProps {
  projectName: string;
  edit?: boolean;
  setShowOptions?: () => void;
}

export default function ProjectHeader({
  projectName,
  edit = false,
  setShowOptions,
}: ProjectHeaderProps) {
  return (
    <TouchableWithoutFeedback onPress={setShowOptions}>
      <SafeAreaView className="bg-background">
        <View className="flex-row justify-between bg-background px-5 pb-5 border-b border-white">
          <BackButton />
          <Text className="text-4xl font-normal text-white text-center mt-2">
            {projectName}
          </Text>
          {edit ? (
            <TouchableOpacity
              onPress={setShowOptions}
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
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
