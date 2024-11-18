import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import Checkbox from "@/components/Checkbox";
import CustomTextInput from "@/components/CustomTextInput";
import CustomDropdown from "@/components/CustomDropdown";
import BackButton from "@/components/BackButton";
import FilledButton from "@/components/FilledButton";
import { router } from "expo-router";

const Compensation = () => {
  const [payment, setPayment] = useState<number>();
  const [enabled, setEnabled] = useState<boolean>(false);
  const [timePeriod, setTimePeriod] = useState<string>("");

  const toggle = () => {
    setEnabled((prev) => !prev);
  };

  return (
    <SafeAreaView className={"flex-1 bg-background"}>
      <BackButton />
      <Text className={"mt-20 text-center mx-auto text-4xl mb-20 text-white"}>
        Compensation
      </Text>
      <View className={"mx-auto w-4/5 mb-8"}>
        <Checkbox
          label={"Work on this project is paid"}
          initiallyChecked={false}
          size={32}
          toggle={toggle}
          textSize={"text-3xl"}
        />
      </View>
      <View className={"w-9/10 items-center mx-auto flex flex-row"}>
        <CustomTextInput
          text={payment}
          setText={setPayment}
          width={"w-1/3"}
          keyboardType={"numeric"}
          placeholder={"$"}
          editable={enabled}
        />
        <Text
          className={`${enabled ? "text-white" : "text-textGray"} text-2xl text-center mx-auto `}
        >
          per
        </Text>
        <CustomDropdown
          width={"40%"}
          value={timePeriod}
          setValue={setTimePeriod}
          placeholder={"Time period"}
          options={[
            { label: "Hour", value: "hour" },
            { label: "Day", value: "day" },
            { label: "Week", value: "week" },
            { label: "Month", value: "month" },
            { label: "Year", value: "year" },
          ]}
          disable={!enabled}
        />
      </View>
      <View
        className={"absolute bottom-12 left-12   w-4/5 mx-auto rounded-2xl "}
      >
        <FilledButton
          otherStyles={"w-3/4"}
          title={"Save"}
          onPress={() => router.back()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Compensation;
