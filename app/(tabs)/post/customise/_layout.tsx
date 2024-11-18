import { Stack } from "expo-router";

export default function CustomiseLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#171F20" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        headerShown: false,
      }}
    >
      <Stack.Screen name="collaborators" options={{ title: "Collaborators" }} />
      <Stack.Screen name="progress" options={{ title: "Progress" }} />
      <Stack.Screen name="compensation" options={{ title: "Compensation" }} />
      <Stack.Screen name="time" options={{ title: "Time" }} />
      <Stack.Screen name="funding" options={{ title: "Funding" }} />
      <Stack.Screen name="application" options={{ title: "Application" }} />
    </Stack>
  );
}
