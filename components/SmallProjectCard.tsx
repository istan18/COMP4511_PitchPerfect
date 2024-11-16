import { Ionicons } from "@expo/vector-icons";
import {
  ImageBackground,
  ImageURISource,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";

interface ProjectCardProps {
  title: string;
  hours: number;
  image: ImageURISource;
  tag: string;
}

export default function SmallProjectCard({
  title,
  hours,
  image,
  tag,
}: ProjectCardProps) {
  return (
    <TouchableOpacity onPress={() => router.push("/project/project-overview")}>
      <View className="w-60 h-40 mb-2 rounded-2xl overflow-hidden">
        <ImageBackground
          source={image}
          className="flex-1"
          resizeMode="cover"
        >
          <View className="absolute inset-0 bg-black opacity-30" />

          <View className="absolute bottom-2 right-2 bg-tagBackground px-3 py-1 rounded-2xl">
            <Text className="text-tagBackgroundSelected text-s">{tag}</Text>
          </View>
        </ImageBackground>
      </View>
      <Text className="text-white text-xl font-bold">{title}</Text>
      <View className="flex-row gap-2 items-center">
        <Ionicons name="time-outline" size={20} color="white" />
        <Text className="text-white text-lg">
          {hours} hr/week
        </Text>
      </View>
    </TouchableOpacity>
  );
}
