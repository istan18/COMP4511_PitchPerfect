import { View, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

interface BackButtonProps {
  top?: number;
  left?: number;
  fallbackRoute?: string;
}

export default function BackButton({
  top = 20,
  left = 8,
  fallbackRoute = "/index",
}: BackButtonProps) {
  const router = useRouter();

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push(fallbackRoute as any);
    }
  };

  return (
    <TouchableOpacity
      onPress={handleBackPress}
      style={{
        position: "absolute",
        top: top,
        left: left,
        padding: 2,
      }}
    >
      <Ionicons name="arrow-back" size={24} color="white" />
    </TouchableOpacity>
  );
}
