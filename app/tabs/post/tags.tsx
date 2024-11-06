import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import CustomTextInput from "@/components/CustomTextInput";

import FilledButton from "@/components/FilledButton";
import { router } from "expo-router";
import Progress from "@/components/Progress";

const Tags = () => {
  const [tags, setTags] = useState([]);
  const [customTag, setCustomTag] = useState("");
  return (
    <SafeAreaView className={"flex-1 bg-background"}>
      <Text className={"mt-12 text-center mx-auto text-5xl mb-12 text-white"}>
        Add Tags
      </Text>
      <View className={"items-center flex flex-col gap-y-6"}>
        <CustomTextInput
          setText={setCustomTag}
          text={customTag}
          placeholder={"Add your own"}
          maxLength={50}
          includeCounter={true}
        />
        <FilledButton
          filled={true}
          title={"Next"}
          onPress={() => router.push("/tabs/post/edit")}
        />
        <Progress filledIndex={1} length={3} />
      </View>
    </SafeAreaView>
  );
};

export default Tags;
