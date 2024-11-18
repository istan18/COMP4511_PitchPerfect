import { Modal, View, TextInput, TouchableOpacity, Image, Text, ScrollView } from "react-native";
import { useState } from "react";
import { Experience } from "@/app/(tabs)/account";
import { ImageSourcePropType } from "react-native";
import FilledButton from "./FilledButton";
import Checkbox from "./Checkbox";
import { FontAwesome } from "@expo/vector-icons";
import CustomDropdown from "./CustomDropdown";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";

interface ExperienceFormProps {
  visible: boolean;
  experienceToEdit?: Experience | null;
  removeExperience: () => void;
  saveForm: (experience: Experience) => void;
  length: number;
  close: () => void;
}

const monthOptions = [
  {label: "Jan", value: "1"},
  {label: "Feb", value: "2"},
  {label: "Mar", value: "3"},
  {label: "Apr", value: "4"},
  {label: "May", value: "5"},
  {label: "Jun", value: "6"},
  {label: "Jul", value: "7"},
  {label: "Aug", value: "8"},
  {label: "Sep", value: "9"},
  {label: "Oct", value: "10"},
  {label: "Nov", value: "11"},
  {label: "Dec", value: "12"},
];

export default function ExperienceForm({
  visible,
  experienceToEdit,
  removeExperience,
  saveForm,
  length,
  close,
}: ExperienceFormProps) {
  const [title, setTitle] = useState(experienceToEdit?.title ?? "");
  const [company, setCompany] = useState(experienceToEdit?.company ?? "");
  const [startMonth, setStartMonth] = useState(experienceToEdit?.start ?? "");
  const [startYear, setStartYear] = useState(experienceToEdit?.start ?? "");
  const [endMonth, setEndMonth] = useState(experienceToEdit?.end ?? "");
  const [endYear, setEndYear] = useState(experienceToEdit?.end ?? "");
  const [duration, setDuration] = useState(experienceToEdit?.durationLength ?? "");
  const [image, setImage] = useState<ImageSourcePropType | null>(experienceToEdit?.imageSource ?? null);

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage({ uri: result.assets[0].uri });
    }
  };

  const resetForm = () => {
    setTitle("");
    setCompany("");
    setStartMonth("");
    setStartYear("");
    setEndMonth("");
    setEndYear("");
    setDuration("");
    setImage(null);
  };

  const handleSave = () => {
    saveForm({
      id: experienceToEdit?.id || length,
      title,
      company,
      start: startMonth + " " + startYear,
      end: endMonth + " " + endYear,
      durationLength: duration,
      imageSource: image,
    });
    resetForm();
  };

  return (
    <Modal 
      visible={visible}
      animationType="none"
      transparent={true}
    >
      <View className="flex-1 items-center justify-center bg-black/50 px-4">
        <View className="w-full h-[80%] bg-background rounded-2xl p-4 px-8">
          <ScrollView showsVerticalScrollIndicator={false}> 
            <Text className="text-white text-center text-3xl mt-4 mb-8">
              Add an experience
            </Text>

            <TextInput
              placeholder="Role"
              style={{ fontSize: 18 }}
              value={title}
              onChangeText={setTitle}
              className="color-white border border-gray-500 rounded-2xl p-4 mb-3"
            />
            <TextInput
              placeholder="Company"
              style={{ fontSize: 18 }}
              value={company}
              onChangeText={setCompany}
              className="color-white border border-gray-500 rounded-2xl p-4 mb-3"
            />

            <View className="flex-row items-center gap-2 mb-3">
              <CustomDropdown
                placeholder="Start month"
                value={startMonth}
                setValue={setStartMonth}
                options={monthOptions}
                otherStyles={{ flex: 1, borderColor: "gray" }}
              />
              <TextInput
                keyboardType="numeric"
                placeholder="Start year"
                style={{ fontSize: 18, flex: 1, marginBottom: 0 }}
                value={startMonth}
                onChangeText={setStartMonth}
                className="border border-gray-500 rounded-2xl p-4 mb-3"
              />
            </View>

            <View className="flex-row gap-2 mb-2">
              <CustomDropdown
                placeholder="End month"
                value={endMonth}
                setValue={setEndMonth}
                options={monthOptions}
                otherStyles={{ flex: 1, borderColor: "gray" }}
              />
              <TextInput
                keyboardType="numeric"
                placeholder="End year"
                style={{ fontSize: 18, flex: 1, marginBottom: 0 }}
                value={endYear}
                onChangeText={setEndYear}
                className="color-white border border-gray-500 rounded-2xl p-4 mb-3"
              />
            </View>
            <Checkbox 
              label="I currently work here"
            />

            <TouchableOpacity
              onPress={selectImage}
              className="w-auto h-60 my-4 bg-gray-800 rounded-2xl overflow-hidden border-2 border-dashed border-gray-500 items-center justify-center"
            >
              {image && <Image
                source={image} 
                className="w-full h-full"
                resizeMode="cover"
              />}
              <View className="flex-1 items-center justify-center">
                <Feather name="upload" size={48} color="white" />
                <Text className="text-gray-300 text-2xl mt-4">Upload image</Text>
              </View>
            </TouchableOpacity>

            {experienceToEdit && <FilledButton
              width="w-full"
              title="Delete experience"
              icon={<FontAwesome name="trash-o" size={18} color="white" />}
              filled={false}
              onPress={() => {
                removeExperience();
              }}
            />}
          </ScrollView>
          <View className="flex-col mt-4">
            <FilledButton
              width="w-full"
              title="Save"
              onPress={handleSave}
            />
            <FilledButton 
              width="w-full"
              title="Cancel"
              onPress={close}
              filled={false}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}