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
    <View className="mt-8 ml-8 mb-4">
      {/* User Info Section */}
      <View className="flex flex-row w-full">
        <Image source={avatar} className="w-20 h-20 rounded-full" />
        <View className="ml-4 flex flex-col">
          <Text className="text-left text-white text-3xl">{name}</Text>
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
        <Text className="text-gray-500 text-lg w-9/10">{title}</Text>
        <Text className="text-white text-xl w-9/10">{reviewText}</Text>
      </View>
    </View>
  );
};

export default ReviewCard;
