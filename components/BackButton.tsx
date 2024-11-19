import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

interface BackButtonProps {
  marginTop?: string;
}

export default function BackButton({ marginTop }: BackButtonProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.back()}
      className={`absolute ${marginTop || "top-20"} left-8 p-2 z-50 bg-background rounded-full`}
    >
      <Ionicons name="arrow-back" size={24} color="white" />
    </TouchableOpacity>
  );
}
