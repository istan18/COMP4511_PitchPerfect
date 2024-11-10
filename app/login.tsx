import React, { useState } from "react";
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
import SocialMediaLogin from "@/components/SocialMedia";
import { Link, router } from "expo-router";
import PasswordInput from "@/components/PasswordInput";

import ErrorMessage from "@/components/ErrorMessage";
import BackButton from "@/components/BackButton";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");
    if (!email || !password) {
      setError("Email and password are required");
    } else {
      router.replace("/home");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-[#171F20]">
        <SafeAreaView className="w-full items-center">
          <BackButton />
          <Image
            source={require("../assets/images/logo.png")}
            className="w-40 h-40 mt-20"
          />
          <Text className="text-4xl text-white mt-8">Login</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            className="w-[80%] color-white border border-gray-400 rounded-2xl p-4 mt-8 mb-4 text-xl"
          />
          <PasswordInput
            placeholder="Password"
            value={password}
            setPassword={setPassword}
          />
          {error && <ErrorMessage error={error} />}

          <FilledButton title="Log in" onPress={handleLogin} />

          <Link
            href="/forgotPassword"
            className="text-white text-lg underline my-2"
          >
            Forgot password?
          </Link>
          <Link href="/register" className="text-white text-lg underline mb-4">
            Create an account
          </Link>

          <SocialMediaLogin />
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}
