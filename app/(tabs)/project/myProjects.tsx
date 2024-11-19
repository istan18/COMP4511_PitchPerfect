import React, { useState } from "react";
import {
  Alert,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ProjectCard from "@/components/MyProjectCard";
import * as Haptics from "expo-haptics";

export default function MyProjectsContent() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLongPress = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setIsModalVisible(true);
    hideHint();
  };

  const handleLeave = () => {
    setIsModalVisible(false);
    Alert.alert(
      "Leave Project",
      "Are you sure you want to leave this project? This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Leave",
          style: "destructive",
        },
      ]
    );
  };

  const handleDelete = () => {
    setIsModalVisible(false);
    Alert.alert(
      "Delete Project",
      "Are you sure you want to delete this project? This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
        },
      ]
    );
  };

  const [showHint, setShowHint] = useState(true);

  const hideHint = () => {
    setShowHint(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 mt-5">
        <ScrollView className="px-4 pt-2">
          <ProjectCard
            projectName="Skill Swap"
            projectIcon={require("@/assets/images/skill-swap.png")}
            handleLongPress={handleLongPress}
          />
          <ProjectCard
            projectName="Second Project"
            projectIcon={require("@/assets/images/second-project.png")}
            handleLongPress={handleLongPress}
          />
          <ProjectCard
            projectName="Third Project"
            projectIcon={require("@/assets/images/project-3.png")}
            handleLongPress={handleLongPress}
          />
          {showHint && (
            <Text className="text-gray-400 text-xs text-center">
              Hold any project card to manage project
            </Text>
          )}
        </ScrollView>
      </View>
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
          <View className="bg-background w-72 rounded-lg border border-white">
            <TouchableOpacity
              onPress={handleLeave}
              className="p-4 border-b border-white"
            >
              <Text className="text-white text-center">Leave Project</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete} className="p-4">
              <Text className=" text-red-600 text-center">Delete Project</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}
