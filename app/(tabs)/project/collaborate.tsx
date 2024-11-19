import React from "react";
import { View, Text } from "react-native";
import ProjectHeader from "@/app/(tabs)/project/projectHeader";
import ApplicationProjectCard from "@/components/ApplicationProjectCard";
import CustomDropdown from "@/components/CustomDropdown";

const dropdownOptions = [
  { label: "Social Media Marketing", value: "1" },
  { label: "JavaScript Developer", value: "2" },
  { label: "Platform Developer", value: "3" },
  { label: "Investor", value: "4" },
];

const collaborate = () => {
  return (
    <View className="flex-1 bg-[#171F20]">
      <ProjectHeader projectName="Application Form" />
      <View className="flex-1 mt-7 items-center">
        <ApplicationProjectCard
          projectName="Inside the Box"
          lead="John Doe"
          dateCreated="01/01/2023"
          projectIcon={require("@/assets/images/mealplanner.png")}
        />
        <View className="w-full border-t border-gray-500 m-5" />
        <CustomDropdown
          options={dropdownOptions}
          placeholder="Select Preferred Role"
        />
      </View>
    </View>
  );
};

export default collaborate;
