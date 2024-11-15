import React from "react";
import { Text, View } from "react-native";

interface MessageProps {
  message: string;
  time: string;
  isSender: boolean;
}

const Message = ({ message, time, isSender }: MessageProps) => {
  return (
    <View className={`max-w-80 ${isSender ? "mr-4 ml-auto" : "ml-4 mr-auto"}`}>
      <Text
        className={`${isSender ? "bg-chat" : "bg-chatGray"} rounded-2xl p-4 text-white text-xl`}
      >
        {message}
      </Text>
      <Text
        className={`text-textGray mt-2 ${isSender ? "ml-auto" : "mr-auto"}`}
      >
        {time}
      </Text>
    </View>
  );
};

export default Message;
