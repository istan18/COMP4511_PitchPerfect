import { Text, TextInput, View } from "react-native";
import React from "react";

interface TitleInputProps {
  text: string;
  setText: (text: string) => void;
  placeholder: string;
  padding?: string;
  maxLength?: number;
  includeCounter?: boolean;
  width?: string;
  height?: string;
  children?: React.ReactNode;
  heading?: string;
}

const TitleInput: React.FC<TitleInputProps> = ({
  text,
  setText,
  placeholder,
  children,
  heading,
  padding = "pb-0",
  maxLength = 0,
  includeCounter = false,
  width = "w-4/5",
  height = "h-16",
}) => {
  return (
    <React.Fragment>
      <View className={`${width} mx-auto`}>
        {heading ? (
          <Text className={"text-white text-3xl mx-auto mb-3 ml-0"}>
            {heading}
          </Text>
        ) : null}
        <TextInput
          className={`border text-white border-white ${height} text-2xl pl-4 rounded-xl ${padding}`}
          style={{ textAlign: "left" }}
          onChangeText={() => {
            if (text.length >= maxLength) return;
            setText(text);
          }}
          value={text}
          placeholder={placeholder}
          maxLength={maxLength}
        />
        {includeCounter && (
          <Text className={"text-white text-lg ml-auto"}>
            {text.length}/{maxLength}
          </Text>
        )}
        {children}
      </View>
    </React.Fragment>
  );
};

export default TitleInput;
