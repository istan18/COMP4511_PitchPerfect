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
import ApplicationCard from "@/components/MyApplicationCard";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";

const MyApplicationsContent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleWithdraw = () => {
    setIsModalVisible(false);
    Alert.alert(
      "Withdraw Application",
      "Are you sure you want to withdraw your application? This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Withdraw",
          style: "destructive",
        },
      ]
    );
  };

  const handleLongPress = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setIsModalVisible(true);
    hideHint();
  };
  const [showHint, setShowHint] = useState(true);

  const hideHint = () => {
    setShowHint(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 mt-5">
        <ScrollView className="px-4 pt-2">
          <ApplicationCard
            projectName="Inside the Box"
            role="Javascript Developer"
            status="Received"
            applied="23/10/24"
            lead="Jenny Liu"
            projectIcon={require("@/assets/images/mealplanner.png")}
            handleLongPress={handleLongPress}
            routePath="/project/project-overview"
          />
          <ApplicationCard
            projectName="Project 2"
            role="UI/UX Designer"
            status="Interview"
            applied="10/09/24"
            lead="Samantha Fang"
            projectIcon={require("@/assets/images/rocket.png")}
            handleLongPress={handleLongPress}
            routePath="/project/project-overview"
          />
          <ApplicationCard
            projectName="Project 3"
            role="Python Developer"
            status="Accepted Offer"
            applied="13/02/24"
            lead="Bob Thorton"
            projectIcon={require("@/assets/images/bird.jpg")}
            handleLongPress={handleLongPress}
            routePath="/project/project-overview"
          />
          {showHint && (
            <Text className="text-gray-400 text-xs text-center">
              Hold any application card to manage application
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
              onPress={() => {
                setIsModalVisible(false);
                router.replace("/messages/individual");
              }}
              className="p-4 border-b border-white"
            >
              <Text className="text-white text-center">
                Message Project Lead
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="p-4" onPress={() => handleWithdraw()}>
              <Text className="text-red-600 text-center">
                Withdraw Application
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default MyApplicationsContent;
