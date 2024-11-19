import React, { useState } from "react";
import {
  Keyboard,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import ProjectHeader from "@/app/(tabs)/project/projectHeader";
import ApplicationProjectCard from "@/components/ApplicationProjectCard";
import CustomDropdown from "@/components/CustomDropdown";
import CustomTextInput from "@/components/CustomTextInput";
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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView className="flex-1 bg-background">
        <ProjectHeader projectName="Application Form" />
        <View className="mt-8 flex flex-col items-center">
          <ApplicationProjectCard
            projectName="Inside the Box"
            lead="Jenny Liu"
            dateCreated="23/07/2024"
            projectIcon={require("@/assets/images/mealplanner.png")}
          />
          <View className="w-full border-t border-gray-500 mx-5 mt-8 mb-8" />
          <CustomDropdown
            options={dropdownOptions}
            placeholder="Select Preferred Role"
          />
          <Text className="text-white w-4/5 ml-2 font-light text-2xl mt-6 mb-2">
            Motivation for applying
          </Text>
          <CustomTextInput
            setText={setMotivation}
            text={motivation}
            height={"h-36"}
            padding={"pb-20"}
            maxLength={200}
            placeholder={""}
            includeCounter={true}
          />
          <Text className="text-white w-4/5 ml-2 font-light text-2xl mt-2 mb-2">
            Relevant Skills / Experience
          </Text>
          <CustomTextInput
            setText={setExperience}
            text={experience}
            height={"h-36"}
            maxLength={200}
            placeholder={""}
            includeCounter={true}
          />
        </View>
        <View className={"mx-auto w-full absolute bottom-12"}>
          <FilledButton
            filled={true}
            title={"Next"}
            onPress={() => router.push("/project/specialisedForm")}
          />
          <Progress filledIndex={0} length={2} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default GeneralFormPage;
