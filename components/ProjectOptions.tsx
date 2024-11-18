import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface ProjectOptionsProps {
  setIsVisible: () => void;
  options: { name: string; icon: React.ReactElement; onPress?: () => void }[];
  otherStyles?: string;
}

export default function ProjectOptions({
  setIsVisible,
  options,
  otherStyles,
}: ProjectOptionsProps) {
  return (
    <View
      className={`bg-tagBackground rounded-2xl w-1/2 shadow-xl absolute mt-8 right-0 z-40 ${otherStyles}`}
    >
      {options.map((option, index) => (
        <TouchableOpacity
          onPress={() => {
            setIsVisible();
            option.onPress && option.onPress();
          }}
          key={index}
        >
          <View className="flex-row items-center">
            {option.icon}

            <Text key={index} className="text-lg py-3 text-white">
              {option.name}
            </Text>
          </View>
          {index < options.length - 1 && (
            <View className="border-gray-500" style={{ borderWidth: 0.5 }} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}
