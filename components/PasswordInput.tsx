import { useState } from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface PasswordInputProps {
  placeholder: string;
  value?: string;
  setPassword?: (text: string) => void;
}

export default function PasswordInput({ placeholder, value, setPassword }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View className="w-[80%] flex-row border border-gray-400 rounded-2xl p-4 mb-4">
      <TextInput
        value={value}
        onChangeText={setPassword}
        placeholder={placeholder}
        secureTextEntry={!showPassword}
        className="flex-1 text-xl color-white"
      />
      <TouchableOpacity onPress={togglePasswordVisibility}>
        <Ionicons
          name={showPassword ? 'eye-off' : 'eye'}
          size={24}
          color="lightgray"
        />
      </TouchableOpacity>
    </View>
  );
}