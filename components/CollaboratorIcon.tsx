import { Image, ImageSourcePropType } from "react-native";
import React from "react";

interface CollaboratorIconProps {
  imageSource: ImageSourcePropType;
  otherStyles?: string;
}

const CollaboratorIcon: React.FC<CollaboratorIconProps> = ({
  imageSource,
  otherStyles,
}) => {
  return (
    <Image
      source={imageSource}
      className={`${otherStyles} border-4 w-20 h-20 rounded-full bg-gray-300`}
    />
  );
};

export default CollaboratorIcon;
