import { Text, TextInput, View } from "react-native";
import React, { useRef } from "react";

interface TitleInputProps {
  text?: any;
  setText?: (text: any) => void;
  placeholder: string;
  padding?: string;
  maxLength?: number;
  includeCounter?: boolean;
  width?: string;
  height?: string;
  headingSize?: string;
  children?: React.ReactNode;
  heading?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  marginBottom?: string;
  editable?: boolean;
}

const CustomTextInput: React.FC<TitleInputProps> = ({
  text = "",
  setText = () => {},
  placeholder,
  children,
  headingSize = "text-3xl",
  heading,
  leftIcon,
  rightIcon,
  padding = "pb-0",
  maxLength,
  includeCounter = false,
  width = "w-4/5",
  height = "h-16",
  marginBottom = "",
  editable = true,
}) => {
  const textInputRef = useRef<TextInput>(null);

  return (
    <React.Fragment>
      <View className={`${width} mx-auto ${marginBottom}`}>
        {heading ? (
          <Text className={`text-white ${headingSize} mx-auto mb-4 ml-0`}>
            {heading}
          </Text>
        ) : null}
        <TextInput
          ref={textInputRef}
          className={`border text-left text-white border-gray-400 ${height} text-2xl p-4 rounded-2xl ${padding} w-full color-white border border-gray-400 rounded-2xl p-4 text-xl`}
          onChangeText={(newText) => {
            if (maxLength) {
              if (newText.length >= maxLength) return;
            }
            setText(newText);
          }}
          value={text}
          placeholder={placeholder}
          maxLength={maxLength}
          multiline={true} // Allow multiline input
          textAlignVertical="top" // Start text from the top
          onSubmitEditing={() => textInputRef.current?.blur()} // Exit the text box on return key press
          blurOnSubmit={true} // Ensure the text box loses focus on return key press
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

export default CustomTextInput;
