import { Text, View, TouchableOpacity, Image, ImageURISource } from "react-native";
import { router } from "expo-router";

interface FilledButtonProps {
  icon?: ImageURISource;
  filled?: boolean;
  title: string;
  route: string;
}

export default function FilledButton({ icon, filled = true, title, route }: FilledButtonProps) {
  return (
    <View className="flex w-[80%] py-2">
      <TouchableOpacity 
        className= {`flex-row relative items-center rounded-2xl py-4 ${filled ? 'bg-[#F5E5C9]' : 'bg-[#171F20] border border-white'} `} 
        onPress={() => router.replace(route as any)}
      >
        {icon && <Image source={icon} className="w-8 h-8 absolute left-4"/>}
        <Text className={`text-xl text-center flex-1 ${filled || 'text-white'}`}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}