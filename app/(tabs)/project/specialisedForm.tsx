import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import ProjectHeader from "@/app/(tabs)/project/projectHeader";
import ApplicationProjectCard from "@/components/ApplicationProjectCard";
import CustomDropdown from "@/components/CustomDropdown";
import FilledButton from "@/components/FilledButton";
import Progress from "@/components/Progress";
import { router } from "expo-router";
import RadioGroup from "@/components/RadioGroup";

const SpecialisedFormPage = () => {
  const dropdownOptionsAvailibility = [
    { label: "Daily", value: "1" },
    { label: "Weekly", value: "2" },
    { label: "Fortnighly", value: "3" },
    { label: "Monthly", value: "4" },
  ];
  const dropdownOptionsProficiency = [
    { label: "Beginner (<3 months)", value: "1" },
    { label: "Moderate (1 - 2 years)", value: "2" },
    { label: "Expert (3+ years)", value: "3" },
  ];
  const radioOptions = [
    { label: "React", value: "1" },
    { label: "Vue.js", value: "2" },
    { label: "Angular", value: "3" },
  ];

  return (
    <View className="flex-1 bg-[#171F20]">
      <ProjectHeader projectName="Application Form" />
      <View className="flex-1 mt-7 items-center">
        <ApplicationProjectCard
          projectName="Inside the Box"
          lead="Jenny Liu"
          dateCreated="23/07/2024"
          projectIcon={require("@/assets/images/mealplanner.png")}
        />
        <View className="w-full border-t border-gray-500 m-5" />
        <CustomDropdown
          options={dropdownOptionsAvailibility}
          placeholder="Availability"
        />
        <View className="w-full py-2" />
        <CustomDropdown
          options={dropdownOptionsProficiency}
          placeholder="Proficiency in JavaScript"
        />
        <Text className="text-white font-light text-2xl mt-4 mb-2">
          JavaScript Experience
        </Text>
        <RadioGroup options={radioOptions} multiple={true} />
        <Text className="text-white text-2xl mt-4 mb-2">
          <Text className="font-bold">Resume: </Text>
          <Text className="font-light">Existing_Resume_123.pdf</Text>
        </Text>
        <View className="flex-row justify-between w-full">
          <View className="flex-1 mx-5">
            <View className="flex-row border border-white rounded-full py-2 items-center justify-center">
              <Text className="text-white mr-2">Upload Resume</Text>
              <Image
                source={require("@/assets/images/uploadResume.png")}
                style={{ width: 30, height: 24 }}
              />
            </View>
          </View>
          <View className="flex-1 mx-5">
            <View className="flex-row border border-white rounded-full py-2 items-center justify-center">
              <Text className="text-white mr-2">Link LinkedIn</Text>
              <Image
                source={require("@/assets/images/Linkedln.png")}
                style={{ width: 30, height: 24 }}
              />
            </View>
          </View>
        </View>
      </View>
      <View className={"mx-auto w-full absolute bottom-2.5"}>
        <FilledButton
          filled={true}
          title={"Submit Application"}
          onPress={() => router.replace("/(tabs)/project")}
        />
        <Progress filledIndex={1} length={2} />
      </View>
    </View>
  );
};

export default SpecialisedFormPage;
