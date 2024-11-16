import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

// Define the props for the JobCard component
interface JobCardProps {
  title: string;
  company?: string;
  duration: string;
  imageSource?: ImageSourcePropType;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  duration,
  imageSource,
}) => {
  return (
    <View className="w-full flex flex-row items-center ml-8 mb-4">
      <Image
        source={imageSource}
        className="w-20 h-20 rounded-xl bg-gray-500"
      />
      <View className="ml-4 flex flex-col justify-center">
        <Text className="text-white text-2xl text-left">
          {title} {company ? "⋅ " + company : null}
        </Text>
        <Text className="text-textGray text-lg text-left">{duration}</Text>
      </View>
    </View>
  );
};

export default JobCard;
