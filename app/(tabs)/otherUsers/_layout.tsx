import { Stack } from "expo-router";

export default function OtherUsersLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="profile" />
      <Stack.Screen name="reviewRating" />
      <Stack.Screen name="reviewText" />
      <Stack.Screen name="confirmation" />
    </Stack>
  );
}
