import React from "react";
import {
  Keyboard,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import FilledButton from "@/components/FilledButton";
import IonIcons from "@expo/vector-icons/Ionicons";

interface ApplicationPopupProps {
  visible: boolean;
  newQuestion: string;
  setNewQuestion: (text: string) => void;
  addQuestion: () => void;
  onClose: () => void;
}

const ApplicationPopup: React.FC<ApplicationPopupProps> = ({
  visible,
  newQuestion,
  setNewQuestion,
  addQuestion,
  onClose,
}) => (
  <Modal
    transparent={true}
    animationType="fade"
    visible={visible}
    onRequestClose={onClose}
  >
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View className="w-9/10 px-5 pb-5 pt-8 bg-chat rounded-xl">
          <TouchableOpacity
            className="absolute top-6 z-50 left-6"
            onPress={onClose}
          >
            <IonIcons name="close" size={36} color="white" />
          </TouchableOpacity>
          <Text className="font-semibold text-center text-white text-3xl mb-6">
            Add New Question
          </Text>
          <TextInput
            value={newQuestion}
            onChangeText={setNewQuestion}
            placeholder="New Question"
            className="p-4 text-xl mb-4 bg-gray-200 rounded-lg"
            multiline
          />
          <FilledButton
            otherStyles="w-3/4 mx-auto"
            title="Done"
            onPress={addQuestion}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  </Modal>
);

export default ApplicationPopup;
