import { TouchableOpacity } from "react-native";
import IonIcons from "@expo/vector-icons/Ionicons";

interface ExitButtonProps {
  onPress?: () => void;
}

export default function ExitButton({ onPress }: ExitButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} className="absolute top-20 left-8 p-2">
      <IonIcons name="close" size={36} color="white" />
    </TouchableOpacity>
  );
}
