import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface DropdownProps {
  options: { label: string; value: string }[];
}

export default function CustomDropdown({ options }: DropdownProps) {
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Dropdown
      style={styles.dropdown}
      containerStyle={styles.containerStyle}
      itemContainerStyle={styles.itemContainer}
      placeholderStyle={styles.placeholder}
      selectedTextStyle={styles.selectedText}
      iconStyle={styles.iconStyle}
      data={options}
      labelField="label"
      valueField="value"
      placeholder="Institution"
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={(item) => {
        setValue(item.value);
        setIsFocus(false);
      }}
      renderRightIcon={() => (
        <Ionicons name="chevron-down" size={24} color="#9CA3AF" />
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
