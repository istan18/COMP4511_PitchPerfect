import { SafeAreaView, Text, View } from "react-native";
import BackButton from "@/components/BackButton";
import FilledButton from "@/components/FilledButton";
import { Link, router } from "expo-router";
import Progress from "@/components/Progress";

export default function Role() {
  return (
    <View className="flex-1 bg-[#171F20]">
      <SafeAreaView className="flex-1 w-full items-center">
        <BackButton />

        <Text className="text-4xl text-white mt-8">I'm interested in...</Text>

        <Text className="text-4xl text-white mt-8">Add your education</Text>

        <View className="absolute bottom-20 w-full items-center">
          <FilledButton
            title="Start browsing!"
            onPress={() => router.push("/tabs/home")}
          />
          <Link
            href="/tabs/home"
            className="text-white text-lg underline mb-4 mt-2"
          >
            Skip
          </Link>
          <Progress filledIndex={2} length={3} />
        </View>
      </SafeAreaView>
    </View>
  );
}
