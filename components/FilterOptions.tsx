import { View } from "react-native";
import FilledButton from "./FilledButton";
import Checkbox from "./Checkbox";

interface FilterOptionsProps {
  type: string;
  close: () => void;
  addFilter: () => void;
  removeFilter: () => void;
  reset: () => void;
}

const hours = [
  "Flexible (Between 1 and 10)",
  "Flexible (Between 10 and 20)",
  "Part-time (< 38)",
  "Full-time (38)",
  "Open source",
];
const tags = [
  "Coding",
  "Maths",
  "Arts",
  "Science",
  "Health",
  "Business",
  "Javascript",
  "UI/UX",
  "Python",
  "UI/UX",
];

export default function FilterOptions({
  type,
  close,
  addFilter,
  removeFilter,
  reset,
}: FilterOptionsProps) {
  return (
    <View>
      {type === "Hours" && (
        <View>
          {hours.map((hour, index) => (
            <Checkbox key={index} label={hour} />
          ))}
        </View>
      )}
      {type === "Tags" && (
        <View>
          {tags.map((tag, index) => (
            <Checkbox label={tag} key={index} />
          ))}
        </View>
      )}

      <View className="items-center mb-8 mt-4">
        <FilledButton
          title="Apply"
          textStyle="text-xl"
          onPress={() => {
            close();
            addFilter();
          }}
        />
        <FilledButton
          title="Reset"
          filled={false}
          textStyle="text-xl"
          onPress={() => {
            reset();
            close();
            removeFilter();
          }}
        />
      </View>
    </View>
  );
}
