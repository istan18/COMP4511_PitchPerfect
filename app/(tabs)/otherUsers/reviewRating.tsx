import React, { useState } from "react";
import { View, Text } from "react-native";
import Header from "@/components/Header";
import ProfileHeader from "@/components/ProfileHeader";
import CustomDropdown from "@/components/CustomDropdown";
import FilledButton from "@/components/FilledButton";
import Progress from "@/components/Progress";
import StarRating from "@/components/StarRating";
import { useRouter } from "expo-router";

const ReviewRatingPage = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const [communicationRating, setCommunicationRating] = useState(0);
  const [skillsRating, setSkillsRating] = useState(0);
  const [collaborationRating, setCollaborationRating] = useState(0);
  const [timelinessRating, setTimelinessRating] = useState(0);
  const dropdownOptions = [
    { label: "Inside the Box", value: "1" },
    { label: "Project 2", value: "2" },
    { label: "Project 3", value: "3" },
  ];
  const router = useRouter();

  const handleSubmit = () => {
    // Reset state
    setSelectedProject("");
    setCommunicationRating(0);
    setSkillsRating(0);
    setCollaborationRating(0);
    setTimelinessRating(0);

    // Navigate to the next page
    router.push("/(tabs)/otherUsers/reviewText");
  };

  return (
    <View className="flex-1 bg-[#171F20]">
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
        <CustomDropdown
          options={dropdownOptions}
          placeholder="Select Shared Project"
          value={selectedProject}
          setValue={setSelectedProject}
        />
        <View className="w-full border-t border-gray-500 m-5" />
        <Text className="text-white font-extralight text-2xl ml-8 mb-2 self-start">
          Skills / Expertise
        </Text>
        <StarRating rating={skillsRating} setRating={setSkillsRating} />
        <Text className="text-white font-extralight text-2xl ml-8 mb-2 mt-3 self-start">
          Communication
        </Text>
        <StarRating
          rating={communicationRating}
          setRating={setCommunicationRating}
        />
        <Text className="text-white font-extralight text-2xl ml-8 mb-2 mt-3 self-start">
          Collaboration / Teamwork
        </Text>
        <StarRating
          rating={collaborationRating}
          setRating={setCollaborationRating}
        />
        <Text className="text-white font-extralight text-2xl ml-8 mb-2 mt-3 self-start">
          Timeliness / Dependability
        </Text>
        <StarRating rating={timelinessRating} setRating={setTimelinessRating} />
      </View>
      <View className={"mx-auto w-full absolute bottom-2.5"}>
        <FilledButton filled={true} title={"Next"} onPress={handleSubmit} />
        <Progress filledIndex={0} length={2} />
      </View>
    </View>
  );
};

export default ReviewRatingPage;
