import React, { useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomTextInput from "@/components/CustomTextInput";
import Svg, { Rect } from "react-native-svg";
// @ts-ignore
import Upload from "@/assets/images/upload.png";
import * as ImagePicker from "expo-image-picker";
import FilledButton from "@/components/FilledButton";
import { router } from "expo-router";
import Progress from "@/components/Progress";

const Index = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } else {
      setImage("");
    }
  };
  const clearImage = async () => {
    Alert.alert("Clear image", "Are you sure you want to clear this image?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Clear",
        style: "destructive",
        onPress: () => setImage(""),
      },
    ]);
  };

  return (
    <SafeAreaView className={"flex-1 bg-background"}>
      <Text className={"mt-20 text-center mx-auto text-5xl mb-8 text-white"}>
        New Project
      </Text>
      <View className={"items-center flex flex-col gap-y-2"}>
        <CustomTextInput
          heading={"What is your project about?"}
          setText={setTitle}
          text={title}
          placeholder={"Title"}
          maxLength={50}
          includeCounter={true}
        />
        <CustomTextInput
          setText={setDescription}
          text={description}
          height={"h-36"}
          padding={"pb-20"}
          maxLength={200}
          placeholder={"Description"}
          includeCounter={true}
        />
        <View className={"mx-auto w-[360px] h-[290px]"}>
          {image ? (
            <TouchableOpacity
              className="w-[360px] h-[290px]"
              onPress={clearImage}
            >
              <Image
                className="w-full flex-1"
                source={{ uri: image }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={pickImage}>
              <Svg height="290" width="360">
                <Rect
                  x="10"
                  y="10"
                  width="340"
                  height="270"
                  stroke="white"
                  strokeWidth="2"
                  fill="transparent"
                  strokeDasharray="10,10"
                  rx={10}
                  ry={10}
                />
                <View
                  className={
                    "rounded-lg flex items-center justify-center h-full mx-auto"
                  }
                >
                  <View className="h-36 w-36">
                    <Image
                      resizeMode={"contain"}
                      className={"w-full flex-1"}
                      source={Upload}
                    />
                  </View>
                  <Text
                    className={
                      "text-center text-3xl text-white mt-4 justify-center"
                    }
                  >
                    Upload
                  </Text>
                </View>
              </Svg>
              <View
                className={
                  "absolute top-[10px] left-[10px] w-[340px] rounded-lg h-[270px] opacity-10 bg-white"
                }
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View className={"mx-auto w-full absolute bottom-12"}>
        <FilledButton
          filled={true}
          title={"Next"}
          onPress={() => router.push("/post/tags")}
        />
        <Progress filledIndex={0} length={3} />
      </View>
    </SafeAreaView>
  );
};

export default Index;
