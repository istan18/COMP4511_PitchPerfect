import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface FullWidthProps {
  leftIcon: React.ReactElement;
  rightIcon: React.ReactElement;
  text: string;
  hasBottomBorder?: boolean;
  marginLeft: string;
  onPress?: () => void;
}

const FullWidthButton: React.FC<FullWidthProps> = ({
  leftIcon,
  rightIcon,
  text,
  onPress = () => {},
  hasBottomBorder = false,
  marginLeft,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View
      className={`flex my-auto flex-row h-[4.5rem] items-center border-t-hairline border-t-gray-200 ${hasBottomBorder ? "border-b-hairline border-b-gray-200" : ""}`}
    >
      <View className={`${marginLeft} mr-auto`}>{leftIcon}</View>
      <Text className="text-white text-left w-[22rem] text-2xl">{text}</Text>
      <View className={"mr-4 ml-auto"}>{rightIcon}</View>
    </View>
  </TouchableOpacity>
);

export default FullWidthButton;
