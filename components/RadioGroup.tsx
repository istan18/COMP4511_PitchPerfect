import React, { useState } from "react";
import { View } from "react-native";
import RadioButton from "./RadioButton";

interface RadioGroupProps {
  options: { label: string; value: string }[];
  multiple?: boolean;
}

export default function RadioGroup({
  options,
  multiple = false,
}: RadioGroupProps) {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handlePress = (value: string) => {
    if (multiple) {
      setSelectedValues((prevSelected) =>
        prevSelected.includes(value)
          ? prevSelected.filter((item) => item !== value)
          : [...prevSelected, value]
      );
    } else {
      setSelectedValues([value]);
    }
  };

  return (
    <View className="flex flex-col gap-4 w-full">
      {options.map((option) => (
        <RadioButton
          key={option.value}
          label={option.label}
          selected={selectedValues.includes(option.value)}
          onPress={() => handlePress(option.value)}
        />
      ))}
    </View>
  );
}
