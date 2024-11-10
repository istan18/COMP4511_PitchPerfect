import React from "react";
import { ColorValue, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

type ProgressProps = {
  length: number;
  filledIndex: number;
  radius?: number;
  spacing?: number;
  strokeWidth?: number;
  unfilledColor?: ColorValue;
  filledColor?: ColorValue;
};

const Progress = ({
  length,
  filledIndex,
  radius = 5,
  spacing = 10,
  strokeWidth = 2,
  unfilledColor = "#7D7F7F",
  filledColor = "#D9D9D9",
}: ProgressProps) => {
  return (
    <View className={"flex flex-row justify-center mx-auto mt-2 items-center"}>
      {Array.from({ length }, (_, index) => {
        const isFilled = index === filledIndex;
        const fillColor = isFilled ? filledColor : unfilledColor;

        return (
          <Svg
            key={index}
            height={radius * 2 + strokeWidth * 2}
            width={radius * 2 + strokeWidth * 2}
            style={{ marginHorizontal: spacing / 2 }}
          >
            <Circle
              cx={radius + strokeWidth}
              cy={radius + strokeWidth}
              r={radius}
              fill={fillColor}
              stroke={fillColor}
              strokeWidth={strokeWidth}
            />
          </Svg>
        );
      })}
    </View>
  );
};

export default Progress;
