import { View, Text, ScrollView } from "react-native";
import SmallProjectCard from "./SmallProjectCard";

export default function RecommendedProjects() {
  const projects = [
    {
      title: "Inside the Box",
      hours: 1,
      image: require("../assets/images/mealplanner.png"),
      tag: "Coding",
    },
    {
      title: "Sky Rocket",
      hours: 20,
      image: require("../assets/images/rocket.png"),
      tag: "Maths",
    },
    {
      title: "Birdline",
      hours: 5,
      image: require("../assets/images/bird.jpg"),
      tag: "Science",
    },
  ];

  return (
    <View className="w-full items-center">
      <View className="w-[80%]">
        <Text className="text-2xl text-white font-bold mt-4">
          Featured projects
        </Text>
      </View>
      <ScrollView
        horizontal
        className="w-full"
        showsHorizontalScrollIndicator={false}
      >
        <View className="flex-1 flex-row gap-4 my-4 mx-8">
          {projects.map((project, index) => (
            <SmallProjectCard
              key={index}
              title={project.title}
              hours={project.hours}
              image={project.image}
              tag={project.tag}
            />
          ))}
        </View>
      </ScrollView>

      <View className="w-[80%]">
        <Text className="text-2xl text-white font-bold mt-4">
          Based on your skills
        </Text>
      </View>
      <ScrollView
        horizontal
        className="w-full"
        showsHorizontalScrollIndicator={false}
      >
        <View className="flex-1 flex-row gap-4 my-4 mx-8">
          {projects.map((project, index) => (
            <SmallProjectCard
              key={index}
              title={project.title}
              hours={project.hours}
              image={project.image}
              tag={project.tag}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}