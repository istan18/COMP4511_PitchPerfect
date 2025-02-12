import {
  Alert,
  Image,
  ImageSourcePropType,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { Experience } from "@/app/(tabs)/account";
import FilledButton from "./FilledButton";
import Checkbox from "./Checkbox";
import { Feather, FontAwesome } from "@expo/vector-icons";
import CustomDropdown from "./CustomDropdown";
import * as ImagePicker from "expo-image-picker";
import {
  calculateDuration,
  findMonthByValue,
  findValueByMonth,
  monthOptions,
} from "./ExperienceForm.helpers";

interface ExperienceFormProps {
  visible: boolean;
  experienceToEdit?: Experience | null;
  removeExperience: () => void;
  saveForm: (experience: Experience) => void;
  length: number;
  close: () => void;
}

export default function ExperienceForm({
  visible,
  experienceToEdit,
  removeExperience,
  saveForm,
  length,
  close,
}: ExperienceFormProps) {
  let start = ["", ""];
  let end = ["", ""];

  if (experienceToEdit) {
    start = experienceToEdit.start.split(" ");
    if (experienceToEdit.end !== "Present") {
      end = experienceToEdit.end.split(" ");
    }
  }

  const [disableEndDate, setDisableEndDate] = useState(
    experienceToEdit?.end === "Present" || false
  );
  const [title, setTitle] = useState(experienceToEdit?.title ?? "");
  const [company, setCompany] = useState(experienceToEdit?.company ?? "");
  const [startMonth, setStartMonth] = useState(
    findValueByMonth(start[0]) ?? ""
  );
  const [startYear, setStartYear] = useState(start[1] ?? "");
  const [endMonth, setEndMonth] = useState(findValueByMonth(end[0]) ?? "");
  const [endYear, setEndYear] = useState(end[1] ?? "");
  const [image, setImage] = useState<ImageSourcePropType | null>(
    experienceToEdit?.imageSource ?? null
  );

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

  const handleSave = () => {
    if (!title || !company || !startMonth || !startYear) {
      Alert.alert("Please fill in the required fields");
      return;
    }

    saveForm({
      id: experienceToEdit?.id || length + 1,
      title,
      company,
      start: findMonthByValue(startMonth) + " " + startYear,
      end: disableEndDate
        ? "Present"
        : findMonthByValue(endMonth) + " " + endYear,
      durationLength: calculateDuration(
        disableEndDate,
        endYear,
        startYear,
        endMonth,
        startMonth
      ),
      imageSource: image,
    });
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setCompany("");
    setStartMonth("");
    setStartYear("");
    setEndMonth("");
    setEndYear("");
    setImage(null);
    setDisableEndDate(false);
  };

  return (
    <Modal visible={visible} animationType="none" transparent={true}>
      <View className="flex-1 items-center justify-center bg-black/50 px-4">
        <View className="w-full h-[80%] bg-background rounded-2xl p-4 px-8">
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text className="text-white text-center text-3xl mt-4 mb-8">
              Add an experience
            </Text>

            <TextInput
              placeholder="Role*"
              placeholderTextColor={"#6B7280"}
              style={{ fontSize: 18 }}
              value={title}
              onChangeText={setTitle}
              className="color-white border border-gray-500 rounded-2xl p-4 mb-3"
            />
            <TextInput
              placeholder="Company*"
              placeholderTextColor={"#6B7280"}
              style={{ fontSize: 18 }}
              value={company}
              onChangeText={setCompany}
              className="color-white border border-gray-500 rounded-2xl p-4 mb-3"
            />

            <View className="flex-row items-center gap-2 mb-3">
              <CustomDropdown
                placeholder="Start month*"
                value={startMonth}
                setValue={setStartMonth}
                options={monthOptions}
                otherStyles={{ flex: 1, borderColor: "#6B7280" }}
              />
              <TextInput
                keyboardType="numeric"
                placeholder="Start year*"
                placeholderTextColor={"#6B7280"}
                style={{ fontSize: 18, flex: 1, marginBottom: 0 }}
                value={startYear}
                onChangeText={setStartYear}
                maxLength={4}
                className="color-white border border-gray-500 rounded-2xl p-4 mb-3"
              />
            </View>

            <View className="flex-row gap-2 mb-2">
              <CustomDropdown
                placeholder="End month"
                value={endMonth}
                setValue={setEndMonth}
                options={monthOptions}
                otherStyles={{
                  flex: 1,
                  borderColor: disableEndDate ? "#444444" : "#6B7280",
                }}
                disable={disableEndDate}
              />
              <TextInput
                keyboardType="numeric"
                placeholder="End year"
                placeholderTextColor={"#6B7280"}
                style={{ fontSize: 18, flex: 1, marginBottom: 0 }}
                value={endYear}
                onChangeText={setEndYear}
                maxLength={4}
                className={`${disableEndDate ? "border-disabledGray" : "border-gray-500"} color-white border rounded-2xl p-4 mb-3`}
                editable={!disableEndDate}
              />
            </View>
            <Checkbox
              label="I currently work here"
              toggle={() => setDisableEndDate(!disableEndDate)}
              initiallyChecked={disableEndDate}
            />

            <TouchableOpacity
              onPress={selectImage}
              className="w-auto h-60 my-4 bg-gray-800 rounded-2xl overflow-hidden border-2 border-dashed border-gray-500 items-center justify-center"
            >
              {image && (
                <Image
                  source={image}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              )}
              <View className="flex-1 items-center justify-center">
                <Feather name="upload" size={48} color="#6B7280" />
                <Text className="text-gray-400 text-2xl mt-4">
                  Upload image
                </Text>
              </View>
            </TouchableOpacity>

            {experienceToEdit && (
              <FilledButton
                width="w-full"
                title="Delete experience"
                icon={<FontAwesome name="trash-o" size={18} color="white" />}
                filled={false}
                onPress={() => {
                  removeExperience();
                }}
              />
            )}
          </ScrollView>
          <View className="flex-col mt-4">
            <FilledButton width="w-full" title="Save" onPress={handleSave} />
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
