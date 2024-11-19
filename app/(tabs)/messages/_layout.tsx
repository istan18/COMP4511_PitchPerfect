import { Stack } from "expo-router";

export default function MessageLayout() {
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
          title: "Messages",
        }}
      />
      <Stack.Screen name="individual" options={{ title: "Individual" }} />
    </Stack>
  );
}
