import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

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
  const router = useRouter();

  return (
    <View className="w-full self-center">
      <Text className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 px-2 text-xl font text-white bg-background z-10">
        {projectName}
      </Text>
      <View className="h-24 rounded-lg border border-white">
        <View className="flex-1 flex-row items-center p-4 justify-between">
          <View className="flex-1 items-start">
            <Text className="text-lg font-bold text-white">
              Lead: <Text className="font-normal">{lead}</Text>
            </Text>
            <Text className="text-lg font-bold text-white">
              Date Created: <Text className="font-normal">{dateCreated}</Text>
            </Text>
          </View>
          <View className="w-[1px] h-[80%] bg-white mx-4" />
          <TouchableOpacity onPress={() => router.push("/otherUsers/profile")}>
            <Image
              source={projectIcon}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                resizeMode: "cover",
              }}
              // className="ml-5 mr-5"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ApplicationProjectCard;
