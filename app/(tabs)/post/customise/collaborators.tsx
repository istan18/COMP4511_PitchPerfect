import React, { useState } from "react";
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import CustomTextInput from "@/components/CustomTextInput";
import BackButton from "@/components/BackButton";
import CollaboratorIconSelectable from "@/components/CollaboratorIconSelectable";
import FilledButton from "@/components/FilledButton";
import { router } from "expo-router";
import CollaboratorIcon from "@/components/CollaboratorIcon";
import CustomDropdown from "@/components/CustomDropdown";

const originalProfiles = [
  {
    id: 1,
    name: "Jenny Liu",
    image: require("@/assets/images/woman.jpg"),
  },
  {
    id: 2,
    name: "Christian Tolentino",
    image: require("@/assets/images/man.png"),
  },
  {
    id: 3,
    name: "Angela Shan",
    image: require("@/assets/images/woman.jpg"),
  },
  {
    id: 4,
    name: "Ahmad Bakhtiari",
    image: require("@/assets/images/man2.jpg"),
  },
  {
    id: 5,
    name: "James Wong",
    image: require("@/assets/images/man3.jpg"),
  },
];

const roleOptions = [
  { label: "Collaborator", value: "Collaborator" },
  { label: "Admin", value: "Admin" },
  { label: "Investor", value: "Investor" },
];

const Collaborators = () => {
  const [collaborator, setCollaborator] = useState("");
  const [profiles, setProfiles] = useState(originalProfiles);
  const [selectedProfiles, setSelectedProfiles] = useState<number[]>([]);
  const [selectedRole, setSelectedRole] = useState("Collaborator");

  const onChangeText = (text: string) => {
    if (text.length === 0) {
      setProfiles(originalProfiles);
    }
    const filteredProfiles = originalProfiles.filter((profile) =>
      profile.name.toLowerCase().includes(text.toLowerCase())
    );
    setProfiles(filteredProfiles);
    setCollaborator(text);
  };

  const toggleProfileSelection = (id: number) => {
    setSelectedProfiles((prevSelectedProfiles) =>
      prevSelectedProfiles.includes(id)
        ? prevSelectedProfiles.filter((profileId) => profileId !== id)
        : [...prevSelectedProfiles, id]
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView className={"flex-1 bg-background"}>
        <BackButton />
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Text
            className={"mt-20 text-center mx-auto text-5xl mb-8 text-white"}
          >
            Add Collaborators
          </Text>

          <CustomTextInput
            setText={onChangeText}
            text={collaborator}
            placeholder={"Search for names"}
            marginBottom={"mb-4"}
          />
          <View
            className={
              "w-9/10 mx-auto border-t mt-4 border-gray-500 opacity-50"
            }
          />
          <View
            className={
              "mx-auto w-9/10 mt-8 gap-4 flex-wrap flex-row justify-center items-center"
            }
          >
            {profiles.map(({ id, name, image }, index) => (
              <View
                key={index}
                className={"flex flex-col items-center justify-center"}
              >
                <CollaboratorIconSelectable
                  additionalAction={() => toggleProfileSelection(id)}
                  imageSource={image}
                />
                <Text
                  numberOfLines={1}
                  className="w-24 text-lg text-white text-center"
                >
                  {name}
                </Text>
              </View>
            ))}
          </View>
          <View
            className={
              "w-9/10 mx-auto border-t my-8 border-gray-500 opacity-50"
            }
          />
          <Text className={"text-4xl text-white text-center mb-4 w-full"}>
            Collaborators
          </Text>
          <View
            className={"w-full ml-8 gap-y-3 items-center flex flex-col mb-8 "}
          >
            {selectedProfiles.map((id, index) => {
              const profile = profiles.find((p) => p.id === id);
              return profile ? (
                <View
                  key={index}
                  className={"w-full flex flex-row items-center mx-auto"}
                >
                  <CollaboratorIcon imageSource={profile.image} />
                  <CustomDropdown
                    placeholder={"Role"}
                    options={[
                      {
                        label: "Collaborator",
                        value: "Collaborator",
                      },
                      {
                        label: "Admin",
                        value: "Admin",
                      },
                      {
                        label: "Investor",
                        value: "Investor",
                      },
                    ]}
                  />
                </View>
              ) : null;
            })}
          </View>
          <View
            className={
              "w-9/10 mx-auto border-t my-8 border-gray-500 opacity-50"
            }
          />
          <FilledButton
            otherStyles={"w-3/4"}
            title={"Save"}
            onPress={() => router.back()}
          />
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Collaborators;
