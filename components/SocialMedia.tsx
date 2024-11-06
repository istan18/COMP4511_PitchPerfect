import { Text, View } from "react-native";
import FilledButton from "./FilledButton";
import { router } from "expo-router";

export default function SocialMediaLogin() {
  return (
    <View className="w-[100%] items-center">
      <Text className="text-xl color-white py-4 text-center" >---------   Or continue with   ---------</Text>
      <FilledButton
        title="Google" 
        onPress={() => router.replace("/tabs/home")}
        filled={false}
        icon={require('../assets/images/google.png')}
      />
      <FilledButton
        title="LinkedIn" 
        onPress={() => router.replace("/tabs/home")}
        filled={false}
        icon={require('../assets/images/linkedin.png')}
      />
      <FilledButton
        title="GitHub" 
        onPress={() => router.replace("/tabs/home")}
        filled={false}
        icon={require('../assets/images/github.png')}
      />
      <View className="h-40 w-full"/>
    </View>
  );
}
