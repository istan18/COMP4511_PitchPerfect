import React from "react";
import { View, Image, FlatList, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

interface ImageSliderProps {
  images: string[];
  height: number;
}

export default function ImageSlider({ images, height }: ImageSliderProps) {
  const renderItem = ({ item }: { item: string }) => (
    <View style={{ width: width * 0.85, marginHorizontal: 10 }}>
      <Image
        source={{ uri: item }}
        style={{ width: "100%", height: "100%", borderRadius: 20 }}
        resizeMode="cover"
      />
    </View>
  );

  return (
    <View
      style={{
        position: "relative",
        width: "100%",
        height: height,
        alignSelf: "center",
      }}
    >
      <FlatList
        data={images}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={true}
        decelerationRate="fast"
      />
    </View>
  );
}
