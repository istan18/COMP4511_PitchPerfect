import React from "react";
import { View } from "react-native";
import StarBar from "@/components/StarBar";

interface ReviewSummaryProps {
  totalReviews: number;
  reviews: { stars: number; count: number }[];
}

const ReviewSummary = ({ totalReviews, reviews }: ReviewSummaryProps) => {
  return (
    <React.Fragment>
      <View className="w-9/10 items-center flex flex-col gap-y-1">
        {reviews.map(({ stars, count }, index) => (
          <StarBar
            key={index}
            stars={stars}
            count={count}
            totalReviews={totalReviews}
          />
        ))}
      </View>
    </React.Fragment>
  );
};

export default ReviewSummary;
