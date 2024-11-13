import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View, Text, Image, ImageURISource } from "react-native";

interface ProjectCardProps {
  title: string,
  hours: number,
  frequency: string,
  image: ImageURISource,
}

export default function ProjectCard({ title, hours, frequency, image }: ProjectCardProps) {
  return (
    <TouchableOpacity>
      <Image 
        source={image}
        className="w-40 h-40 rounded-2xl mb-2"
        resizeMode="cover"
      />
      <Text className="text-white text-xl font-bold">{title}</Text>
      <View className="flex-row gap-2 items-center">
        <Ionicons name="time-outline" size={20} color="white"/>
        <Text className="text-white text-lg">{hours} hr/{frequency}</Text>
      </View>
    </TouchableOpacity>
  );
}