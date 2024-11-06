import { View, Text, SafeAreaView } from "react-native";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import { Link } from "expo-router";
import Dots from "@/components/Dots";

export default function Role() {
    return (
        <View className="flex-1 bg-[#171F20]">
            <SafeAreaView className="flex-1 w-full items-center">
                <BackButton />
                <Text className="text-4xl text-white mt-8">I'm interested in...</Text>

                <Text className="text-4xl text-white mt-8">Add your education</Text>
                
                <View className="absolute bottom-20 w-full items-center"> 
                    <Button title="Start browsing!" route="/tabs/home" backAllowed={true} />
                    <Link href="/tabs/home" className="text-white text-lg underline mb-4 mt-2">Skip</Link>
                    <Dots currentIndex={2} totalNo={3} />
                </View>
            </SafeAreaView>
        </View>
    )

}