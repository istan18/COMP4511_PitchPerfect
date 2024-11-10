import {
  Keyboard,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import BackButton from "@/components/BackButton";
import FilledButton from "@/components/FilledButton";
import { Link, router } from "expo-router";
import Progress from "@/components/Progress";
import RadioGroup from "@/components/RadioGroup";
import CustomDropdown from "@/components/CustomDropdown";
import Checkbox from "@/components/Checkbox";

export default function Role() {
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
    <Pressable onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-[#171F20]">
        <SafeAreaView className="flex-1 flex-col gap-4 items-center text-left w-full">
          <BackButton />
          <Text className="text-4xl text-white mt-20">
            I'm interested in...
          </Text>
          <RadioGroup options={radioOptions} />

          <Text className="text-4xl text-white mt-4">Add your education</Text>
          <TextInput
            placeholder="Degree/Diploma/Other"
            placeholderTextColor="#6B7280"
            className="w-[80%] color-white border border-gray-400 rounded-2xl p-4 text-xl"
          />
          <CustomDropdown options={dropdownOptions} />
          <Checkbox label={"I am currently a student"} />

          <View className="absolute bottom-20 w-full items-center">
            <FilledButton
              title="Start browsing!"
              onPress={() => router.replace("/tabs/home")}
            />
            <Link
              href="/tabs/home"
              className="text-white text-lg underline mb-4 mt-2"
            >
              Skip
            </Link>
            <Progress filledIndex={2} length={3} />
          </View>
        </SafeAreaView>
      </View>
    </Pressable>
  );
}
