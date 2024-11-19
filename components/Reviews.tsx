import { Text, View } from "react-native";
import ReviewSummary from "@/components/ReviewSummary";
import ReviewCard from "@/components/ReviewCard";

interface ReviewsProps {
  reviewedPerson: string;
  reviewsList: string[];
}

const reviews = [
  { stars: 5, count: 15 },
  { stars: 4, count: 7 },
  { stars: 3, count: 3 },
  { stars: 2, count: 1 },
  { stars: 1, count: 1 },
];

const totalReviews = 27;

export default function Reviews({ reviewedPerson, reviewsList }: ReviewsProps) {
  return (
    <View className="w-full items-center">
      <View className="w-9/10">
        <View
          className={
            "flex flex-row items-center justify-between mt-8 mb-2 w-full"
          }
        >
          <Text className={"text-white text-3xl"}>Reviews</Text>

          <View className={"flex flex-col"}>
            <Text className="text-white text-4xl font-bold mr-0 ml-auto">
              4.5
            </Text>
            <Text className="text-gray-300 text-md mr-0 ml-auto">
              {totalReviews} reviews
            </Text>
          </View>
        </View>
      </View>

      <ReviewSummary totalReviews={totalReviews} reviews={reviews} />

      <View className={"w-full left-0 border-t-[6px] mt-8 border-black"} />

      <ReviewCard
        name="Christian Tolentino"
        avatar={require("@/assets/images/man.png")}
        timestamp="2 mins ago"
        stars={4}
        title={`Collaborated with ${reviewedPerson} on Inside the Box`}
        reviewText={reviewsList[0]}
      />
      <View
        className={"w-9/10 mx-auto border-t mt-8 border-gray-500 opacity-50"}
      />
      <ReviewCard
        name="Angela Shan"
        avatar={require("@/assets/images/woman.jpg")}
        timestamp="5 mins ago"
        stars={2}
        title={`Collaborated with ${reviewedPerson} on Inside the Box`}
        reviewText={reviewsList[1]}
      />
      <View
        className={"w-9/10 mx-auto border-t mt-8 border-gray-500 opacity-50"}
      />
    </View>
  );
}
