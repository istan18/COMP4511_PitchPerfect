import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";

interface StarBarProps {
  stars: number;
  count: number;
  totalReviews: number;
}

const StarBar = ({ stars, count, totalReviews }: StarBarProps) => {
  const widthPercentage = (count / totalReviews) * 100;

  return (
    <View className="flex flex-row items-center ml-4">
      <Text className={"text-3xl w-6 text-center text-white mr-1"}>
        {stars}
      </Text>
      <FontAwesome name="star" className={"mr-2"} size={20} color="#FFD700" />
      <View className="w-80 h-3 bg-gray-200 rounded-full overflow-hidden mx-2">
        <View
          style={{ width: `${widthPercentage}%` }}
          className="h-full bg-barGreen"
        />
      </View>
      <Text className="text-white w-5 text-left ml-2 text-sm">{count}</Text>
    </View>
  );
};

export default StarBar;
