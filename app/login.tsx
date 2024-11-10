import {
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

export default function Login() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-[#171F20]">
        <SafeAreaView className="w-full items-center">
          <Text className="text-4xl text-white mt-20">Login</Text>
          <TextInput
            placeholder="Email"
            className="w-[80%] color-white border border-gray-400 rounded-2xl p-4 mt-8 mb-4 text-xl"
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            className="w-[80%] color-white border border-gray-400 rounded-2xl p-4 mb-8 text-xl"
          />
          <FilledButton
            title="Log in"
            onPress={() => router.replace("/home")}
          />

          <Text className="text-white text-base underline my-2">
            Forgot password?
          </Text>
          <Link
            href="/register"
            className="text-white text-base underline mb-4"
          >
            Create an account
          </Link>

          <SocialMediaLogin />
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}
