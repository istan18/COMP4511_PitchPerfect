import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface CategoryProps {
  category: string;
  icon: React.ReactElement;
  isSelected: boolean;
  setIsSelected: () => void;
}

export default function Category({
  category,
  icon,
  isSelected,
  setIsSelected,
}: CategoryProps) {
  return (
    <TouchableOpacity className="flex-col items-center" onPress={setIsSelected}>
      <View
        className={`items-center justify-center rounded-2xl bg-gray-500 w-16 h-16 ${isSelected && "bg-tagBackground"}`}
      >
        {icon}
      </View>
      <Text className={`text-white text-lg ${isSelected && "font-bold"}`}>
        {category}
      </Text>
    </TouchableOpacity>
  );
}
