import React from "react";
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

interface JobCardProps {
  title: string;
  company?: string;
  start: string;
  end: string;
  durationLength: string;
  imageSource?: ImageSourcePropType | null;
  manageIcon?: React.ReactElement;
  onPressManage?: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  start,
  end,
  durationLength,
  imageSource,
  manageIcon,
  onPressManage,
}) => {
  return (
    <View className="w-full flex-row items-center gap-4 mb-4">
      {imageSource && (
        <Image
          source={imageSource}
          className="w-20 h-20 rounded-xl bg-gray-500"
        />
      )}
      <View className="flex-1 flex-col justify-center">
        <View className="flex flex-row justify-between">
          <Text className="flex-1 text-white text-2xl text-left">
            {title} {company ? "⋅ " + company : null}
          </Text>

          {manageIcon && (
            <TouchableOpacity onPress={onPressManage} className="ml-2">
              {manageIcon}
            </TouchableOpacity>
          )}
        </View>

        <View className="flex-row justify-between">
          <Text className="text-textGray text-lg flex-1">
            {start} - {end}
          </Text>
          <Text className="text-textGray text-lg">{durationLength}</Text>
        </View>
      </View>
    </View>
  );
};

export default JobCard;
