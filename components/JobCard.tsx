import React from "react";
import { Image, TouchableWithoutFeedback, ImageSourcePropType, TouchableOpacity, Text, View } from "react-native";
import { useState } from "react";
import ProjectOptions from "./ProjectOptions";
import { Ionicons } from "@expo/vector-icons";

interface JobCardProps {
  title: string;
  company?: string;
  duration: string;
  durationLength: string;
  imageSource?: ImageSourcePropType;
  manageIcon?: React.ReactElement;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  duration,
  durationLength,
  imageSource,
  manageIcon,
}) => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const options = [
		{ name: "Hide from profile", icon: <Ionicons name="eye-off-outline" size={20} color="white" className="p-4" /> },
	];

  return (
    <TouchableWithoutFeedback onPress={() => setIsOptionsVisible(!isOptionsVisible)}>
      <View className="w-full flex-row items-center gap-4 mb-4">
        <Image
          source={imageSource}
          className="w-20 h-20 rounded-xl bg-gray-500"
        />
        <View className="flex-1 flex-col justify-center">
          <View className="flex flex-row justify-between">
            <Text className="flex-1 text-white text-2xl text-left">
              {title} {company ? "⋅ " + company : null}
            </Text>
            <TouchableOpacity 
              onPress={() => setIsOptionsVisible(!isOptionsVisible)}
            >
              {manageIcon}
            </TouchableOpacity>
          </View>
        
          {isOptionsVisible && 
            <ProjectOptions 
              setIsVisible={() => setIsOptionsVisible(!isOptionsVisible)}
              options={options}
              otherStyles="w-[80%] top-0 absolute"
            />
          }

          <View className="flex-row justify-between">
            <Text className="text-textGray text-lg flex-1">{duration}</Text>
            <Text className="text-textGray text-lg">{durationLength}</Text>
          </View>

        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JobCard;
