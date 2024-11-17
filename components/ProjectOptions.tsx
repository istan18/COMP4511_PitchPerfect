import { View, Text } from "react-native";

interface ProjectOptionsProps {
	setIsVisible: () => void,
	options: {name: string, icon: React.ReactElement}[];
	otherStyles?: string;
}

export default function ProjectOptions({ setIsVisible, options, otherStyles }: ProjectOptionsProps) {
	return (			
		<View
			className={`bg-tagBackground rounded-2xl w-[50%] shadow-xl absolute mt-8 right-0 z-50 ${otherStyles}`}
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