import { Stack } from "expo-router";

export default function AccountLayout() {
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
          title: "Account",
        }}
      />
      {/* <Stack.Screen name="edit" options={{ title: "Edit profile" }} /> */}
      {/* <Stack.Screen name="settings" options={{ title: "Settings" }} /> */}
    </Stack>
  );
}
