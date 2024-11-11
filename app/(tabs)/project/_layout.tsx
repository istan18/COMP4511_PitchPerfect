import { Stack } from "expo-router";

export default function ProjectLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="myProjects" />
      <Stack.Screen name="myApplications" />
      <Stack.Screen name="project-overview" />
    </Stack>
  );
}
