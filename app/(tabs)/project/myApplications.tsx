import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import ApplicationCard from "@/components/MyApplicationCard";

export default function MyApplicationsContent() {
  const [showHint, setShowHint] = useState(true);

  const hideHint = () => {
    setShowHint(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#171F20]">
      <View className="flex-1 mt-5">
        <ScrollView className="px-4 pt-2">
          <ApplicationCard
            projectName="Meal Planner"
            role="Javascript Developer"
            status="Received"
            applied="23/10/24"
            lead="Jenny Liu"
            projectIcon={require("@/assets/images/project-logo-1.png")}
            hideHint={hideHint}
            routePath="/(tabs)/project/project-overview"
          />
          <ApplicationCard
            projectName="Project 2"
            role="UI/UX Designer"
            status="Interview"
            applied="10/09/24"
            lead="Samantha Fang"
            projectIcon={require("@/assets/images/project-logo-2.png")}
            hideHint={hideHint}
          />
          <ApplicationCard
            projectName="Project 3"
            role="Python Developer"
            status="Accepted Offer"
            applied="13/02/24"
            lead="Bob Thorton"
            projectIcon={require("@/assets/images/project-logo-3.png")}
            hideHint={hideHint}
          />
          {showHint && (
            <Text className="text-gray-400 text-xs text-center">
              Hold any application card to manage application
            </Text>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
