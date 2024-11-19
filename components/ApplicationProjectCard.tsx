import React from "react";
import { View, Text, Image } from "react-native";

interface ApplicationProjectCardProps {
  projectName: string;
  lead: string;
  dateCreated: string;
  projectIcon: any;
}

const ApplicationProjectCard: React.FC<ApplicationProjectCardProps> = ({
  projectName,
  lead,
  dateCreated,
  projectIcon,
}) => {
  return (
    <View className="w-[90%] self-center mb-8">
      <Text className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 px-2 text-xl font text-white bg-[#171F20] z-10">
        {projectName}
      </Text>
      <View className="h-32 rounded-lg border border-white p-4">
        <View className="flex-1 flex-row items-center">
          <View className="flex-1 items-start">
            <Text className="text-lg font-bold text-white mb-2">
              Lead: <Text className="font-normal">{lead}</Text>
            </Text>
            <Text className="text-lg font-bold text-white">
              Date Created: <Text className="font-normal">{dateCreated}</Text>
            </Text>
          </View>
          <View className="w-[1px] h-[80%] bg-white mx-4" />
          <Image
            source={projectIcon}
            className="w-[20%] h-[85%] ml-5 mr-5 rounded-3xl"
          />
        </View>
      </View>
    </View>
  );
};

export default ApplicationProjectCard;
