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
      <Stack.Screen name="generalForm" />
      <Stack.Screen name="specialisedForm" />
      <Stack.Screen name="applicants" />
      <Stack.Screen name="confirmation" />
    </Stack>
  );
}
