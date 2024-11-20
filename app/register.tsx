import {
  Image,
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import FilledButton from "@/components/FilledButton";
import { Link, router } from "expo-router";
import SocialMediaLogin from "@/components/SocialMedia";
import PasswordInput from "@/components/PasswordInput";
import React, { useState } from "react";
import ErrorMessage from "@/components/ErrorMessage";
import BackButton from "@/components/BackButton";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = () => {
    setError("");
    if (!email || !password) {
      setError("Email and password are required");
    } else if (password !== confirmPassword) {
      setError("Passwords must match");
    } else {
      router.replace("/welcome");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-background">
        <SafeAreaView className="flex-1 w-full items-center">
          <BackButton />
          <Image
            source={require("../assets/images/logo.png")}
            className="w-40 h-40 mt-20"
          />
          <Text className="text-4xl text-white mt-4">Sign up</Text>

          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            className="w-[85%] color-white border border-gray-400 rounded-2xl p-4 mt-8 mb-4 text-xl"
          />
          <PasswordInput
            placeholder="Password"
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

          {error && <ErrorMessage error={error} />}
          <FilledButton title="Sign up" onPress={handleSignUp} />
          <Link
            href="/login"
            className="text-white text-lg underline mt-2 mb-4"
          >
            Already have an account? Log in
          </Link>
          <SocialMediaLogin />
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}
