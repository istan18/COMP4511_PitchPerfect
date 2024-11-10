import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ErrorMessageProps {
  error: string;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <View className="flex-row items-center gap-2 mb-2">
      <Ionicons name="alert-circle" size={20} color="red" />
      <Text className="text-red-500 text-base">{error}</Text>
    </View>
  );
};