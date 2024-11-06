import { Image, Text, View } from "react-native";
import FilledButton from "@/components/FilledButton";
import "../global.css";
import { router } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center bg-background">
      <Image
        source={require("../assets/images/logo.png")}
        className="w-40 h-40 mt-24"
      />
      <Image
        source={require("../assets/images/title.png")}
        className="mt-8 w-[80%]"
        resizeMode="contain"
      />
      <Text className="text-2xl w-[80%] color-white py-4">
        Insert very cool slogan here about pitching projects
      </Text>
      <FilledButton title="Log in" onPress={() => router.replace("/login")} />
      <FilledButton
        title="Sign up with email"
        onPress={() => router.replace("/register")}
        filled={false}
        icon={require("../assets/images/email.png")}
      />
      <Text className="text-xl color-white py-4 text-center">
        --------- Or continue with ---------
      </Text>
    </View>
  );
}
