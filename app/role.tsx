import {
  Keyboard,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import BackButton from "@/components/BackButton";
import FilledButton from "@/components/FilledButton";
import { Link, router } from "expo-router";
import Progress from "@/components/Progress";
import RadioGroup from "@/components/RadioGroup";
import CustomDropdown from "@/components/CustomDropdown";
import Checkbox from "@/components/Checkbox";
import CustomTextInput from "@/components/CustomTextInput";
import { useState } from "react";

export default function Role() {
  const [institution, setInstitution] = useState("");
  const radioOptions = [
    { label: "working on projects", value: "1" },
    { label: "investing/mentoring", value: "2" },
    { label: "just browsing/other", value: "3" },
  ];

  const dropdownOptions = [
    { label: "UNSW", value: "1" },
    { label: "USyd", value: "2" },
    { label: "UTS", value: "3" },
    { label: "UOW", value: "4" },
  ];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-background">
        <SafeAreaView className="flex-1 flex-col gap-4 items-center text-left w-full">
          <BackButton />
          <Text className="text-4xl text-white mt-20 mb-2">
            I'm interested in...
          </Text>
          <RadioGroup options={radioOptions} />
          <Text className="text-4xl text-white mt-4 mb-2">
            Add your education
          </Text>
          <CustomTextInput placeholder="Degree/Diploma/Other" />
          <CustomDropdown
            value={institution}
            setValue={setInstitution}
            placeholder="Institution"
            options={dropdownOptions}
          />
          <Checkbox label={"I am currently a student"} />
          <View className="absolute bottom-20 w-full items-center">
            <FilledButton
              title="Start browsing!"
              onPress={() => router.replace("/home")}
            />
            <Link
              href="/home"
              className="text-white text-xl underline mb-4 mt-2"
            >
              Skip
            </Link>
            <Progress filledIndex={2} length={3} />
          </View>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}
