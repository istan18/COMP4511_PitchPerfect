import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import { DimensionValue, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface DropdownProps {
  options: { label: string; value: string }[];
  otherStyles?: object;
  placeholder?: string;
  width?: DimensionValue;
  disable?: boolean;
  value?: string;
  setValue?: (value: string) => void;
}

export default function CustomDropdown({
  options,
  otherStyles,
  placeholder,
  disable = false,
  value,
  setValue,
}: DropdownProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Dropdown
      style={[styles.dropdown, otherStyles]}
      containerStyle={styles.containerStyle}
      itemContainerStyle={styles.itemContainer}
      placeholderStyle={styles.placeholder}
      selectedTextStyle={styles.selectedText}
      iconStyle={styles.iconStyle}
      data={options}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={(item) => {
        setValue && setValue(item.value);
        setIsFocus(false);
      }}
      disable={disable}
      renderRightIcon={() => (
        <Ionicons
          name="chevron-down"
          size={24}
          color={!disable ? "#9CA3AF" : "#444444"}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 1,
    borderColor: "#9CA3AF",
    borderRadius: 15,
    padding: 14,
    width: "80%",
  },
  containerStyle: {
    borderRadius: 15,
  },
  itemContainer: {
    borderRadius: 15,
  },
  placeholder: {
    color: "#6B7280",
    fontSize: 18,
  },
  selectedText: {
    color: "white",
    fontSize: 18,
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
});
