import { Image, SafeAreaView, Text, View } from "react-native";
import React from "react";
import { Entypo, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import FullWidthButton from "@/components/FullWidthButton";
import FilledButton from "@/components/FilledButton";
import Progress from "@/components/Progress";
import BackButton from "@/components/BackButton";
import Track from "@/assets/images/track.png";
import Compensation from "@/assets/images/compensation.png";
import Money from "@/assets/images/money.png";
import { router } from "expo-router";

const Edit = () => {
  return (
    <SafeAreaView className={"flex-1 bg-background"}>
      <BackButton />
      <Text className={"mt-20 text-center mx-auto text-5xl mb-32 text-white"}>
        Customise
      </Text>
      <View className={"flex flex-col items-center justify-center"}>
        <View className={"flex flex-col w-full"}>
          <FullWidthButton
            leftIcon={<Feather name={"user-plus"} size={32} color="white" />}
            rightIcon={
              <Entypo name={"chevron-thin-right"} size={28} color="white" />
            }
            text={"Add collaborators"}
            marginLeft={"ml-[23px]"}
            onPress={() => router.push("/post/customise/collaborators")}
          />
          <FullWidthButton
            leftIcon={<Image className="h-[26px] w-[26px]" source={Track} />}
            rightIcon={
              <Entypo name={"chevron-thin-right"} size={28} color="white" />
            }
            text={"Set project progress"}
            marginLeft={"ml-[22px]"}
            onPress={() => router.push("/post/customise/progress")}
          />
          <FullWidthButton
            leftIcon={
              <Image className="h-[26px] w-[26px]" source={Compensation} />
            }
            rightIcon={
              <Entypo name={"chevron-thin-right"} size={28} color="white" />
            }
            text={"Add compensation information"}
            marginLeft={"ml-[22px]"}
            onPress={() => router.push("/post/customise/compensation")}
          />
          <FullWidthButton
            leftIcon={<Feather name={"clock"} size={28} color="white" />}
            rightIcon={
              <Entypo name={"chevron-thin-right"} size={28} color="white" />
            }
            text={"Set time commitment expectations"}
            marginLeft={"ml-[21px]"}
            onPress={() => router.push("/post/customise/time")}
          />
          <FullWidthButton
            leftIcon={<Image className="h-[26px] w-[26px]" source={Money} />}
            rightIcon={
              <Entypo name={"chevron-thin-right"} size={28} color="white" />
            }
            text={"Add funding information"}
            marginLeft={"ml-[21px]"}
            onPress={() => router.push("/post/customise/funding")}
          />
          <FullWidthButton
            leftIcon={
              <MaterialCommunityIcons
                name={"clipboard-text-outline"}
                size={28}
                color="white"
              />
            }
            rightIcon={
              <Entypo name={"chevron-thin-right"} size={28} color="white" />
            }
            text={"Edit application questions"}
            hasBottomBorder={true}
            marginLeft={"ml-[20px]"}
            onPress={() => router.push("/post/customise/application")}
          />
        </View>
      </View>
      <View className={"mx-auto w-full absolute bottom-12"}>
        <FilledButton
          filled={true}
          title={"Share"}
          onPress={() => {
            // Clear router
            router.dismissAll();
            router.replace("/post/confirmation");
          }}
          otherStyles={"mb-4"}
        />
        <Progress filledIndex={2} length={3} />
      </View>
    </SafeAreaView>
  );
};

export default Edit;
