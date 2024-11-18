import React from "react";
import { View, SafeAreaView, ScrollView, Text, TouchableOpacity, Alert, TouchableWithoutFeedback, ImageSourcePropType } from "react-native";
import ProfileHeader from "@/components/ProfileHeader";
import { Feather, Ionicons } from "@expo/vector-icons";
import JobCard from "@/components/JobCard";
import Tag from "@/components/Tag";
import Reviews from "@/components/Reviews";
import { router } from "expo-router";
import { useState } from "react";
import ProjectOptions from "@/components/ProjectOptions";
import CustomTextInput from "@/components/CustomTextInput";
import { AntDesign } from "@expo/vector-icons";
import FilledButton from "@/components/FilledButton";
import ExperienceForm from "@/components/ExperienceForm";

export interface Experience {
  id: number; 
  title: string; 
  company: string; 
  start: string; 
  end: string; 
  durationLength: string; 
  imageSource: ImageSourcePropType | null; 
};

export default function Index(){
  const [visibleOptions, setVisibleOptions] = useState<{ [key: number]: boolean }>({});
  const [editingSkills, setEditingSkills] = useState(false);
  const [editingExperience, setEditingExperience] = useState(false);
  const [showExperienceForm, setShowExperienceForm] = useState(false);
  const [experienceToEdit, setExperienceToEdit] = useState<Experience | null>(null);

  const [publicProjects, setPublicProjects] = useState([
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
    }
  ]);

  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: "Software Intern",
      company: "Atlassian",
      start: "Jan 2023",
      end: "Feb 2024",
      durationLength: "1 yr 1 mth",
      imageSource: require("@/assets/images/atlassian.png"),
    }
  ]);

  const hideProject = (id: number) => {
    Alert.alert("Hide project", "Others will no longer see this project on your profile.", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Hide",
        style: "destructive",
        onPress: () => setPublicProjects(publicProjects.filter((p) => p.id !== id)),
      },
    ]);
  };

  const getCurrentDate = `${new Date().toLocaleString('default', { month: 'short' })} ${new Date().getFullYear()}`;

  const leaveProject = (id: number) => {
    Alert.alert("Leave project", "Are you sure you want to leave this project?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Leave",
        style: "destructive",
        onPress: () => {
          const projects = publicProjects.map((p) =>
            p.id === id
              ? { ...p, end: getCurrentDate }
              : p
          );
          setPublicProjects(projects);
        }
      },
    ]);
  };

  const options = (id: number, end: string) => [
    { 
      name: "Hide from profile",
      icon: <Ionicons name="eye-off-outline" size={20} color="white" className="p-4" />, 
      onPress: () => hideProject(id),
    },
    end === "Present" ? { 
      name: "Leave project",
      icon: <Ionicons name="exit-outline" size={20} color="white" className="p-4" />,
      onPress: () => leaveProject(id),
    } : null,
  ].filter(option => option !== null);

  const openOptions = (id: number) => {
    setVisibleOptions((prev) => ({ ...prev, [id]: true }));
  };

  const [tags, setTags] = useState([
    "Communicative", "Accounting",
    "Management", "Leadership",
    "Microsoft Excel", "Python",
    "Finance", "SQL",
    "Strategy", "R",
  ]);
  const [customTag, setCustomTag] = useState("");
  
  const addCustomTag = () => {
    if (customTag.trim()) {
      setTags([...tags, customTag.trim()]);
      setCustomTag("");
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  }

  const groupedTags = [];
  for (let i = 0; i < tags.length; i += 2) {
    groupedTags.push(tags.slice(i, i + 2));
  }

  const handleAddExperience = () => {
    setExperienceToEdit(null);
    setShowExperienceForm(true);
  };

  const handleEditExperience = (experience: Experience) => {
    setExperienceToEdit(experience);
    setShowExperienceForm(true);
  };

  const handleSaveExperience = (experience: Experience) => {
    if (experienceToEdit) {
      const updated = [...experiences];
      updated[experienceToEdit.id] = experience;
      setExperiences(updated);
    } else {
      setExperiences((prev) => [...prev, experience]);
    }
    setShowExperienceForm(false);
  };

  const handleRemoveExperience = (id: number | undefined) => {
    Alert.alert("Delete experience", "Are you sure you want to delete this experience?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Remove",
        style: "destructive",
        onPress: () => {
          setExperiences(experiences.filter((exp) => exp.id !== id));
          setShowExperienceForm(false);
        }
      },
    ]);
  };

  return (
    <View className="flex-1 bg-background">
      <ScrollView 
        className="w-full"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <TouchableWithoutFeedback onPress={() => { 
          setVisibleOptions({}); 
          setShowExperienceForm(false); 
        }}>
          <SafeAreaView className="w-full items-center">
            <View className="mt-4 w-9/10 justify-end flex flex-row gap-x-6">
              <TouchableOpacity onPress={() => router.push('/account/editProfile')}>
                <Feather name="edit-2" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="settings" size={24} color="white" />
              </TouchableOpacity>
            </View>

            <ProfileHeader
              name="Alice Sharma"
              degree="B. Computer Science"
              university="UNSW"
              imageSource={require("@/assets/images/aliceProfile.jpg")}
              connections="500+ connections"
              otherStyles="mt-4"
            />

            <View className={"w-full border-t-[6px] mt-4 border-black"} />

            <View className={"w-[90%] items-center flex flex-col mt-8 gap-y-4"}>
              <Text className={"w-full text-white text-3xl"}>
                Public Projects
              </Text>
              {publicProjects.length > 0 ? (publicProjects.map((project) => (
                <View 
                  key={project.id}
                  className=""
                >
                  <JobCard
                    title={project.title}
                    company={project.company}
                    start={project.start}
                    end={project.end}
                    durationLength={project.durationLength}
                    manageIcon={<Ionicons name="ellipsis-horizontal" size={20} color="white" />}
                    imageSource={project.imageSource}
                    onPressManage={() => openOptions(project.id)}
                  />
                  {visibleOptions[project.id] && 
                    <ProjectOptions 
                      close={() => setVisibleOptions({})}
                      options={options(project.id, project.end)}
                      otherStyles="w-[80%] top-0 absolute"
                    />
                  }
                </View>
              ))) :
              <Text className={"text-gray-400 text-xl"}>
                Go Home to collaborate on a project!
              </Text>}
            </View>
            
            <View className={"w-full border-t-[6px] mt-8 border-black"} />
          
            <View className={"w-[90%] items-center flex flex-col mt-8 gap-y-4"}>
              <View className="flex-row w-full justify-between items-center">
                <Text className={"text-white text-3xl"}>
                  Experience
                </Text>
                <TouchableOpacity onPress={() => setEditingExperience(!editingExperience)}>
                  {editingExperience 
                    ? <Feather name="check" size={28} color="white" />
                    : <Feather name="edit-2" size={20} color="white" />
                  }
                </TouchableOpacity>
              </View>
              
              {editingExperience && <FilledButton 
                title="Add experience"
                icon={<Feather name="plus" size={20} color="black" />}
                onPress={() => handleAddExperience()}
              />}

              {experiences.length > 0 ? (experiences.map((experience, index) => (
                <JobCard
                  key={index}
                  title={experience.title}
                  company={experience.company}
                  start={experience.start}
                  end={experience.end}
                  durationLength={experience.durationLength}
                  imageSource={experience.imageSource}
                  manageIcon={editingExperience ? <Feather name="edit-2" size={20} color="white" /> : undefined}
                  onPressManage={() => {handleEditExperience(experience)}}
                />
              ))) : 
                <Text className={"text-gray-400 text-xl"}>
                  Add an experience to your profile!
                </Text>
              }
            </View>

            <View className={"w-full border-t-[6px] mt-8 border-black"} />

            <View className={"w-[90%] flex flex-col mt-8 gap-y-1"}>
              <View className="mb-4 gap-x-4 flex-row w-full justify-between items-center">
                <Text className={"text-white text-3xl"}>
                  Skills
                </Text>
                <TouchableOpacity onPress={() => setEditingSkills(!editingSkills)}>
                  {editingSkills 
                    ? <Feather name="check" size={28} color="white" />
                    : <Feather name="edit-2" size={20} color="white" />
                  }
                </TouchableOpacity>
              </View>

              {editingSkills && <CustomTextInput
                setText={setCustomTag}
                text={customTag}
                placeholder={"Add more skills"}
                marginBottom="mb-4"
                rightIcon={
                  <TouchableOpacity onPress={addCustomTag}>
                    <AntDesign name="plus" color="#FFFFFF" size={24} />
                  </TouchableOpacity>
                }
              />}

              {groupedTags.map((pair, index) => (
                <View key={index} className={"w-full flex flex-row"}>
                  <Tag
                    textSize={"text-xl"}
                    tagStyle={"mr-auto"}
                    tag={pair[0]}
                    editing={editingSkills}
                    remove={() => removeTag(pair[0])}
                  />
                  {pair[1] && <Tag
                    textSize={"text-xl"}
                    tagStyle={"ml-auto"}
                    tag={pair[1]}
                    editing={editingSkills}
                    remove={() => removeTag(pair[1])}
                  />}
                </View>
              ))}
            </View>

            <View className={"w-full border-t-[6px] mt-8 border-black"} />
            
            <Reviews />
            <ExperienceForm 
              visible={showExperienceForm}
              experienceToEdit={experienceToEdit}
              removeExperience={() => handleRemoveExperience(experienceToEdit?.id)}
              saveForm={handleSaveExperience}  
              length={experiences.length}
              close={() => setShowExperienceForm(false)}
            />
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
};
