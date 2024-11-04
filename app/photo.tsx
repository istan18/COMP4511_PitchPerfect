import { View, Text, Image, SafeAreaView } from "react-native";

export default function Photo() {
  return (
    <View className="flex-1 bg-[#171F20]">
      <SafeAreaView className="w-full items-center">
        <Image
          source={require('../assets/images/logo.png')}
          className="w-40 h-40 mt-20"
        />
        <Text className="text-4xl text-white mt-8">Add a photo</Text>
      </SafeAreaView>
    </View>
  );
}