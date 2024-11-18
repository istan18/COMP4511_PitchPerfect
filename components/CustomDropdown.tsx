import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import { DimensionValue, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface DropdownProps {
  options: { label: string; value: string }[];
  placeholder: string;
  width?: DimensionValue;
  disable?: boolean;
}

export default function CustomDropdown({
  options,
  placeholder,
  width = "80%",
  disable = false,
}: DropdownProps) {
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Dropdown
      style={{
        borderWidth: 1,
        borderColor: !disable ? "#9CA3AF" : "#444444",
        borderRadius: 15,
        padding: 14,
        width,
      }}
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
        setValue(item.value);
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
