import React, { JSXElementConstructor, ReactElement, useState } from "react";
import {
  Alert,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import ProfileHeader from "@/components/ProfileHeader";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import JobCard from "@/components/JobCard";
import Tag from "@/components/Tag";
import Reviews from "@/components/Reviews";
import { router } from "expo-router";
import ProjectOptions from "@/components/ProjectOptions";
import CustomTextInput from "@/components/CustomTextInput";
import FilledButton from "@/components/FilledButton";
import ExperienceForm from "@/components/ExperienceForm";
import {
  exampleExperience,
  exampleProjects,
  exampleTags,
  groupTags,
  options,
  reviewsList,
} from "./helpers";

export interface Experience {
  id: number;
  title: string;
  company: string;
  start: string;
  end: string;
  durationLength: string;
  imageSource: ImageSourcePropType | null;
  manageIcon?: React.JSX.Element;
}

export default function Index() {
  const [visibleOptions, setVisibleOptions] = useState<{
    [key: number]: boolean;
  }>({});
  const [editingSkills, setEditingSkills] = useState(false);
  const [editingExperience, setEditingExperience] = useState(false);
  const [showExperienceForm, setShowExperienceForm] = useState(false);
  const [experienceToEdit, setExperienceToEdit] = useState<Experience | null>(
    null
  );
  const [publicProjects, setPublicProjects] =
    useState<Experience[]>(exampleProjects);
  const [experiences, setExperiences] = useState(exampleExperience);
  const [tags, setTags] = useState(exampleTags);
  const [customTag, setCustomTag] = useState("");

  const openOptions = (id: number) => {
    setVisibleOptions((prev) => ({ ...prev, [id]: true }));
  };

  const addCustomTag = () => {
    if (customTag.trim()) {
      setTags([...tags, customTag.trim()]);
      setCustomTag("");
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

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
      const index = updated.findIndex((exp) => exp.id === experienceToEdit.id);
      updated[index] = experience;

      setExperiences(updated);
    } else {
      setExperiences((prev) => [...prev, experience]);
    }
    setShowExperienceForm(false);
  };

  const handleRemoveExperience = (id: number | undefined) => {
    Alert.alert(
      "Delete experience",
      "Are you sure you want to delete this experience?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setExperiences(experiences.filter((exp) => exp.id !== id));
            setShowExperienceForm(false);
          },
        },
      ]
    );
  };

  return (
    <View className="flex-1 bg-background">
      <ScrollView
        className="w-full"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            setVisibleOptions({});
            setShowExperienceForm(false);
          }}
        >
          <SafeAreaView className="w-full items-center">
            <View className="mt-4 w-9/10 justify-end flex flex-row gap-x-6">
              <TouchableOpacity
                onPress={() => router.push("/account/editProfile")}
              >
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
              {publicProjects.length > 0 ? (
                publicProjects.map((project) => (
                  <View key={project.id} className="">
                    <JobCard
                      title={project.title}
                      company={project.company}
                      start={project.start}
                      end={project.end}
                      durationLength={project.durationLength}
                      manageIcon={
                        <Ionicons
                          name="ellipsis-horizontal"
                          size={20}
                          color="white"
                        />
                      }
                      imageSource={project.imageSource}
                      onPressManage={() => openOptions(project.id)}
                    />
                    {visibleOptions[project.id] && (
                      <ProjectOptions
                        close={() => setVisibleOptions({})}
                        options={
                          options(
                            project.id,
                            project.end,
                            publicProjects,
                            setPublicProjects
                          ) as {
                            name: string;
                            icon: ReactElement<
                              any,
                              string | JSXElementConstructor<any>
                            >;
                            onPress?: (() => void) | undefined;
                          }[]
                        }
                        otherStyles="w-4/5 top-0 absolute"
                      />
                    )}
                  </View>
                ))
              ) : (
                <Text className={"text-gray-400 text-xl"}>
                  Go Home to collaborate on a project!
                </Text>
              )}
            </View>

            <View className={"w-full border-t-[6px] mt-8 border-black"} />

            <View className={"w-9/10 items-center flex flex-col mt-8 gap-y-4"}>
              <View className="flex-row w-full justify-between items-center">
                <Text className={"text-white text-3xl"}>Experience</Text>
                <TouchableOpacity
                  onPress={() => setEditingExperience(!editingExperience)}
                >
                  {editingExperience ? (
                    <Feather name="check" size={28} color="white" />
                  ) : (
                    <Feather name="edit-2" size={20} color="white" />
                  )}
                </TouchableOpacity>
              </View>

              {editingExperience && (
                <FilledButton
                  title="Add experience"
                  icon={<Feather name="plus" size={20} color="black" />}
                  onPress={() => handleAddExperience()}
                />
              )}

              {experiences.length > 0 ? (
                experiences.map((experience, index) => (
                  <JobCard
                    key={index}
                    title={experience.title}
                    company={experience.company}
                    start={experience.start}
                    end={experience.end}
                    durationLength={experience.durationLength}
                    imageSource={experience.imageSource}
                    manageIcon={
                      editingExperience ? (
                        <Feather name="edit-2" size={20} color="white" />
                      ) : undefined
                    }
                    onPressManage={() => {
                      handleEditExperience(experience);
                    }}
                  />
                ))
              ) : (
                <Text className={"text-gray-400 text-xl"}>
                  Add an experience to your profile!
                </Text>
              )}
            </View>

            <View className={"w-full border-t-[6px] mt-8 border-black"} />

            <View className={"w-[90%] flex flex-col mt-8 gap-y-1"}>
              <View className="mb-4 gap-x-4 flex-row w-full justify-between items-center">
                <Text className={"text-white text-3xl"}>Skills</Text>
                <TouchableOpacity
                  onPress={() => setEditingSkills(!editingSkills)}
                >
                  {editingSkills ? (
                    <Feather name="check" size={28} color="white" />
                  ) : (
                    <Feather name="edit-2" size={20} color="white" />
                  )}
                </TouchableOpacity>
              </View>

              {editingSkills && (
                <CustomTextInput
                  setText={setCustomTag}
                  text={customTag}
                  placeholder={"Add more skills"}
                  marginBottom="mb-4"
                  rightIcon={
                    <TouchableOpacity onPress={addCustomTag}>
                      <AntDesign name="plus" color="#FFFFFF" size={24} />
                    </TouchableOpacity>
                  }
                />
              )}

              {groupTags(tags).map((pair, index) => (
                <View key={index} className={"w-full flex flex-row"}>
                  <Tag
                    textSize={"text-xl"}
                    tagStyle={"mr-auto"}
                    tag={pair[0]}
                    editing={editingSkills}
                    remove={() => removeTag(pair[0])}
                  />
                  {pair[1] && (
                    <Tag
                      textSize={"text-xl"}
                      tagStyle={"ml-auto"}
                      tag={pair[1]}
                      editing={editingSkills}
                      remove={() => removeTag(pair[1])}
                    />
                  )}
                </View>
              ))}
            </View>

            <View className={"w-full border-t-[6px] mt-8 border-black"} />

            <Reviews reviewedPerson="Alice" reviewsList={reviewsList} />
            {showExperienceForm && (
              <ExperienceForm
                visible={showExperienceForm}
                experienceToEdit={experienceToEdit}
                removeExperience={() =>
                  handleRemoveExperience(experienceToEdit?.id)
                }
                saveForm={handleSaveExperience}
                length={experiences.length}
                close={() => setShowExperienceForm(false)}
              />
            )}
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
}
