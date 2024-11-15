import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import ApplicantCard from "@/components/ApplicantCard";
import BackButton from "@/components/BackButton";

const images = {
  man: require("@/assets/images/man.png"),
  man2: require("@/assets/images/man2.jpg"),
  woman: require("@/assets/images/woman.jpg"),
};

const Index = () => {
  return (
    <SafeAreaView className={"flex-1 bg-background"}>
      <BackButton />
      <Text className={"mt-20 text-center mx-auto text-5xl mb-8 text-white"}>
        Applicants Summary
      </Text>
      <View
        className={"mt-2 flex flex-col justify-center items-center gap-y-8"}
      >
        <ApplicantCard
          name="Christian Tolentino"
          location="SYDNEY, AU"
          time="11:59 PM"
          image={
            <Image
              className={"rounded-full  ml-4 h-20 w-20 "}
              source={images.man}
            />
          }
        />
        <ApplicantCard
          name="Angela Shan"
          location="SYDNEY, AU"
          time="11:59 PM"
          image={
            <Image
              className={"rounded-full  ml-4 h-20 w-20 "}
              source={images.woman}
            />
          }
        />
        <ApplicantCard
          name="Ahmad Bakhtiari"
          location="SYDNEY, AU"
          time="11:59 PM"
          image={
            <Image
              className={"rounded-full  ml-4 h-20 w-20 "}
              source={images.man2}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Index;
