import {
  Image,
  ImageRequireSource,
  ImageURISource,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";
import React from "react";

interface ButtonSmallProps {
  icon?: ImageURISource | React.ReactElement | ImageRequireSource;
  filled?: boolean;
  title: string;
  push?: boolean;
  route?: string;
  textSize?: string;
  width?: string;
}

export default function ButtonSmall({
  icon,
  filled = true,
  push = false,
  title,
  textSize = "text-sm",
  route,
  width = "w-48",
}: ButtonSmallProps) {
  const isImageURISource = (
    source: any
  ): source is ImageURISource | ImageRequireSource => {
    return (
      (source && typeof source === "object" && source.uri) ||
      typeof source === "number"
    );
  };
  return (
    <View className={`flex py-2 ${width}`}>
      <TouchableOpacity
        className={`flex-row items-center rounded-2xl py-3 px-4 ${
          filled ? "bg-filledButton" : "bg-background border border-white"
        }`}
        onPress={() =>
          route &&
          (push ? router.push(route as any) : router.replace(route as any))
        }
      >
        {isImageURISource(icon) && (
          <Image source={icon} className="w-5 h-5 mr-2" />
        )}
        {React.isValidElement(icon) && <View>{icon}</View>}
        <Text className={`${textSize} ${filled || "text-white"}`}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
