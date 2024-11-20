import React, { useState } from "react";
import {
  Keyboard,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ScrollView,
} from "react-native";
import CustomTextInput from "@/components/CustomTextInput";

import FilledButton from "@/components/FilledButton";
import { router } from "expo-router";
import Progress from "@/components/Progress";
import Grid from "@/components/Grid";
import { AntDesign } from "@expo/vector-icons";
import BackButton from "@/components/BackButton";

const Tags = () => {
  const maxTags = 10;
  const [tags, setTags] = useState([
    "Engineer",
    "Problem Solving",
    "AI",
    "Math",
    "Full-Time",
    "Creative Arts",
    "Design",
    "Robotics",
    "Science",
    "Animals",
    "Software",
    "Architecture",
    "C++",
    "Python",
    "Java",
    "Film",
    "Gaming",
    "UI/UX",
  ]);
  const [selectedTags, setSelectedTags] = useState([] as string[]);
  const [customTag, setCustomTag] = useState("");
  const addCustomTag = () => {
    if (customTag.trim()) {
      setTags([...tags, customTag.trim()]);
      setCustomTag("");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView className={"relative flex-1 bg-background"}>
        <BackButton />
        <Text className={"mt-20 text-center mx-auto text-4xl mb-12 text-white"}>
          Add Tags
        </Text>
        <ScrollView className={"flex-1"} contentContainerStyle={{paddingBottom: 250}} showsVerticalScrollIndicator={false}>
          <Grid
            setSelectedTags={setSelectedTags}
            selectedTags={selectedTags}
            tags={tags}
            maxTags={maxTags}
          />
        </ScrollView>
        <View className={"mx-auto w-full absolute bottom-12 bg-background"}>
          <CustomTextInput
            setText={setCustomTag}
            text={customTag}
            placeholder={"Add your own"}
            marginBottom={"mb-4"}
            rightIcon={
              <TouchableOpacity onPress={addCustomTag}>
                <AntDesign name="plus" color="#FFFFFF" size={32} />
              </TouchableOpacity>
            }
            children={
              <Text className={"ml-2 text-gray-400 mt-2 mr-auto"}>
                {maxTags - selectedTags.length} tags remaining
              </Text>
            }
          />
          <FilledButton
            filled={true}
            title={"Next"}
            onPress={() => router.push("/post/edit")}
          />
          <TouchableOpacity
            className="w-full mx-auto my-4"
            onPress={() => router.push("/post/edit")}
          >
            <Text className={"text-white mx-auto text-2xl underline"}>
              Skip
            </Text>
          </TouchableOpacity>
          <Progress filledIndex={1} length={3} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Tags;
