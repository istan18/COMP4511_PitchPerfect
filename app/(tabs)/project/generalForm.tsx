import React, { useState } from "react";
import { View, Text } from "react-native";
import ProjectHeader from "@/app/(tabs)/project/projectHeader";
import ApplicationProjectCard from "@/components/ApplicationProjectCard";
import CustomDropdown from "@/components/CustomDropdown";
import CustomTextInput from "@/components/CustomTextInput2";
import FilledButton from "@/components/FilledButton";
import Progress from "@/components/Progress";
import { router } from "expo-router";

const GeneralFormPage = () => {
  const [motivation, setMotivation] = useState("");
  const [experience, setExperience] = useState("");
  const dropdownOptions = [
    { label: "Social Media Marketing", value: "1" },
    { label: "JavaScript Developer", value: "2" },
    { label: "Platform Developer", value: "3" },
    { label: "Investor", value: "4" },
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
          options={dropdownOptions}
          placeholder="Select Preferred Role"
        />
        <Text className="text-white font-light text-2xl mt-6 mb-2">
          Motivation for applying
        </Text>
        <CustomTextInput
          setText={setMotivation}
          text={motivation}
          height={"h-36"}
          padding={""}
          maxLength={200}
          placeholder={""}
          includeCounter={true}
        />
        <Text className="text-white font-light text-2xl mt-2 mb-2">
          Relevant Skills / Experience
        </Text>
        <CustomTextInput
          setText={setExperience}
          text={experience}
          height={"h-36"}
          padding={""}
          maxLength={200}
          placeholder={""}
          includeCounter={true}
        />
      </View>
      <View className={"mx-auto w-full absolute bottom-2.5"}>
        <FilledButton
          filled={true}
          title={"Next"}
          onPress={() => router.push("/(tabs)/project/specialisedForm")}
        />
        <Progress filledIndex={0} length={2} />
      </View>
    </View>
  );
};

export default GeneralFormPage;
