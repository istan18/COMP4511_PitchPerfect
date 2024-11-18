import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { CheckBox } from "@rneui/themed";

interface CheckboxProps {
  label: string;
  initiallyChecked?: boolean;
  size?: number;
  textSize?: string;
  toggle?: () => void;
}

export default function Checkbox({
  label,
  initiallyChecked = false,
  size = 24,
  textSize = "text-xl",
  toggle,
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(initiallyChecked || false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    toggle && toggle();
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
        size={size}
      />
      <Text
        className={`${textSize} ${isChecked ? "text-white" : "text-gray-400"}`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
