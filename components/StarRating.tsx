import React from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface StarRatingProps {
  maxStars?: number;
  rating: number;
  setRating: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
  maxStars = 5,
  rating,
  setRating,
}) => {
  return (
    <View className="flex-row">
      {Array.from({ length: maxStars }, (_, index) => (
        <TouchableOpacity key={index} onPress={() => setRating(index + 1)}>
          <FontAwesome
            name={index < rating ? "star" : "star-o"}
            size={32}
            color="white"
            style={{ marginHorizontal: 10 }}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default StarRating;
