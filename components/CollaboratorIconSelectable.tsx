import { AntDesign } from "@expo/vector-icons";
import { Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import { useState } from "react";

interface CollaboratorIconSelectableProps {
  imageSource: ImageSourcePropType;
  additionalAction: () => void;
}

const CollaboratorIconSelectable: React.FC<CollaboratorIconSelectableProps> = ({
  imageSource,
  additionalAction,
}) => {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity
      className={"relative gap-x-4 flex flex-row justify-center items-center"}
      onPress={() => {
        additionalAction();
        setSelected(!selected);
      }}
    >
      <Image
        source={imageSource}
        className={" border-4  w-20 h-20 rounded-full bg-gray-300"}
      />
      {selected ? (
        <AntDesign
          name={"checkcircleo"}
          className="absolute bg-green-500 top-1 right-1 rounded-full"
          color={"white"}
          size={24}
        />
      ) : (
        <AntDesign
          name={"pluscircleo"}
          className="absolute bg-white top-1 right-1 rounded-full"
          color={"black"}
          size={24}
        />
      )}
    </TouchableOpacity>
  );
};

export default CollaboratorIconSelectable;
