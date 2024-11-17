import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { CheckBox } from "@rneui/themed";

interface CheckboxProps {
  label: string;
  initiallyChecked?: boolean;
}

export default function Checkbox({ label, initiallyChecked = false }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(initiallyChecked || false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity
      className="flex-row mr-4 items-center"
      onPress={toggleCheckbox}
    >
      <CheckBox
        checked={isChecked}
        onPress={toggleCheckbox}
        containerStyle={{
          backgroundColor: "transparent",
          padding: 0,
        }}
        checkedColor="white"
        uncheckedColor="#9CA3AF"
        size={24}
      />
      <Text className={`text-xl ${isChecked ? "text-white" : "text-gray-400"}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
