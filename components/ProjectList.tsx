import ProjectListCard from "./ProjectListCard";
import { Text, View } from "react-native";

interface ProjectListProps {
  searchQuery?: string;
}

export default function ProjectList({ searchQuery }: ProjectListProps) {
  const projects = [
    {
      profile: require("../assets/images/jennyProfile.png"),
      manager: "Jenny Liu",
      image: require("../assets/images/mealplanner.png"),
      title: "Inside the Box",
      description: "This is a description of project 1.",
      hours: 1,
      tags: ["Coding", "Javascript"],
    },
    {
      profile: require("../assets/images/woman.jpg"),
      manager: "Samantha Fang",
      image: require("../assets/images/rocket.png"),
      title: "Sky Rocket",
      description: "This is a description of project 2.",
      hours: 20,
      tags: ["Maths", "UI/UX"],
    },
    {
      profile: require("../assets/images/man.png"),
      manager: "Bob Thorton",
      image: require("../assets/images/bird.jpg"),
      title: "Birdline",
      description: "This is a description of project 3.",
      hours: 5,

      tags: ["Science", "Python"],
    },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery?.toLowerCase() || "") ||
      project.manager.toLowerCase().includes(searchQuery?.toLowerCase() || "")
  );

  return (
    <View className="flex-col gap-2">
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project, index) => (
          <ProjectListCard
            key={index}
            profile={project.profile}
            manager={project.manager}
            image={project.image}
            title={project.title}
            description={project.description}
            hours={project.hours}
            tags={project.tags}
          />
        ))
      ) : (
        <Text className="text-lg text-gray-400">
          No projects match your search.
        </Text>
      )}
    </View>
  );
}
