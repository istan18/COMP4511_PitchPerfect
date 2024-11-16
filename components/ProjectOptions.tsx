import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

interface ProjectOptionsProps {
	setIsVisible: () => void,
}

export default function ProjectOptions({ setIsVisible }: ProjectOptionsProps) {
	const options = [
		{ name: "Collaborate", icon: <Ionicons name="people-outline" size={20} color="white" className="p-4" /> },
		{ name: "Message", icon: <Feather name="message-circle" size={20} color="white" className="p-4" /> },
		{ name: "Alt text", icon: <Ionicons name="image-outline" size={20} color="white" className="p-4" /> },
		{ name: "Report", icon: <Ionicons name="flag-outline" size={20} color="white" className="p-4" /> },
	];

	return (			
		<View
			className="bg-gray-800 rounded-2xl w-[50%] shadow-xl absolute mt-8 right-0 z-50"
		>
			{options.map((option, index) => (
				<View key={index}>
					<View className="flex-row items-center">
						{option.icon}
						<Text
							key={index}
							className="text-lg py-3 text-white"
							onPress={setIsVisible}
						>
							{option.name}
						</Text>
					</View>
					{index < options.length - 1 &&  <View className="border-gray-500" style={{borderWidth: 0.5}}/>}
				</View>
			))}
		</View>
	);
};