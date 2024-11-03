import { Text, View, Image } from "react-native";
import Button from "@/components/Button";

export default function Index() {
  return (
    <View className="flex-1 items-center bg-[#171F20]">
      <Image
        source={require('../assets/images/logo.png')}
        className="w-40 h-40 mt-24"
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
      <Text className="text-xl color-white py-4 text-center" >---------   Or continue with   ---------</Text>
    </View>
  );
}
