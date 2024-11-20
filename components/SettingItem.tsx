import React from "react";
import {
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";

interface SettingItemProps {
  label: string;
  icon: ImageSourcePropType;
  iconWidth: number;
  iconHeight: number;
  onPress?: () => void; // Make onPress optional
}

const SettingItem: React.FC<SettingItemProps> = ({
  label,
  icon,
  iconWidth,
  iconHeight,
  onPress = () => {}, // Provide a default no-op function
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center mb-3 mt-3"
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={`Tap to access ${label}`}
    >
      <Image
        source={icon}
        style={{ width: iconWidth, height: iconHeight }}
        className="mr-8 ml-8"
      />
      <Text className="text-2xl font-extralight text-white">{label}</Text>
      <Image
        source={require("../assets/images/forward-arrow.png")}
        className="w-6 h-6 ml-auto mr-4"
      />
    </TouchableOpacity>
  );
};

export default SettingItem;
