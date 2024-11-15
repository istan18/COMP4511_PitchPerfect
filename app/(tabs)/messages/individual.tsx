import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import BackButton from "@/components/BackButton";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import Message from "@/components/Message";
import CustomTextInput from "@/components/CustomTextInput";
import { SimpleLineIcons } from "@expo/vector-icons";
import IonIcons from "@expo/vector-icons/Ionicons";

const messages = [
  {
    isSender: true,
    message:
      "Hi, how are you doing? I haven't seen you in so long, let's chat soon.",
    time: "Oct 10, 2024, 2:00 PM",
  },
  {
    isSender: false,
    message:
      "Hi, how are you doing? I haven't seen you in so long, let's chat soon.",
    time: "Oct 10, 2024, 2:02 PM",
  },
];

const Individual = () => {
  const [message, setMessage] = useState("");
  return (
    <TouchableWithoutFeedback
      className="bg-background"
      onPress={() => Keyboard.dismiss()}
    >
      <SafeAreaView className={"flex-1 bg-background"}>
        <BackButton />
        <View className="absolute top-20 z-20 w-full">
          <View className={"flex flex-row items-center ml-24"}>
            <TouchableOpacity
              onPress={() => router.replace("/account")}
              className={"flex flex-row items-center mr-20"}
            >
              <Image
                source={require("@/assets/images/woman.jpg")}
                className={"h-12 w-12 rounded-full"}
              />
              <Text className={"text-white text-center ml-4 pt-2  text-3xl"}>
                Jenny L.
              </Text>
            </TouchableOpacity>
            <View
              className={
                "mr-8 flex gap-x-4 flex-row justify-center items-center"
              }
            >
              <TouchableOpacity>
                <Feather name="phone" size={28} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name={"video"} size={28} color={"white"} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("@/assets/images/calendarNew.png")}
                  className={"h-7 w-7"}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View className={"w-full mt-3 border border-gray-700 opacity-50"} />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          className={"mt-24 mr-0"}
        >
          <View className={"flex flex-col gap-y-4"}>
            {messages.map((msg, index) => (
              <Message
                key={index}
                message={msg.message}
                time={msg.time}
                isSender={msg.isSender}
              />
            ))}
          </View>
        </ScrollView>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={24}
          className={"absolute z-20 bg-background bottom-16 w-full"}
        >
          <View className={"w-full mb-4 border border-gray-700 opacity-50"} />
          <View className={"flex bg-background flex-row"}>
            <CustomTextInput
              width={`${message ? "w-[75%]" : "w-[90%]"}`}
              leftIcon={
                <TouchableOpacity className={"z-30"}>
                  <SimpleLineIcons
                    name="microphone"
                    color={"white"}
                    size={28}
                  />
                </TouchableOpacity>
              }
              text={message}
              setText={setMessage}
              placeholder={"Message Jenny L."}
              rightIcon={
                !message ? (
                  <View className={"flex flex-row gap-x-4"}>
                    <TouchableOpacity>
                      <SimpleLineIcons
                        name={"emotsmile"}
                        size={32}
                        color="white"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <IonIcons
                        name={"image-outline"}
                        size={36}
                        color="white"
                      />
                    </TouchableOpacity>
                  </View>
                ) : null
              }
            />
            {message ? (
              <TouchableOpacity
                onPress={() => {
                  messages.push({
                    isSender: true,
                    message: message,
                    time: "Oct 10, 2024, 2:05 PM",
                  });
                  setMessage("");
                }}
                className={"h-16 w-16 bg-chatLight rounded-full mr-8"}
              >
                <Feather
                  className={"ml-[0.9rem] mt-[1rem]"}
                  name={"send"}
                  size={28}
                  color={"black"}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Individual;
