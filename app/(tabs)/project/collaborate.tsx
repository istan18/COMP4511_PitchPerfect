import React from "react";
import { View, Text } from "react-native";
import ProjectHeader from "@/app/(tabs)/project/projectHeader";
import ApplicationProjectCard from "@/components/ApplicationProjectCard";

const collaborate = () => {
  return (
    <View className="flex-1 bg-[#171F20]">
      <ProjectHeader projectName="Application Form" />
      <View className="flex-1 mt-7">
        <ApplicationProjectCard
          projectName="Inside the Box"
          lead="John Doe"
          dateCreated="01/01/2023"
          projectIcon={require("@/assets/images/mealplanner.png")}
        />
      </View>
    </View>
  );
};

export default collaborate;
