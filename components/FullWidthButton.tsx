import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface FullWidthProps {
  leftIcon: React.ReactElement;
  rightIcon?: React.ReactElement;
  text: string | React.ReactElement;
  hasBottomBorder?: boolean;
  marginLeft?: string;
  marginRight?: string;
  height?: string;
  onPress?: () => void;
  pressable?: boolean;
  textStyles?: string;
}

const FullWidthButton: React.FC<FullWidthProps> = ({
  leftIcon,
  rightIcon,
  text,
  onPress = () => {},
  hasBottomBorder = false,
  marginLeft = "ml-0",
  marginRight = "mr-4",
  height = "h-[4.5rem]",
  pressable = true,
  textStyles,
}) => (
  <TouchableOpacity onPress={onPress} disabled={!pressable}>
    <View
      className={`flex my-auto flex-row ${height} items-center border-t-hairline border-t-gray-200 ${hasBottomBorder ? "border-b-hairline border-b-gray-200" : ""}`}
    >
      <View className={`${marginLeft} mr-auto`}>{leftIcon}</View>
      {React.isValidElement(text) ? (
        text
      ) : (
        <Text className={`${textStyles} text-white text-left w-[22rem] text-2xl`}>{text}</Text>
      )}
      <View className={`${marginRight} ml-auto`}>{rightIcon}</View>
    </View>
  </TouchableOpacity>
);

export default FullWidthButton;
