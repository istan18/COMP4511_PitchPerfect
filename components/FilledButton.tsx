import {
  Image,
  ImageURISource,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

interface FilledButtonProps {
  icon?: ImageURISource | React.ReactElement;
  filled?: boolean;
  title: string;
  onPress?: () => void;
  width?: string;
  otherStyles?: string;
}

export default function FilledButton({
  icon,
  filled = true,
  title,
  onPress = () => {},
  otherStyles = "",
  width = "w-4/5",
}: FilledButtonProps) {
  const isImageURISource = (source: any): source is ImageURISource => {
    return source && typeof source === "object" && source.uri;
  };

  return (
    <View className={`${otherStyles} flex ${width} py-2 mx-auto`}>
      <TouchableOpacity
        className={`flex-row relative items-center rounded-2xl py-4 ${filled ? "bg-filledButton" : "bg-background border border-white"} `}
        onPress={onPress}
      >
        {icon && isImageURISource(icon) && (
          <Image source={icon} className="w-8 h-8 absolute left-4" />
        )}
        {icon && React.isValidElement(icon) && (
          <View className="w-8 h-8 absolute left-4">{icon}</View>
        )}
        <Text
          className={`text-2xl text-center flex-1 ${filled || "text-white"}`}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
