import { Text, View } from "react-native";
import React from "react";

interface TagProps {
  tag: string;
  tagStyle?: string;
  textSize?: string;
}

const Tag = ({ tag, tagStyle, textSize = "text-sm" }: TagProps) => {
  return (
    <View className={`bg-tagBackground px-3 py-1 ${tagStyle} rounded-2xl`}>
      <Text className={`text-tagBackgroundSelected ${textSize}`}>{tag}</Text>
    </View>
  );
};

export default Tag;
