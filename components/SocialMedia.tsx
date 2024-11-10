import { Text, TouchableOpacity, Image, View } from "react-native";
import { router } from "expo-router";

export default function SocialMediaLogin() {
  return (
    <View className="w-[100%] items-center">
      <View className="flex-row items-center gap-4">
        <View className="flex-1 ml-12 border-t border-gray-400"></View>
        <Text className="text-xl text-gray-400 py-4 text-center" >OR</Text>
        <View className="flex-1 mr-12 border-t border-gray-400"></View>
      </View>
      
      <View className="flex-row justify-center gap-8 mt-2">
        <TouchableOpacity 
          className="flex-col items-center gap-2"
          onPress={() => router.replace("/tabs/home")}
        >
          <Image source={require('../assets/images/google.png')} className="w-12 h-12" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-col items-center gap-2"
          onPress={() => router.replace("/tabs/home")}
        >
          <Image source={require('../assets/images/linkedin.png')} className="w-12 h-12" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-col items-center gap-2"
          onPress={() => router.replace("/tabs/home")}
        >
          <Image source={require('../assets/images/github.png')} className="w-12 h-12" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
