import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageURISource,
} from "react-native";
import { router } from "expo-router";

interface FilledButtonProps {
  icon?: ImageURISource;
  filled?: boolean;
  title: string;
  route: string;
}

export default function FilledButton({
  icon,
  filled = true,
  title,
  route,
}: FilledButtonProps) {
  return (
    <View className="flex py-2">
      <TouchableOpacity
        className={`flex-row items-center rounded-3xl py-3 px-6 ${
          filled ? "bg-[#F5E5C9]" : "bg-[#171F20] border border-white"
        }`}
        onPress={() => router.replace(route as any)}
      >
        {icon && <Image source={icon} className="w-5 h-5 mr-3" />}
        <Text className={`text-sm ${filled || "text-white"}`}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
