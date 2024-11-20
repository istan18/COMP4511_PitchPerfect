import ProjectList from "@/components/ProjectList";
import { SafeAreaView, ScrollView, View } from "react-native";
import Filters from "@/components/Filters";

export default function Connected() {
  return (
    <View className="flex-1 bg-background">
      <SafeAreaView className="w-full mx-auto flex-1 items-center">
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          className="w-full"
          contentContainerClassName="items-center"
        >
          <View className="w-9/10 flex-col gap-2">
            <Filters />
            <ProjectList />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
