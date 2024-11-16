import { View, Text } from "react-native";

interface ProjectOptionsProps {
	isVisible: boolean,
	setIsVisible: () => void,
}

export default function ProjectOptions({ isVisible, setIsVisible }: ProjectOptionsProps) {
	const options = [
		"Collaborate", "Message", "Alt text", "Report"
	];

	return (			
		<View
			className="bg-gray-800 rounded-2xl w-[50%] shadow-xl absolute mt-8 right-0 z-50"
		>
			{options.map((option, index) => (
				<View>
					<Text
						className="text-lg py-3 px-4 text-white"
						onPress={setIsVisible}
						key={index}
					>
						{option}
					</Text>
					{index < options.length - 1 &&  <View className="border-gray-500" style={{borderWidth: 0.5}}/>}
				</View>
			))}
		</View>
	);
};