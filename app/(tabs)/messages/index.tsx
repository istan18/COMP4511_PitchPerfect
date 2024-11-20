import React from "react";
import {
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import BackButton from "@/components/BackButton";
import { Searchbar } from "react-native-paper";
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import FullWidthButton from "@/components/FullWidthButton";
import IonIcons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

const Index = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView className={"flex-1 bg-background"}>
        <BackButton marginTop="mt-12" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            className={
              "w-full flex mt-12 flex-row justify-between px-8 items-center"
            }
          >
            <Text className={"text-4xl mb-2 text-white text-left"}>
              Messages
            </Text>
            <MaterialCommunityIcons
              name={"message-plus-outline"}
              size={28}
              color={"white"}
            />
          </View>
          <Searchbar
            placeholder="Search Direct Messages"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={styles.searchbar}
            placeholderTextColor="#9ca3af"
            icon={() => (
              <AntDesign name={"search1"} color="#9ca3af" size={28} />
            )}
            inputStyle={{ color: "#FFFFFF", fontSize: 20 }}
            theme={{ colors: { primary: "#FFFFFF", text: "#FFFFFF" } }}
          />
          <View className={"w-full flex flex-col mt-4"}>
            <FullWidthButton
              rightIcon={
                <Entypo name={"chevron-thin-right"} size={32} color="white" />
              }
              leftIcon={
                <IonIcons name={"mail-outline"} size={32} color={"white"} />
              }
              text={
                <View className={"w-80"}>
                  <Text className={"ml-2 text-white text-2xl"}>
                    Message Requests
                  </Text>
                </View>
              }
              marginLeft={"ml-8"}
              height={"h-20"}
            />
            <FullWidthButton
              onPress={() => router.push("/messages/individual")}
              leftIcon={
                <Image
                  source={require("@/assets/images/jennyProfile.png")}
                  className={"rounded-full h-14 w-14"}
                />
              }
              text={
                <View className={"flex flex-col"}>
                  <Text className={"font-bold text-left text-white text-2xl"}>
                    Jenny Liu
                  </Text>
                  <View className={"flex flex-row"}>
                    <Text
                      numberOfLines={1}
                      className={"text-white text-left w-[18rem] text-lg"}
                    >
                      Hey! I’m doing great :) It’s been a while since we last
                    </Text>
                    <Text className={"text-gray-400 text-md mt-1"}>⋅ 12m</Text>
                  </View>
                </View>
              }
              height={"h-[5.5rem]"}
              marginLeft={"ml-4"}
              marginRight={"mr-4"}
              rightIcon={
                <View className={"bg-notification rounded-full h-1 w-1"} />
              }
            />
            <FullWidthButton
              onPress={() => router.push("/messages/individual")}
              leftIcon={
                <Image
                  source={require("@/assets/images/woman.jpg")}
                  className={"rounded-full h-14 w-14"}
                />
              }
              text={
                <View className={"flex flex-col"}>
                  <Text className={"font-bold text-left text-white text-2xl"}>
                    Angela Shan
                  </Text>
                  <View className={"flex flex-row"}>
                    <Text
                      numberOfLines={1}
                      className={"text-white text-left w-[18rem] text-lg"}
                    >
                      I really like your project, Inside the Box!
                    </Text>
                    <Text className={"text-gray-400 text-md mt-1"}>⋅ 50m</Text>
                  </View>
                </View>
              }
              height={"h-[5.5rem]"}
              marginLeft={"ml-4"}
              marginRight={"mr-4"}
              rightIcon={
                <View className={"bg-notification rounded-full h-1 w-1"} />
              }
            />
            <FullWidthButton
              onPress={() => router.push("/messages/individual")}
              leftIcon={
                <Image
                  source={require("@/assets/images/man2.jpg")}
                  className={"rounded-full h-14 w-14"}
                />
              }
              text={
                <View className={"flex flex-col"}>
                  <Text className={"font-bold text-left text-white text-2xl"}>
                    Ahmad Bakhtiari
                  </Text>
                  <View className={"flex flex-row"}>
                    <Text
                      numberOfLines={1}
                      className={"text-white text-left max-w-[21rem] text-lg"}
                    >
                      How's the work on the frontend goi...
                    </Text>
                    <Text className={"text-gray-400 text-md mt-1"}>⋅ 3h</Text>
                  </View>
                </View>
              }
              height={"h-[5.5rem]"}
              marginLeft={"ml-4"}
              marginRight={"mr-4"}
            />
            <FullWidthButton
              onPress={() => router.push("/messages/individual")}
              leftIcon={
                <Image
                  source={require("@/assets/images/man3.jpg")}
                  className={"rounded-full h-14 w-14"}
                />
              }
              text={
                <View className={"flex flex-col"}>
                  <Text className={"font-bold text-left text-white text-2xl"}>
                    James Wong
                  </Text>
                  <View className={"w-[21rem] flex flex-row"}>
                    <Text
                      numberOfLines={1}
                      className={"text-white text-left mr-2 text-lg"}
                    >
                      Good job for Deliverable 1!
                    </Text>
                    <Text className={"text-gray-400 text-md mt-1"}>⋅ 1d</Text>
                  </View>
                </View>
              }
              hasBottomBorder={true}
              height={"h-[5.5rem]"}
              marginLeft={"ml-4"}
              marginRight={"mr-4"}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  searchbar: {
    margin: 24,
    width: "85%",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 16,
    marginHorizontal: "auto",
  },
});
export default Index;
