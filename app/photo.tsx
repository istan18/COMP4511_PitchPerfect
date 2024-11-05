import { View, Text, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import Ionicons from "@expo/vector-icons/Ionicons";
import Button from "@/components/Button";
import Dots from "@/components/Dots";
import { Link } from "expo-router";
import BackButton from "@/components/BackButton";

export default function Photo() {
  const [image, setImage] = useState('');

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className="flex-1 bg-[#171F20]">
      <SafeAreaView className="flex-1 w-full items-center">
        <BackButton />
        <Image
          source={require('../assets/images/logo.png')}
          className="w-40 h-40 mt-20"
        />
        <Text className="text-4xl text-white mt-8">Add a photo</Text>

        <TouchableOpacity 
          onPress={selectImage} 
          className="w-64 h-64 mt-12 rounded-full overflow-hidden bg-gray-800 border-2 border-dashed border-gray-200 items-center justify-center"
        >
          {image ? (
            <Image source={{ uri: image }} className="w-full h-full" resizeMode="cover" />
          ) : (
            <>
              <Ionicons name="cloud-upload-outline" size={64} color="white" />
              <Text className="text-white text-xl mt-4">Upload photo</Text>
            </>
          )}
        </TouchableOpacity>
        
        <View className="absolute bottom-20 w-full items-center"> 
          <Button title="Next" route="/role" />
          <Link href="/photo" className="text-white text-lg underline mb-4 mt-2">Skip</Link>
          <Dots currentIndex={1} totalNo={3} />
        </View>
      </SafeAreaView>
    </View>
  );
}