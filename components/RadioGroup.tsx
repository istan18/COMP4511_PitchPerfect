import React, { useState } from "react";
import { View } from "react-native";
import RadioButton from "./RadioButton";

interface RadioGroupProps {
  options: { label: string; value: string }[];
}

export default function RadioGroup({ options }: RadioGroupProps) {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <View className="flex flex-col gap-4 w-[80%]">
      {options.map((option) => (
        <RadioButton
          key={option.value}
          label={option.label}
          selected={selectedValue === option.value}
          onPress={() => setSelectedValue(option.value)}
        />
      ))}
    </View>
  );
}
