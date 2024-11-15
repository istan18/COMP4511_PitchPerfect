import React from "react";
import { View, Text, Pressable } from "react-native";

interface RadioButtonProps {
  label: string;
  selected: boolean;
  onPress: () => void;
}

export default function RadioButton({
  label,
  selected,
  onPress,
}: RadioButtonProps) {
  return (
    <Pressable onPress={onPress} className="w-full">
      <View
        className={`w-full flex-row items-center p-4 border ${selected ? "border-white" : "border-gray-400"} rounded-2xl`}
      >
        <View
          className={`w-5 h-5 mr-4 rounded-full border-2 ${selected ? "border-white" : "border-gray-400"} items-center justify-center`}
        >
          {selected && (
            <View
              className="w-5 h-5 rounded-full bg-white border-white"
              style={{ transform: [{ scale: 0.5 }] }}
            />
          )}
        </View>
        <Text
          className={`text-xl ${selected ? "text-white" : "text-gray-500"}`}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
}
