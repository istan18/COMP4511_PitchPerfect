import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import BackButton from "@/components/BackButton";
import FilledButton from "@/components/FilledButton";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import ErrorMessage from "@/components/ErrorMessage";

export default function forgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [resendConfirmation, setResendConfirmation] = useState("");

  const handleSend = () => {
    setError("");
    setResendConfirmation("");
    if (!email) {
      setError("Enter a valid email");
    } else {
      router.push("/resetPassword");
    }
  };

  const handleResend = () => {
    setError("");
    setResendConfirmation("Verification has been resent.");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-[#171F20]">
        <SafeAreaView className="flex-1 items-center">
          <BackButton />
          <Ionicons
            name="lock-open-outline"
            size={160}
            color="white"
            className="mt-20"
          />

          <Text className="text-4xl text-white mt-20">Forgot password?</Text>
          <Text className="w-[80%] text-xl text-white mt-4">
            Enter the email linked to your account.
          </Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            className="w-[80%] color-white border border-gray-400 rounded-2xl p-4 mt-8 mb-4 text-xl"
          />

          <View className="absolute bottom-20 w-full items-center">
            {error && <ErrorMessage error={error} />}
            {resendConfirmation && (
              <Text className="text-white text-base mb-2">
                {resendConfirmation}
              </Text>
            )}
            <FilledButton title="Send verification link" onPress={handleSend} />

            <TouchableOpacity onPress={handleResend}>
              <Text className="text-white text-lg underline my-2">
                Resend link
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}
