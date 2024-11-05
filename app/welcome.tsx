import { SafeAreaView, Text, View, Image, TextInput, Platform, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView } from "react-native";
import Button from "@/components/Button";
import Dots from "@/components/Dots";

export default function Welcome() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-[#171F20]">
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <SafeAreaView className="w-full items-center">
            <ScrollView contentContainerClassName="items-center">
              <Image
                source={require('../assets/images/logo.png')}
                className="w-40 h-40 mt-20"
              />
              <Text className="text-4xl text-white mt-8">Welcome!</Text>
              <Text className="text-2xl text-white mt-4">Set up how other people see you.</Text>
            
              <TextInput 
                placeholder="First Name*"
                className="w-full color-white border border-gray-400 rounded-2xl p-4 mt-8 mb-4 text-xl"
              />
              <TextInput 
                placeholder="Last Name*"
                className="w-full color-white border border-gray-400 rounded-2xl p-4 mb-4 text-xl"
              />
              <TextInput 
                placeholder="Pronouns"
                className="w-full color-white border border-gray-400 rounded-2xl p-4 mb-4 text-xl"
              />
              <TextInput 
                placeholder="Location"
                className="w-full color-white border border-gray-400 rounded-2xl p-4 mb-8 text-xl"
              />
            </ScrollView>

            <Button title="Next" route="/photo" backAllowed={true} />
            <Dots currentIndex={0} totalNo={3} />
          </SafeAreaView>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}