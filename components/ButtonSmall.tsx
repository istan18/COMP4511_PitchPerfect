import {
  Image,
  ImageURISource,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";

interface FilledButtonProps {
  icon?: ImageURISource;
  filled?: boolean;
  title: string;
  push?: boolean;
  route?: string;
}

export default function FilledButton({
  icon,
  filled = true,
  push = false,
  title,
  route,
}: FilledButtonProps) {
  return (
    <View className="flex py-2 w-[160px]">
      <TouchableOpacity
        className={`flex-row items-center rounded-3xl py-3 px-6 ${
          filled ? "bg-filledButton" : "bg-background border border-white"
        }`}
        onPress={() =>
          route &&
          (push ? router.push(route as any) : router.replace(route as any))
        }
      >
        {icon && <Image source={icon} className="w-5 h-5 mr-3" />}
        <Text className={`text-sm ${filled || "text-white"}`}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
