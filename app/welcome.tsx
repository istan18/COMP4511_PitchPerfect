import { SafeAreaView, Text, View, Image, TextInput, Platform, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView } from "react-native";
import FilledButton from "@/components/FilledButton";
import Progress from "@/components/Progress";
import { router } from "expo-router";
import { useState } from "react";
import ErrorMessage from "@/components/ErrorMessage";

export default function Welcome() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');

  const handleNext = () => {
    setError('');
    if (!firstName || !lastName) {
      setError('First and last name are required');
    } else {
      router.push("/photo");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-[#171F20]">
        <SafeAreaView className="w-full items-center">
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView contentContainerClassName="items-center">
              <Image
                source={require('../assets/images/logo.png')}
                className="w-40 h-40 mt-20"
              />
              <Text className="text-4xl text-white mt-8">Welcome!</Text>
              <Text className="text-2xl text-white mt-4">Set up how other people see you.</Text>
            
              <TextInput 
                placeholder="First Name*"
                value={firstName}
                onChangeText={setFirstName}
                className="w-full color-white border border-gray-400 rounded-2xl p-4 mt-8 mb-4 text-xl"
              />
              <TextInput 
                placeholder="Last Name*"
                value={lastName}
                onChangeText={setLastName}
                className="w-full color-white border border-gray-400 rounded-2xl p-4 mb-4 text-xl"
              />
              <TextInput 
                placeholder="Pronouns"
                className="w-full color-white border border-gray-400 rounded-2xl p-4 mb-4 text-xl"
              />
              <TextInput 
                placeholder="Location"
                className="w-full color-white border border-gray-400 rounded-2xl p-4 mb-4 text-xl"
              />
            </ScrollView>
          </KeyboardAvoidingView>

          <View className="absolute bottom-20 w-full items-center">
            {error && <ErrorMessage error={error}/>} 
            <FilledButton title="Next" onPress={handleNext} />
            <Progress filledIndex={0} length={3} />
          </View>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}