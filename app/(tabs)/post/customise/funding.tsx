import React, { useState } from "react";
import {
  Keyboard,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import CustomDropdown from "@/components/CustomDropdown";
import CustomTextInput from "@/components/CustomTextInput";
import FilledButton from "@/components/FilledButton";
import BackButton from "@/components/BackButton";
import { router } from "expo-router";
import Slider from "@react-native-community/slider";

const Funding = () => {
  const [requiredAmount, setRequiredAmount] = useState("");
  const [progress, setProgress] = useState<number>(0);
  const [fundingSource, setFundingSource] = useState("No Funding Required");
  const fundingOptions = [
    { label: "No Funding Required", value: "No Funding Required" },
    { label: "Self-Funded", value: "Self-Funded" },
    { label: "Grants", value: "Grants" },
    { label: "Crowdfunding", value: "Crowdfunding" },
    { label: "External Investors", value: "External Investors" },
  ];

  const handleValueChange = (value: number) => {
    const roundedValue = Math.round(value / 5) * 5;
    setProgress(roundedValue);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className={"flex-1 bg-background p-4"}>
        <BackButton />
        <Text className={"text-4xl text-center mt-20 mb-16 text-white"}>
          Funding
        </Text>
        <View className={"w-9/10 items-center mx-auto flex flex-col gap-y-4"}>
          <CustomDropdown
            value={fundingSource}
            setValue={setFundingSource}
            options={fundingOptions}
            placeholder="Select funding source"
          />
          <View />
          <Text
            className={`${fundingSource !== "No Funding Required" ? "text-white" : "text-disabledGray"} text-center text-2xl mx-auto w-4/5`}
          >
            Funding amount required
          </Text>
          <CustomTextInput
            placeholder="$"
            padding={"pb-2"}
            text={requiredAmount}
            setText={setRequiredAmount}
            editable={fundingSource !== "No Funding Required"}
            keyboardType="numeric"
          />
          <Text
            className={`text-3xl ${fundingSource === "No Funding Required" ? "text-disabledGray" : "text-white"} mb-4 mt-8`}
          >
            {fundingSource === "No Funding Required"
              ? "No Funding Required"
              : `Funding progress: ${progress}%`}
          </Text>
          <View className="relative w-full">
            <Slider
              style={{ width: "100%", height: 20 }}
              minimumValue={0}
              maximumValue={100}
              step={5}
              minimumTrackTintColor="#3A5B5B"
              maximumTrackTintColor="#d3d3d3"
              thumbTintColor="#3A5B5B"
              value={progress}
              onValueChange={handleValueChange}
              disabled={fundingSource === "No Funding Required"}
            />
          </View>
        </View>

        <View
          className={"absolute bottom-12 left-12  w-4/5 mx-auto rounded-2xl"}
        >
          <FilledButton
            otherStyles="w-3/4"
            title="Save"
            onPress={() => router.back()}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Funding;
