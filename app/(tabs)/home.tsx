import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { Searchbar } from "react-native-paper";
import Category from "@/components/Category";
import { Ionicons } from "@expo/vector-icons";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Explore");
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (text: string) => setSearchQuery(text);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-[#171F20]">
        <SafeAreaView className="w-full flex-1 items-center">
          <View className="flex-row w-full justify-around items-center">
            <TouchableOpacity
              onPress={() => setActiveTab("Explore")}
              className={`px-8 py-4 ${activeTab == "Explore" && "border-b-2 border-white"}`}
            >
              <Text
                className={`text-gray-400 text-3xl ${activeTab == "Explore" && "text-white"}`}
              >
                Explore
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActiveTab("Connected")}
              className={`px-8 py-4 ${activeTab == "Connected" && "border-b-2 border-white"}`}
            >
              <Text
                className={`text-gray-400 text-3xl ${activeTab == "Connected" && "text-white"}`}
              >
                Connected
              </Text>
            </TouchableOpacity>
          </View>
          <View className="w-full h-0.5 bg-gray-500" />

          <ScrollView
            className="w-full"
            contentContainerClassName="items-center"
          >
            <Searchbar
              placeholder="Search for a project..."
              onChangeText={setSearchQuery}
              value={searchQuery}
              style={{ margin: 24, width: "80%" }}
            />

            <View className="w-[80%]">
              <Text className="text-2xl text-white font-bold mt-2">
                Search by category
              </Text>
            </View>
            <ScrollView
              horizontal
              className="w-full"
              showsHorizontalScrollIndicator={false}
            >
              <View className="flex-1 flex-row gap-8 my-4 mx-4">
                <Category
                  category="Coding"
                  icon={<Ionicons name="code" size={24} color="lightblue" />}
                />
                <Category
                  category="Maths"
                  icon={<Ionicons name="calculator" size={24} color="pink" />}
                />
                <Category
                  category="Arts"
                  icon={<Ionicons name="brush" size={24} color="cyan" />}
                />
                <Category
                  category="Science"
                  icon={<Ionicons name="flask" size={24} color="lightgreen" />}
                />
                <Category
                  category="Health"
                  icon={
                    <Ionicons name="medkit" size={24} color="lightyellow" />
                  }
                />
                <Category
                  category="Business"
                  icon={<Ionicons name="bar-chart" size={24} color="purple" />}
                />
              </View>
            </ScrollView>

            <View className="w-[80%]">
              <Text className="text-2xl text-white font-bold mt-4">
                Featured projects
              </Text>
            </View>
            <ScrollView
              horizontal
              className="w-full"
              showsHorizontalScrollIndicator={false}
            >
              <View className="flex-1 flex-row gap-4 my-4 mx-4">
                <ProjectCard
                  title="Inside the Box"
                  hours={1}
                  frequency="week"
                  image={require("../../assets/images/mealplanner.png")}
                />
                <ProjectCard
                  title="Sky Rocket"
                  hours={20}
                  frequency="month"
                  image={require("../../assets/images/rocket.png")}
                />
                <ProjectCard
                  title="Birdline"
                  hours={5}
                  frequency="week"
                  image={require("../../assets/images/bird.jpg")}
                />
              </View>
            </ScrollView>

            <View className="w-[80%]">
              <Text className="text-2xl text-white font-bold mt-4">
                Based on your skills
              </Text>
            </View>
            <ScrollView
              horizontal
              className="w-full"
              showsHorizontalScrollIndicator={false}
            >
              <View className="flex-1 flex-row gap-4 my-4 mx-4">
                <ProjectCard
                  title="Inside the Box"
                  hours={1}
                  frequency="week"
                  image={require("../../assets/images/mealplanner.png")}
                />
                <ProjectCard
                  title="Sky Rocket"
                  hours={20}
                  frequency="month"
                  image={require("../../assets/images/rocket.png")}
                />
                <ProjectCard
                  title="Birdline"
                  hours={5}
                  frequency="week"
                  image={require("../../assets/images/bird.jpg")}
                />
              </View>
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}
