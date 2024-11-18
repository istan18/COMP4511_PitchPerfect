import { Modal, Text, TouchableWithoutFeedback, View } from "react-native";
import FilledButton from "./FilledButton";
import Checkbox from "./Checkbox";
import { Ionicons } from "@expo/vector-icons";

interface FilterOptionsProps {
  type: string;
  close: () => void;
  isVisible: boolean;
  addFilter: () => void;
  removeFilter: () => void;
  reset: () => void;
}

export default function FilterOptions({
  type,
  close,
  isVisible,
  addFilter,
  removeFilter,
  reset,
}: FilterOptionsProps) {
  const hours = [
    "Flexible (Between 1 and 10)",
    "Flexible (Between 10 and 20)",
    "Part-time (< 38)",
    "Full-time (38)",
    "Open source",
  ];
  const tags = [
    "Coding",
    "Maths",
    "Arts",
    "Science",
    "Health",
    "Business",
    "Javascript",
    "UI/UX",
    "Python",
    "UI/UX",
  ];

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={close}
    >
      <TouchableWithoutFeedback onPress={close}>
        <View className="absolute bg-black opacity-50 inset-0" />
      </TouchableWithoutFeedback>

      <View className="absolute bottom-0 w-full  bg-background rounded-2xl p-4">
        <View className="flex-row items-center justify-between p-4">
          <Text className="text-2xl text-white font-bold">{type}</Text>
          <Ionicons
            name="close"
            size={24}
            color="white"
            className=""
            onPress={close}
          />
        </View>

        {type === "Hours" && (
          <View>
            {hours.map((hour, index) => (
              <Checkbox key={index} label={hour} />
            ))}
          </View>
        )}
        {type === "Tags" && (
          <View>
            {tags.map((tag, index) => (
              <Checkbox label={tag} key={index} />
            ))}
          </View>
        )}

        <View className="items-center mb-8 mt-4">
          <FilledButton
            title="Apply"
            textStyle="text-xl"
            onPress={() => {
              close();
              addFilter();
            }}
          />
          <FilledButton
            title="Reset"
            filled={false}
            textStyle="text-xl"
            onPress={() => {
              reset();
              close();
              removeFilter();
            }}
          />
        </View>
      </View>
    </Modal>
  );
}
