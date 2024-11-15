import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { CheckBox } from "@rneui/themed";

interface CheckboxProps {
  label: string;
}

export default function Checkbox({ label }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

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
        checkedColor="green"
        uncheckedColor="#9CA3AF"
        size={24}
      />
      <Text className={`text-xl ${isChecked ? "text-white" : "text-gray-500"}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
