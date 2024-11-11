import { Tabs, usePathname } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabsLayout() {
  const pathname = usePathname();
  const isPostScreen = pathname.startsWith("/post");

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: isPostScreen
          ? { display: "none" }
          : {
              height: 95,
              backgroundColor: "#171F20",
            },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} className="mt-4" />
          ),
        }}
      />
      <Tabs.Screen
        name="project"
        options={{
          title: "Projects",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="briefcase-outline"
              color={color}
              size={size}
              className="mt-4"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          title: "Post",
          href: "/post",
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="plus-circle"
              color={color}
              size={size}
              className={"mt-4"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="message-circle"
              color={color}
              size={size}
              className={"mt-4"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color={color}
              size={size}
              className="mt-4"
            />
          ),
        }}
      />
    </Tabs>
  );
}
