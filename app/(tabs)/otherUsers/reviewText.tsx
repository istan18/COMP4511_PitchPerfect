import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import ProfileHeader from "@/components/ProfileHeader";
import FilledButton from "@/components/FilledButton";
import Progress from "@/components/Progress";
import { useRouter } from "expo-router";
import Checkbox from "@/components/Checkbox";
import CustomTextInput from "@/components/CustomTextInput";
import Header from "@/components/Header";

const ReviewTextPage = () => {
  const router = useRouter();
  const [recommendation, setRecommendation] = useState(
    "Amazing to work with, very detail orientated."
  );
  const [comment, setComment] = useState("You should try learning more Figma.");

  const handleSubmit = () => {
    setRecommendation("");
    setComment("");
    router.push("/otherUsers/confirmation");
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <Header projectName="Leave Review" />
      <View className="flex-1 items-center">
        <ProfileHeader
          name="Jenny Liu"
          degree="B. Commerce"
          university="USyd"
          imageSource={require("@/assets/images/woman.jpg")}
          connections="500+ connections"
          otherStyles="mt-6"
        />
        <View className="w-full border-t border-gray-500 m-5" />
        <Checkbox label={"Submit Review Anonymously"} />
        <Text className="text-white font-light text-2xl mt-2 mb-2">
          Recommendation
        </Text>
        <CustomTextInput
          setText={setRecommendation}
          text={recommendation}
          height={"h-32"}
          padding={"pb-12"}
          maxLength={150}
          placeholder={""}
          includeCounter={true}
        />
        <Text className="text-white font-light text-2xl mt-2 mb-2">
          Comment
        </Text>
        <CustomTextInput
          setText={setComment}
          text={comment}
          height={"h-32"}
          padding={"pb-16"}
          maxLength={150}
          placeholder={""}
          includeCounter={true}
        />
      </View>
      <View className={"mx-auto w-full absolute bottom-12"}>
        <FilledButton
          filled={true}
          title={"Submit Review"}
          onPress={handleSubmit}
        />
        <Progress filledIndex={1} length={2} />
      </View>
    </SafeAreaView>
  );
};

export default ReviewTextPage;
