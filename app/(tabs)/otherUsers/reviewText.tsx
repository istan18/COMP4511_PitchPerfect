import React, { useState } from "react";
import { View, Text } from "react-native";
import ProjectHeader from "@/app/(tabs)/project/projectHeader";
import ProfileHeader from "@/components/ProfileHeader";
import FilledButton from "@/components/FilledButton";
import Progress from "@/components/Progress";
import { useRouter } from "expo-router";
import Checkbox from "@/components/Checkbox";
import CustomTextInput from "@/components/CustomTextInput";

const ReviewTextPage = () => {
  const router = useRouter();
  const [recommendation, setRecommendation] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    setRecommendation("");
    setComment("");
    router.push("/(tabs)/otherUsers/confirmation");
  };

  return (
    <View className="flex-1 bg-[#171F20]">
      <ProjectHeader projectName="Leave Review" />
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
          padding={""}
          maxLength={150}
          placeholder={"Amazing to work with, very detail orientated."}
          includeCounter={true}
        />
        <Text className="text-white font-light text-2xl mt-2 mb-2">
          Comment
        </Text>
        <CustomTextInput
          setText={setComment}
          text={comment}
          height={"h-32"}
          padding={""}
          maxLength={150}
          placeholder={"Jenny, you should try learning more Figma"}
          includeCounter={true}
        />
      </View>
      <View className={"mx-auto w-full absolute bottom-2.5"}>
        <FilledButton
          filled={true}
          title={"Submit Review"}
          onPress={handleSubmit}
        />
        <Progress filledIndex={1} length={2} />
      </View>
    </View>
  );
};

export default ReviewTextPage;
