import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface TagScreenProps {
  tags: string[];
  maxTags?: number;
  selectedTags: string[];

  setSelectedTags(tags: string[]): void;
}

const Grid: React.FC<TagScreenProps> = ({
  tags,
  setSelectedTags,
  selectedTags,
  maxTags = 10,
}) => {
  const handleTagPress = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else if (selectedTags.length < maxTags) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <View className="flex-row flex-wrap justify-center gap-2 mb-4">
      {tags.map((tag) => (
        <TouchableOpacity
          key={tag}
          onPress={() => handleTagPress(tag)}
          className={`px-8 py-2 rounded-full ${selectedTags.includes(tag) ? "bg-tagBackgroundSelected" : "bg-tagBackground"}`}
        >
          <Text
            className={`text-3xl ${selectedTags.includes(tag) ? "text-black" : "text-tagText"}`}
          >
            {tag}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Grid;
