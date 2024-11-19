import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

interface TagProps {
  tag: string;
  tagStyle?: string;
  textSize?: string;
  editing?: boolean;
  remove?: () => void;
}

const Tag = ({
  tag,
  tagStyle,
  textSize = "text-sm",
  editing = false,
  remove,
}: TagProps) => {
  return (
    <View
      className={`flex flex-row gap-2 items-center bg-tagBackground px-3 py-1 ${tagStyle} rounded-2xl`}
    >
      <Text className={`text-tagBackgroundSelected ${textSize}`}>{tag}</Text>
      {editing && (
        <TouchableOpacity onPress={remove}>
          <Feather name="x" size={20} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Tag;
