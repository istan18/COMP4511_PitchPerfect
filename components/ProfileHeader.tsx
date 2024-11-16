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
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import IonIcons from "@expo/vector-icons/Ionicons";

interface ProfileHeaderProps {
  name: string;
  degree: string;
  university: string;
  imageSource: ImageSourcePropType;
  connections?: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  degree,
  university,
  imageSource,
  connections,
}) => {
  const [sentConnection, setSentConnection] = useState(false);
  return (
    <React.Fragment>
      <View className="mt-12 flex items-center flex-row">
        <Image source={imageSource} className="rounded-full ml-10 h-40 w-40" />
        <View className="ml-6 flex flex-col gap-y-2 items-center">
          <Text className="mr-auto text-left text-white text-4xl">{name}</Text>
          <Text className="mr-auto text-white text-xl font-thin text-left">
            {degree}
          </Text>
          <View className="flex flex-row items-center justify-center">
            <Text className="mr-auto text-white text-xl text-left">
              {university}
            </Text>
            <View className="ml-2 mt-1 w-5 h-5 bg-lime-500 rounded-full">
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
              <Text className="underline text-gray-500 text-md text-left">
                {connections}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View className={"flex w-9/10  mt-4 gap-x-4 mx-auto flex-row"}>
        <FilledButton
          onPress={() => router.push("/messages/individual")}
          width="w-52"
          title={"Message"}
          icon={
            <Feather
              name={"message-circle"}
              size={28}
              color={"black"}
              className={"mt-[0.3rem]"}
            />
          }
        />
        <FilledButton
          width="w-52"
          icon={
            sentConnection ? (
              <Feather
                name={"clock"}
                size={28}
                color="black"
                className={"mt-[0.2rem]"}
              />
            ) : (
              <IonIcons
                className={"mt-[0.2rem]"}
                name={"person-add-outline"}
                size={28}
                color={"black"}
              />
            )
          }
          onPress={() => setSentConnection(!sentConnection)}
          title={`${sentConnection ? "Pending" : "Connect"}`}
        />
      </View>
    </React.Fragment>
  );
};

export default ProfileHeader;
