import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      tabBarStyle: {
        height: 95,
        backgroundColor: '#171F20',
      },
      tabBarLabelStyle: {
        fontSize: 16,
      },
      headerShown: false,
    }}>
      <Tabs.Screen name="home" options={{ title: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} className="mt-4" />
        ),
       }} />
      {/* ENABLE ONCE YOU HAVE CREATED THE SCREENS
      <Tabs.Screen name="projects" />
      <Tabs.Screen name="post" />
      <Tabs.Screen name="messages" />
      <Tabs.Screen name="account" /> */}
    </Tabs>
  );
}