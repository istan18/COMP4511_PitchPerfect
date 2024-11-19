import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";
import React from "react";

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
  keyboardType?: KeyboardTypeOptions;
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
  keyboardType = "default",
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
        <View
          className={`flex-row justify-center items-center rounded-2xl border
          ${leftIcon ? "pl-14" : "pl-4"} ${editable ? "border-gray-400" : "border-disabledGray"} ${height} ${padding}`}
        >
          {leftIcon}
          <TextInput
            keyboardType={keyboardType}
            className={`flex-1 text-xl color-white`}
            onChangeText={(newText) => {
              if (maxLength) {
                if (newText.length >= maxLength) return;
              }
              setText(newText);
            }}
            value={text}
            placeholder={placeholder}
            maxLength={maxLength}
            editable={editable}
            multiline
          />
          {rightIcon && <View className="pr-4">{rightIcon}</View>}
        </View>
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
