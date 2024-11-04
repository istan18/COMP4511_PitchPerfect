import { Text, View, Image, ScrollView, SafeAreaView } from "react-native";
import Button from "@/components/Button";
import SocialMediaLogin from "@/components/SocialMedia";

export default function Index() {
  return (
    <View className="flex-1 bg-[#171F20]">
      <SafeAreaView>
        <ScrollView className="absolute" contentContainerClassName="items-center">
          <Image
            source={require('../assets/images/logo.png')}
            className="w-40 h-40 mt-20"
          />
          <Image
            source={require('../assets/images/title.png')}
            className="mt-8 w-[80%]"
            resizeMode="contain"
          />
          <Text className="text-2xl w-[80%] color-white py-4" >Insert very cool slogan here about pitching projects</Text>
          <Button title="Log in" route="/login" />
          <Button 
            title="Sign up with email" 
            route="/register" 
            filled={false}
            icon={require('../assets/images/email.png')}
          />
          <SocialMediaLogin />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
