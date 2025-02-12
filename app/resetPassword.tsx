import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import BackButton from "@/components/BackButton";
import { Ionicons } from "@expo/vector-icons";
import PasswordInput from "@/components/PasswordInput";
import FilledButton from "@/components/FilledButton";
import { router } from "expo-router";
import ErrorMessage from "@/components/ErrorMessage";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleUpdate = () => {
    setError("");
    if (!password) {
      setError("Enter a new password");
    } else if (password !== confirmPassword) {
      setError("Passwords must match");
    } else {
      router.replace("/confirmation");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-background">
        <SafeAreaView className="flex-1 items-center w-full">
          <BackButton />

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="w-full flex-1"
          >
            <ScrollView contentContainerClassName="w-full items-center mb-4">
              <Ionicons
                name="lock-open-outline"
                size={160}
                color="white"
                className="mt-20"
              />

              <Text className="text-4xl text-white mt-20 mb-8">
                Reset password
              </Text>
              <PasswordInput
                placeholder="New password"
                value={password}
                setPassword={setPassword}
                otherStyles="w-[85%]"
              />
              <PasswordInput
                placeholder="Confirm password"
                value={confirmPassword}
                setPassword={setConfirmPassword}
                otherStyles="w-[85%]"
              />
            </ScrollView>
          </KeyboardAvoidingView>

          <View className="absolute bottom-20 w-full items-center">
            {error && <ErrorMessage error={error} />}
            <FilledButton title="Update" onPress={handleUpdate} />
          </View>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ResetPassword;
