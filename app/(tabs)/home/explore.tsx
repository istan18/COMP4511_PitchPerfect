import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useState } from "react";
import { Searchbar } from "react-native-paper";
import Category from "@/components/Category";
import { Ionicons } from "@expo/vector-icons";
import SmallProjectCard from "@/components/SmallProjectCard";

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (text: string) => setSearchQuery(text);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-background">
        <SafeAreaView className="w-full mx-auto flex-1 items-center">
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
              <View className="flex-1 flex-row gap-8 my-4 mx-4 ml-8">
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
              <View className="flex-1 flex-row gap-4 my-4 mx-8">
                <SmallProjectCard
                  title="Inside the Box"
                  hours={1}
                  image={require("../../../assets/images/mealplanner.png")}
                  tag="Coding"
                />
                <SmallProjectCard
                  title="Sky Rocket"
                  hours={20}
                  image={require("../../../assets/images/rocket.png")}
                  tag="Maths"
                />
                <SmallProjectCard
                  title="Birdline"
                  hours={5}
                  image={require("../../../assets/images/bird.jpg")}
                  tag="Science"
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
              <View className="flex-1 flex-row gap-4 my-4 mx-8">
                <SmallProjectCard
                  title="Inside the Box"
                  hours={1}
                  image={require("../../../assets/images/mealplanner.png")}
                  tag="Coding"
                />
                <SmallProjectCard
                  title="Sky Rocket"
                  hours={20}
                  image={require("../../../assets/images/rocket.png")}
                  tag="Maths"
                />
                <SmallProjectCard
                  title="Birdline"
                  hours={5}
                  image={require("../../../assets/images/bird.jpg")}
                  tag="Science"
                />
              </View>
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}