import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import IonIcons from "@expo/vector-icons/Ionicons";

interface ExitButtonProps {
  url: string;
}

export default function ExitButton({ url }: ExitButtonProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.replace(url as any)}
      className="absolute top-20 left-8 p-2"
    >
      <IonIcons name="close" size={36} color="white" />
    </TouchableOpacity>
  );
}
