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
import RecommendedProjects from "@/components/RecommendedProjects";
import ProjectList from "@/components/ProjectList";
import Filters from "@/components/Filters";

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { name: 'Coding', icon: <Ionicons name="code" size={24} color="lightblue" /> },
    { name: 'Maths', icon: <Ionicons name="calculator" size={24} color="pink" /> },
    { name: 'Arts', icon: <Ionicons name="brush" size={24} color="cyan" />},
    { name: 'Science', icon: <Ionicons name="flask" size={24} color="lightgreen" /> },
    { name: 'Health', icon: <Ionicons name="medkit" size={24} color="lightyellow" /> },
    { name: 'Business', icon: <Ionicons name="bar-chart" size={24} color="purple" /> },
  ];
  
  const handleSelectCategory = (category: string) => {
    setSelectedCategory((prev) =>
      category === prev ? '' : category
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-background">
        <SafeAreaView className="w-full mx-auto flex-1 items-center">
          <ScrollView
            className="w-full"
            contentContainerClassName="items-center"
          >
            <Searchbar
              placeholder="Search projects or people..."
              onChangeText={setSearchQuery}
              value={searchQuery}
              style={{ marginTop: 24, marginBottom: 8, width: "80%"}}
            />
      
            {searchQuery && (
              <View className="mx-8">
                <Filters rowStyles="mb-0 mt-2" />
              </View>
            )} 

            <View className="w-[80%]">
              <Text className="text-2xl text-white font-bold mt-4">
                Search by category
              </Text>
            </View>
            <ScrollView
              horizontal
              className="w-full"
              showsHorizontalScrollIndicator={false}
            >
              <View className="flex-1 flex-row gap-8 my-4 mx-4 ml-8">
                {categories.map((category) => (
                  <Category
                    key={category.name}
                    category={category.name}
                    icon={category.icon}
                    isSelected={selectedCategory === category.name}
                    setIsSelected={() => handleSelectCategory(category.name)}
                  />
                ))}
              </View>
            </ScrollView>
          
            {selectedCategory || searchQuery 
              ? <View className="mt-4 px-8"><ProjectList searchQuery={searchQuery} /></View>
              : <RecommendedProjects />
            }
          </ScrollView>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}