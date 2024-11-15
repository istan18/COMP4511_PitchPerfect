import { Tabs, usePathname } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabsLayout() {
  const pathname = usePathname();
  const hideTab =
    pathname.startsWith("/post") ||
    pathname === "/messages/individual" ||
    pathname === "/project/applicants/confirmation";

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: hideTab
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
          href: "/home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="project"
        options={{
          title: "Projects",
          href: "/project",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          title: "Post",
          href: "/post",
          tabBarIcon: ({ color, size }) => (
            <Feather name="plus-circle" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          href: "/messages",
          title: "Messages",
          tabBarIcon: ({ color, size }) => (
            <Feather name="message-circle" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          href: "/account",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
