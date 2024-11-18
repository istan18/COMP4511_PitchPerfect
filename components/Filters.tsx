import { View } from "react-native";
import FilledButton from "./FilledButton";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import BottomModal from "./BottomModal";
import FilterOptions from "./FilterOptions";

interface FiltersProps {
  rowStyles?: string;
}

const filters = [
  {
    title: "New",
  },
  {
    title: "Funded",
  },
  {
    title: "Hours",
    icon: <Ionicons name="chevron-down" size={16} color="white" />,
  },
  {
    title: "Tags",
    icon: <Ionicons name="chevron-down" size={16} color="white" />,
  },
];

export default function Filters({ rowStyles }: FiltersProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [optionsType, setOptionsType] = useState<string>("");
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);

  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      removeFilter(filter);
    } else {
      addFilter(filter);
    }
  };

  const removeFilter = (filter: string) => {
    let filteredList = activeFilters.filter((f) => f !== filter);
    setActiveFilters(filteredList);
  };

  const addFilter = (filter: string) => {
    setActiveFilters([...activeFilters, filter]);
  };

  const handleFilterOptions = (filter: string) => {
    setOptionsType(filter);
    setAreOptionsVisible(true);
  };

  const closeOptions = () => {
    setAreOptionsVisible(false);
  };

  const resetFilters = () => {
    closeOptions();
    setOptionsType("");
  };

  return (
    <View className="w-full">
      <View className={`${rowStyles} flex-row gap-2 items-center w-full my-4`}>
        {filters.map((filter) => (
          <FilledButton
            key={filter.title}
            title={filter.title}
            icon={filter.icon}
            otherStyles="flex-1"
            buttonStyle={`py-0 ${
              activeFilters.includes(filter.title) &&
              "bg-tagBackground border-b-2"
            }`}
            textStyle="text-lg py-1"
            filled={false}
            onPress={
              filter.title === "New" || filter.title === "Funded"
                ? () => toggleFilter(filter.title)
                : () => handleFilterOptions(filter.title)
            }
          />
        ))}
      </View>
    
      {areOptionsVisible && <BottomModal 
        isVisible={areOptionsVisible} 
        title={optionsType}
        close={closeOptions} 
        contents={<FilterOptions 
          type={optionsType} 
          close={closeOptions} 
          addFilter={() => addFilter(optionsType)} 
          removeFilter={() => removeFilter(optionsType)}
          reset={resetFilters}
        />}
      />}
    </View>
  );
}
