import { Ionicons } from "@expo/vector-icons";
import { Alert } from "react-native";
import { Experience } from "./index";

export const exampleProjects = [
  {
    id: 1,
    title: "Software Developer",
    company: "Inside the Box",
    start: "Jul 2022",
    end: "Present",
    durationLength: "2 yrs 3 mths",
    imageSource: require("@/assets/images/mealplanner.png"),
    manageIcon: <Ionicons name="ellipsis-horizontal" size={20} color="white" />,
  },
  {
    id: 2,
    title: "Collaborator",
    company: "Robotic Chefs",
    start: "Aug 2021",
    end: "Jun 2022",
    durationLength: "10 mths",
    imageSource: require("@/assets/images/roboticChefs.png"),
    manageIcon: <Ionicons name="ellipsis-horizontal" size={20} color="white" />,
  },
];

export const exampleExperience = [
  {
    id: 1,
    title: "Software Intern",
    company: "Atlassian",
    start: "Jan 2023",
    end: "Feb 2024",
    durationLength: "1 yr 1 mth",
    imageSource: require("@/assets/images/atlassian.png"),
  },
];

export const exampleTags = [
  "Communicative",
  "Accounting",
  "Management",
  "Leadership",
  "Microsoft Excel",
  "Python",
  "Finance",
  "SQL",
  "Strategy",
  "R",
];

export const reviewsList = [
  "Alice was the most communicative person I've ever worked with!",
  "Could be more present, but overall a good experience working with Alice.",
];

export const getCurrentDate = `${new Date().toLocaleString("default", { month: "short" })} ${new Date().getFullYear()}`;

export const groupTags = (tags: string[]) => {
  const groupedTags = [];
  for (let i = 0; i < tags.length; i += 2) {
    groupedTags.push(tags.slice(i, i + 2));
  }
  return groupedTags;
};

export const hideProject = (
  id: number,
  publicProjects: Experience[],
  setPublicProjects: (projects: Experience[]) => void
) => {
  Alert.alert(
    "Hide project",
    "Others will no longer see this project on your profile.",
    [
      { text: "Cancel", style: "cancel" },
      {
        text: "Hide",
        style: "destructive",
        onPress: () =>
          setPublicProjects(publicProjects.filter((p) => p.id !== id)),
      },
    ]
  );
};

export const leaveProject = (
  id: number,
  publicProjects: Experience[],
  setPublicProjects: (projects: Experience[]) => void
) => {
  Alert.alert("Leave project", "Are you sure you want to leave this project?", [
    { text: "Cancel", style: "cancel" },
    {
      text: "Leave",
      style: "destructive",
      onPress: () => {
        const projects = publicProjects.map((p) =>
          p.id === id ? { ...p, end: getCurrentDate } : p
        );
        setPublicProjects(projects);
      },
    },
  ]);
};

export const options = (
  id: number,
  end: string,
  publicProjects: Experience[],
  setPublicProjects: (projects: Experience[]) => void
) =>
  [
    {
      name: "Hide from profile",
      icon: (
        <Ionicons
          name="eye-off-outline"
          size={20}
          color="white"
          className="p-4"
        />
      ),
      onPress: () => hideProject(id, publicProjects, setPublicProjects),
    },
    end === "Present"
      ? {
          name: "Leave project",
          icon: (
            <Ionicons
              name="exit-outline"
              size={20}
              color="white"
              className="p-4"
            />
          ),
          onPress: () => leaveProject(id, publicProjects, setPublicProjects),
        }
      : null,
  ].filter((option) => option !== null);
