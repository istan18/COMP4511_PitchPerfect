import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function BackButton() {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.back()}
      className="absolute top-20 left-8 p-2 z-50 bg-background rounded-full"
    >
      <Ionicons name="arrow-back" size={24} color="white" />
    </TouchableOpacity>
  );
}
