import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import Slider from "@react-native-community/slider";
import BackButton from "@/components/BackButton";
import FilledButton from "@/components/FilledButton";
import { router } from "expo-router";

const formatDate = (date: Date) => {
  return date.toISOString().split("T")[0];
};

const Time = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(0);
  const [selectedDates, setSelectedDates] = useState<{
    [date: string]: { selected: boolean };
  }>({});

  const handleHoursChange = (value: number) => {
    setHoursPerWeek(value);
  };

  const onDayPress = (day: any) => {
    const newSelectedDates = { ...selectedDates };

    if (newSelectedDates[day.dateString]) {
      newSelectedDates[day.dateString].selected =
        !newSelectedDates[day.dateString].selected;
    } else {
      newSelectedDates[day.dateString] = { selected: true };
    }

    setSelectedDates(newSelectedDates);
  };

  return (
    <SafeAreaView className="flex-1 bg-background p-4">
      <BackButton />
      <Text className="text-center text-4xl mt-20 mb-12 text-white">
        Set Time Commitment
      </Text>

      <View className="mb-4">
        <Text className="text-3xl text-left w-3/4 mx-auto  text-white mb-4">
          Hours per week: {hoursPerWeek === 50 ? "50+" : hoursPerWeek}
        </Text>
        <View className="relative w-full flex items-center">
          <Slider
            style={{ width: "80%", height: 40 }}
            minimumValue={0}
            maximumValue={50}
            step={1}
            minimumTrackTintColor="#3A5B5B"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#3A5B5B"
            value={hoursPerWeek}
            onValueChange={handleHoursChange}
          />
        </View>
      </View>

      <View className="mt-8">
        <Text className="text-3xl text-center text-white mb-4">
          Select Working Days
        </Text>
        <Calendar
          onDayPress={onDayPress}
          markedDates={selectedDates}
          minDate={formatDate(new Date())}
          theme={{
            backgroundColor: "#171F20",
            calendarBackground: "#171F20",
            textSectionTitleColor: "#b6c1cd",
            selectedDayBackgroundColor: "#3A5B5B",
            selectedDayTextColor: "white",
            todayTextColor: "#5d9494",
            dayTextColor: "#d9e1e8",
            textDisabledColor: "#615f5f",
            arrowColor: "white",
            monthTextColor: "white",
            indicatorColor: "white",
            textMonthFontSize: 20,
            textDayFontSize: 16,
          }}
        />
      </View>
      <View
        className={"absolute bottom-12 left-12  w-4/5 mx-auto rounded-2xl "}
      >
        <FilledButton
          otherStyles={"w-3/4"}
          title={"Save"}
          onPress={() => router.back()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Time;
