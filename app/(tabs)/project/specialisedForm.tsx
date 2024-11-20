import React from "react";
import { Image, SafeAreaView, Text, View, ScrollView } from "react-native";
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
    <SafeAreaView className="flex-1 bg-background">
      <ProjectHeader projectName="Application Form" />
      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1,  paddingBottom: 120, alignItems: 'center' }}
        showsVerticalScrollIndicator={false}
      >
        <View className="w-[85%] flex-1 mt-8 items-center">
          <ApplicationProjectCard
            projectName="Inside the Box"
            lead="Jenny Liu"
            dateCreated="23/07/2024"
            projectIcon={require("@/assets/images/woman.jpg")}
          />
          <View className="w-full border-t border-gray-500 mx-5 mt-8 mb-8" />
          <CustomDropdown
            options={dropdownOptionsAvailibility}
            placeholder="Availability"
            otherStyles={{ width: "100%" }}
          />
          <View className="w-full py-2" />
          <CustomDropdown
            options={dropdownOptionsProficiency}
            placeholder="Proficiency in JavaScript"
            otherStyles={{ width: "100%" }}
          />
          <View className="w-full py-2" />
          <Text className="text-white text-left w-full mx-auto  font-light text-2xl mt-2 mb-2">
            JavaScript Experience
          </Text>
          <View className="w-full py-1" />
          <RadioGroup options={radioOptions} multiple={true} />
          <View className="w-full py-2" />
          <Text className="text-white text-2xl mt-4 mb-1">
            <Text className="font-bold">Resume: </Text>
            <Text className="font-light">Existing_Resume_123.pdf</Text>
          </Text>

          <View className="mt-3 flex-row justify-between gap-2">
            <View className="flex-1">
              <View className="flex-1 flex-row border border-white rounded-full p-3 items-center justify-center">
                <Text className="text-white mr-2">Upload Resume</Text>
                <Image
                  source={require("@/assets/images/uploadResume.png")}
                  style={{ width: 30, height: 24 }}
                />
              </View>
            </View>
            <View className="flex-1">
              <View className="flex-row border border-white rounded-full p-3 items-center justify-center">
                <Text className="text-white mr-2">Link LinkedIn</Text>
                <Image
                  source={require("@/assets/images/Linkedln.png")}
                  style={{ width: 30, height: 24 }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View className={"mx-auto w-full absolute bottom-12"}>
        <FilledButton
          filled={true}
          title={"Next"}
          onPress={() => router.replace("/project/confirmation")}
        />
        <Progress filledIndex={1} length={2} />
      </View>
    </SafeAreaView>
  );
};

export default SpecialisedFormPage;
