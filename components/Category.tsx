import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface CategoryProps {
  category: string;
  icon: React.ReactElement;
}

export default function Category({ category, icon }: CategoryProps) {
  return (
    <TouchableOpacity className="flex-col items-center">
      <View className="items-center justify-center rounded-2xl bg-gray-500 w-16 h-16">
        {icon}
      </View>
      <Text className="text-white text-lg">{category}</Text>
    </TouchableOpacity>
  );
}
