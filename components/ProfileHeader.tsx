import React, { useState } from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FilledButton from "@/components/FilledButton";

interface ProfileHeaderProps {
  name: string;
  degree: string;
  university: string;
  imageSource: ImageSourcePropType;
  connections?: string;
  buttons?: {icon: React.ReactElement, onPress: () => void, title: string}[];
  otherStyles?: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  degree,
  university,
  imageSource,
  connections,
  buttons,
  otherStyles,
}) => {
  const [sentConnection, setSentConnection] = useState(false);
  return (
    <View className="items-center">
      <View className={`${otherStyles} mt-12 flex w-9/10 items-center justify-around flex-row gap-x-8`}>
        <Image source={imageSource} className="rounded-full h-40 w-40" />

        <View className="flex flex-col gap-y-2 mx-auto">
          <Text className="mr-auto text-left text-white text-3xl mb-2">{name}</Text>
          <Text className="mr-auto text-white text-xl font-thin text-left">
            {degree}
          </Text>

          <View className="flex flex-row items-center gap-x-4">
            <Text className="text-white text-xl text-left">
              {university}
            </Text>
            <View className="w-5 h-5 bg-lime-500 rounded-full">
              <AntDesign
                name={"check"}
                color={"white"}
                size={12}
                className={"ml-auto mb-auto mr-[0.2rem] mt-[0.2rem]"}
              />
            </View>
          </View>
          
          {connections && (
            <TouchableOpacity className="mr-auto">
              <Text className="underline text-gray-400 text-md text-left mt-2">
                {connections}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View className={"flex flex-row justify-between items-center w-9/10 mt-4 gap-x-4"}>
        {buttons && (buttons.map((button, index) => (
          <FilledButton
            key={index}
            onPress={button.onPress}
            otherStyles="flex-1"
            textStyle="text-xl"
            title={button.title}
            icon={button.icon}
          />
        )))}
      </View>
    </View>
  );
};

export default ProfileHeader;
