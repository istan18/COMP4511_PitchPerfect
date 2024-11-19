import { View, Text, Modal, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface BottomModalProps {
  isVisible: boolean;
  close: () => void;
  title: string;
  contents: React.ReactElement;
}

export default function BottomModal({
  isVisible,
  title,
  contents,
  close,
}: BottomModalProps) {
  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="none"
      onRequestClose={close}
    >
      <TouchableWithoutFeedback onPress={close}>
        <View className="absolute bg-black opacity-50 inset-0" />
      </TouchableWithoutFeedback>

      <View className="absolute bottom-0 w-full bg-background rounded-2xl p-4">
        <View className="flex-row items-center justify-between p-4">
          <Text className="text-2xl text-white font-bold">{title}</Text>
          <Ionicons
            name="close"
            size={24}
            color="white"
            className=""
            onPress={close}
          />
        </View>

        {contents}
      </View>
    </Modal>
  );
}
