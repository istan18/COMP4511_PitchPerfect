import FilledButton from "@/components/FilledButton";
import ProjectList from "@/components/ProjectList";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, ScrollView, View } from "react-native";

export default function Connected() {
  const filters = [
    {
      title: "New",
    },
    {
      title: "Funded",
    },
    {
      title: "Time",
      icon: <Ionicons name="chevron-down" size={20} color="white" />,
    },
    {
      title: "Tags",
      icon: <Ionicons name="chevron-down" size={20} color="white" />,
    },
  ];

  return (
    <View className="flex-1 bg-[#171F20]">
      <SafeAreaView className="w-full mx-auto flex-1 items-center">
        <ScrollView className="w-full" contentContainerClassName="items-center">
          <View className="w-9/10 flex-col gap-2">
            <View className="flex-row gap-2 items-center w-full my-4">
              {filters.map((filter, index) => (
                <FilledButton
                  key={index}
                  title={filter.title}
                  icon={filter.icon}
                  otherStyles="flex-1"
                  buttonStyle="py-0"
                  textStyle="text-lg py-1"
                  filled={false}
                />
              ))}
            </View>

            <ProjectList />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
