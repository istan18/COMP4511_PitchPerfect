import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import FilledButton from "@/components/FilledButton";
import Progress from "@/components/Progress";
import { router } from "expo-router";
import React, { useState } from "react";
import ErrorMessage from "@/components/ErrorMessage";
import CustomTextInput from "@/components/CustomTextInput";

export default function Welcome() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  const handleNext = () => {
    setError("");
    if (!firstName || !lastName) {
      setError("First and last name are required");
    } else {
      router.push("/photo");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-background">
        <SafeAreaView className="w-full items-center">
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <ScrollView
              className="w-full"
              contentContainerClassName="items-center"
            >
              <Image
                source={require("../assets/images/logo.png")}
                className="w-40 h-40 mt-20"
              />
              <Text className="text-4xl text-white mt-8">Welcome!</Text>
              <Text className="text-2xl text-white mt-4 mb-12">
                Set up how other people see you.
              </Text>

              <CustomTextInput
                placeholder="First Name*"
                text={firstName}
                width={"w-96"}
                setText={setFirstName}
                marginBottom={"mb-2"}
              />
              <CustomTextInput
                width={"w-96"}
                placeholder="Last Name*"
                text={lastName}
                setText={setLastName}
                marginBottom={"mb-2"}
              />
              <CustomTextInput
                placeholder="Pronouns"
                width={"w-96"}
                marginBottom={"mb-2"}
              />
              <CustomTextInput width={"w-96"} placeholder="Location" />
            </ScrollView>
          </KeyboardAvoidingView>
          <View className={"mx-auto w-full absolute bottom-20"}>
            {error && <ErrorMessage error={error} />}
            <FilledButton
              filled={true}
              title={"Next"}
              otherStyles={"mb-4"}
              onPress={handleNext}
            />
            <Progress filledIndex={0} length={3} />
          </View>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}
