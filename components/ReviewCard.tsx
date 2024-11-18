import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

interface ReviewCardProps {
  name: string;
  avatar: ImageSourcePropType;
  timestamp: string;
  stars: number;
  title: string;
  reviewText: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  avatar,
  timestamp,
  stars,
  title,
  reviewText,
}) => {
  return (
    <View className="w-9/10 mt-8 mb-4">
      <View className="flex flex-row w-full items-center">
        <Image source={avatar} className="w-20 h-20 rounded-full" />
        <View className="ml-4 flex flex-col">
          <Text className="text-left text-white text-2xl">{name}</Text>
          <View className="flex flex-row gap-x-1 mt-1 items-center">
            {[...Array(stars)].map((_, index) => (
              <Entypo key={index} name="star" size={24} color="#FFD700" />
            ))}
            <Text className="text-left text-gray-400 text-lg ml-2">
              {timestamp}
            </Text>
          </View>
        </View>
      </View>
      <View className={"mt-2"}>
        <Text className="text-gray-500 text-lg">{title}</Text>
        <Text className="text-white text-xl">{reviewText}</Text>
      </View>
    </View>
  );
};

export default ReviewCard;
