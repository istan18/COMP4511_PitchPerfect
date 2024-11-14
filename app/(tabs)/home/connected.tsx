import ProjectListCard from "@/components/ProjectListCard";
import { View, SafeAreaView, ScrollView } from "react-native";

export default function Connected() {
  return (
    <View className="flex-1 bg-[#171F20]">
      <SafeAreaView className="w-full mx-auto flex-1 items-center">
        <ScrollView
            className="w-full"
            contentContainerClassName="items-center"
        >
          <View className="w-[80%] flex-col gap-2 mt-12">
            <ProjectListCard 
              manager="Jenny Liu"
              image={require("../../../assets/images/mealplanner.png")}
              title="Inside the Box"
              description="This is a description of project 1."
              hours={1}
              tags={["Coding", "Javascript"]}
            />
            <ProjectListCard 
              manager="Samantha Fang"
              image={require("../../../assets/images/rocket.png")}
              title="Sky Rocket"
              description="This is a description of project 2."
              hours={20}
              tags={["Maths", "UI/UX"]}
            />
            <ProjectListCard 
              manager="Bob Thorton"
              image={require("../../../assets/images/bird.jpg")}
              title="Birdline"
              description="This is a description of project 3."
              hours={5}
              tags={["Science", "Python"]}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}