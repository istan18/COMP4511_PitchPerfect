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
  textStyle?: string;
  buttonStyle?: string;
}

export default function FilledButton({
  icon,
  filled = true,
  title,
  onPress = () => {},
  otherStyles = "",
  width = "w-4/5",
  buttonStyle = "",
  textStyle = "",
}: FilledButtonProps) {
  const isImageURISource = (source: any): source is ImageURISource => {
    return source && typeof source === "object" && source.uri;
  };

  return (
    <View className={`${otherStyles} mx-auto ${width} py-2`}>
      <TouchableOpacity
        className={`flex-row items-center justify-center rounded-2xl gap-1.5 ${buttonStyle || 'py-4'} ${filled ? "bg-filledButton" : "bg-background border border-white"} `}
        onPress={onPress}
      >
        <Text
          className={`${textStyle} ${icon ? "ml-2" : "ml-0"} text-2xl text-center ${filled || "text-white"}`}
        >
          {title}
        </Text>
        {icon && isImageURISource(icon) && (
          <Image source={icon} className="w-10 h-10 absolute left-4" />
        )}
        {icon && React.isValidElement(icon) && (
          <View className="w-5 h-5 justify-center">{icon}</View>
        )}
      </TouchableOpacity>
    </View>
  );
}
