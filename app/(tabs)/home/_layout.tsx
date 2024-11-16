import { Stack } from "expo-router";

export default function PostLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#171F20" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      {/* <Stack.Screen name="explore" options={{ title: "Explore" }} /> */}
      {/* <Stack.Screen name="connected" options={{ title: "Connected" }} /> */}
    </Stack>
  );
}
