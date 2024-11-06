import { Text, View, TouchableWithoutFeedback, SafeAreaView, Keyboard, TextInput} from "react-native";
import FilledButton from "@/components/FilledButton";
import { Link, router } from "expo-router";
import SocialMediaLogin from "@/components/SocialMedia";

export default function Register() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-[#171F20]">
        <SafeAreaView className="w-full items-center">
          <Text className="text-4xl text-white mt-20">Sign up</Text>

          <TextInput 
            placeholder="Email"
            className="w-[80%] color-white border border-gray-400 rounded-2xl p-4 mt-8 mb-4 text-xl"
          />
          <TextInput 
            placeholder="Password"
            secureTextEntry={true}
            className="w-[80%] color-white border border-gray-400 rounded-2xl p-4 mb-4 text-xl"
          />
          <TextInput 
            placeholder="Confirm password"
            secureTextEntry={true}
            className="w-[80%] color-white border border-gray-400 rounded-2xl p-4 mb-8 text-xl"
          />

          <FilledButton title="Sign up" onPress={() => router.replace("/welcome")} />
          <Link href="/login" className="text-white text-base underline mt-2 mb-4">Already have an account? Log in</Link>
          
          <SocialMediaLogin />
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}
