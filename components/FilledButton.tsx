import {
  Image,
  ImageURISource,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface FilledButtonProps {
  icon?: ImageURISource;
  filled?: boolean;
  title: string;
  onPress: () => void;
  otherStyles?: string;
}

export default function FilledButton({
  icon,
  filled = true,
  title,
  onPress,
  otherStyles = "",
}: FilledButtonProps) {
  return (
    <View className={`${otherStyles} flex w-[80%] py-2 mx-auto`}>
      <TouchableOpacity
        className={`flex-row relative items-center rounded-2xl py-4 ${filled ? "bg-filledButton" : "bg-background border border-white"} `}
        onPress={onPress}
      >
        {icon && <Image source={icon} className="w-8 h-8 absolute left-4" />}
        <Text
          className={`text-2xl text-center flex-1 ${filled || "text-white"}`}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
