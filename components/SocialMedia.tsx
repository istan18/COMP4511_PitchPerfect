import { Text, View } from "react-native";
import Button from "./Button";

export default function SocialMediaLogin() {
  return (
    <View className="w-[100%] items-center">
      <Text className="text-xl color-white py-4 text-center" >---------   Or continue with   ---------</Text>
      <Button
        title="Google" 
        route="/tabs/home" 
        filled={false}
        icon={require('../assets/images/google.png')}
      />
      <Button
        title="LinkedIn" 
        route="/tabs/home" 
        filled={false}
        icon={require('../assets/images/linkedin.png')}
      />
      <Button
        title="GitHub" 
        route="/tabs/home" 
        filled={false}
        icon={require('../assets/images/github.png')}
      />
      <View className="h-40 w-full"/>
    </View>
  );
}
