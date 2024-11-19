import BackButton from "@/components/BackButton";
import { SafeAreaView, Text, View } from "react-native";
import SettingItem from "@/components/SettingItem";
import { router } from "expo-router";

export default function Settings() {
  return (
    <SafeAreaView className=" flex-1 bg-background w-full items-center">
      <BackButton marginTop="mt-20" />
      <Text className="text-4xl font-light text-white mt-16">Settings</Text>
      <Text className="text-3xl font-bold text-white self-start ml-16 mt-6">
        General
      </Text>
      <View className="w-[80%] rounded-3xl mt-2 justify-center border border-white">
        <SettingItem
          label="Notifications"
          icon={require("@/assets/images/notification.png")}
          iconWidth={20}
          iconHeight={24}
        />
        <View className="border-b border-gray-700" />
        <SettingItem
          label="Privacy"
          icon={require("@/assets/images/privacy-icon.png")}
          iconWidth={22}
          iconHeight={18}
        />
        <View className="border-b border-gray-700" />
        <SettingItem
          label="Account"
          icon={require("@/assets/images/security-icon.png")}
          iconWidth={20}
          iconHeight={24}
        />
      </View>
      <Text className="text-3xl font-bold text-white self-start ml-16 mt-10">
        Accessibility
      </Text>
      <View className="w-[80%] rounded-3xl mt-2 justify-center border border-white">
        <SettingItem
          label="Text Adjustments"
          icon={require("@/assets/images/text-settings.png")}
          iconWidth={24}
          iconHeight={24}
        />
        <View className="border-b border-gray-700" />
        <SettingItem
          label="Language"
          icon={require("@/assets/images/language-icon.png")}
          iconWidth={24}
          iconHeight={24}
        />
      </View>
      <Text className="text-3xl font-bold text-white self-start ml-16 mt-10">
        Help & Support
      </Text>
      <View className="w-[80%] rounded-3xl mt-2 justify-center border border-white">
        <SettingItem
          label="About Us"
          icon={require("@/assets/images/information-icon.png")}
          iconWidth={24}
          iconHeight={24}
        />
        <View className="border-b border-gray-700" />
        <SettingItem
          label="Contact Us"
          icon={require("@/assets/images/contact-us.png")}
          iconWidth={24}
          iconHeight={24}
        />
        <View className="border-b border-gray-700" />
        <SettingItem
          label="Delete Account"
          icon={require("@/assets/images/delete-account.png")}
          iconWidth={22}
          iconHeight={17}
        />
        <View className="border-b border-gray-700" />
        <SettingItem
          label="Log Out"
          icon={require("@/assets/images/log-out.png")}
          iconWidth={23}
          iconHeight={22}
          onPress={() => router.navigate("/")}
        />
      </View>
    </SafeAreaView>
  );
}
