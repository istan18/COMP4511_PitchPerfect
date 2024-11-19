import BackButton from "@/components/BackButton";
import {
  Alert,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import FilledButton from "@/components/FilledButton";
import { router } from "expo-router";
import BottomModal from "@/components/BottomModal";
import FullWidthButton from "@/components/FullWidthButton";
import CustomDropdown from "@/components/CustomDropdown";

const profileFields = [
  {
    placeholder: "Name",
    icon: <FontAwesome name="id-card" size={24} color="white" />,
    value: "Alice Sharma",
  },
  {
    placeholder: "Pronouns",
    icon: <Feather name="user" size={24} color="white" />,
    value: "she/they",
  },
  {
    placeholder: "Location",
    icon: <Ionicons name="location" size={24} color="white" />,
  },
  {
    placeholder: "Degree/Diploma/Other",
    icon: <FontAwesome name="graduation-cap" size={24} color="white" />,
    value: "B. Computer Science",
  },
];

const dropdownOptions = [
  { label: "UNSW", value: "1" },
  { label: "USyd", value: "2" },
  { label: "UTS", value: "3" },
  { label: "UOW", value: "4" },
];

export default function EditProfile() {
  const defaultProfile = require("@/assets/images/defaultProfile.jpg");
  const [image, setImage] = useState(
    require("@/assets/images/aliceProfile.jpg")
  );
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage({ uri: result.assets[0].uri });
    }

    setAreOptionsVisible(false);
  };

  const clearImage = async () => {
    Alert.alert("Clear image", "Are you sure you want to clear this image?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Clear",
        style: "destructive",
        onPress: () => {
          setImage(defaultProfile);
          setAreOptionsVisible(false);
        },
      },
    ]);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-background">
        <SafeAreaView className="w-full items-center">
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <BackButton marginTop="mt-4" />
            <ScrollView contentContainerClassName="items-center">
              <Text className="text-4xl text-white mt-20">Edit Profile</Text>

              <TouchableOpacity
                onPress={() => setAreOptionsVisible(!areOptionsVisible)}
                className="w-40 h-40 my-8 rounded-full overflow-hidden bg-gray-800 border-2 border-dashed border-gray-300 items-center justify-center"
              >
                <ImageBackground
                  source={image}
                  className="w-40 h-40"
                  resizeMode="cover"
                >
                  <View
                    className="flex-1 items-center justify-center"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                  >
                    <Feather name="edit-2" size={30} color="white" />
                  </View>
                </ImageBackground>
              </TouchableOpacity>

              {profileFields.map((field, index) => (
                <View className="w-full" key={index}>
                  <FullWidthButton
                    leftIcon={field.icon}
                    text={
                      <View className={"w-80"}>
                        <TextInput
                          value={field.value}
                          placeholder={field.placeholder}
                          className="flex-1 mx-2 p-2 text-white text-xl"
                        />
                      </View>
                    }
                    marginLeft="ml-8"
                    pressable={false}
                  />
                </View>
              ))}

              <View className="w-full">
                <FullWidthButton
                  leftIcon={
                    <FontAwesome name={"university"} size={24} color="white" />
                  }
                  text={
                    <View className="w-full ml-6">
                      <CustomDropdown
                        value="1"
                        options={dropdownOptions}
                        otherStyles={{ borderWidth: 0 }}
                      />
                    </View>
                  }
                  marginLeft={"ml-8"}
                  pressable={false}
                  hasBottomBorder={true}
                />
              </View>

              <View className="w-full my-8">
                <FilledButton title="Save" onPress={() => router.back()} />
                <FilledButton
                  title="Cancel"
                  filled={false}
                  onPress={() => router.back()}
                />
              </View>

              {areOptionsVisible && (
                <BottomModal
                  title="Edit image"
                  isVisible={areOptionsVisible}
                  close={() => setAreOptionsVisible(false)}
                  contents={
                    <View className="flex flex-col items-center">
                      <FilledButton
                        title="Select Image"
                        onPress={selectImage}
                        icon={<Feather name="upload" size={18} color="black" />}
                        otherStyles="w-[90%]"
                        buttonStyle="p-2"
                      />
                      <FilledButton
                        title="Clear Image"
                        filled={false}
                        onPress={clearImage}
                        icon={
                          <Feather name="trash-2" size={18} color="white" />
                        }
                        otherStyles="w-[90%] mb-8"
                        buttonStyle="p-2"
                      />
                    </View>
                  }
                />
              )}
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}
