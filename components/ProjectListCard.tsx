import { View, Text, Image, TouchableOpacity, ImageURISource } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

interface ProjectListCardProps {
  manager: string;
  image: ImageURISource;
  title: string;
  description: string;
  hours: number;
  tags: string[];
}

export default function ProjectListCard({
  manager,
  image,
  title,
  description,
  hours,
  tags,
}: ProjectListCardProps) {
  return (
    <TouchableOpacity 
      onPress={() => router.push("/project/project-overview")}
      className="mb-8 gap-1.5"  
    >
      <Text className="text-white text-xl mb-2">{manager}</Text>
      <Image
        source={image}
        className="w-full h-60 mb-2 rounded-2xl"
        resizeMode="cover"
      />
      <View className="flex-row justify-between items-center">
        <Text className="text-white text-xl font-bold">{title}</Text>
        <View className="flex-row gap-2 items-center">
          <Ionicons name="time-outline" size={20} color="white" />
          <Text className="text-white text-lg">
            {hours} hr/week
          </Text>
        </View>
      </View>
      <Text className="text-white text-lg">{description}</Text>

      <View className="flex-row gap-2 mt-2">
        {tags.map((tag, index) => (
          <View
            key={index}
            className={`bg-tagBackground px-3 py-1 rounded-2xl`}
          >
            <Text className="text-tagBackgroundSelected text-s">{tag}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
}