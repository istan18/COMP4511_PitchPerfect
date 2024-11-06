// tabs/post/_layout.tsx
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
          title: "Post",
        }}
      />
      <Stack.Screen name="tags" options={{ title: "Tags" }} />
      <Stack.Screen name="edit" options={{ title: "Tags" }} />
    </Stack>
  );
}
