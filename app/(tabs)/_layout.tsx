import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

import { Colors } from "@/constants/Colors";

export default function TabLayout() {
    const iconSize = 28;

    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: Colors.dark.secondaryBackground, 
                    borderTopColor: Colors.dark.outline,
                },
                tabBarLabelStyle: {
                    fontWeight: 800,
                },
                tabBarInactiveTintColor: Colors.dark.secondaryText,
                tabBarActiveTintColor: Colors.dark.text,
                headerShown: false,
            }}
        >
            <Tabs.Screen 
                name="analytics"
                options={{
                    title: "Analytics",
                    tabBarIcon: ({ color }) => <Ionicons name="bar-chart" size={iconSize} color={color} />
                }}
            />
            <Tabs.Screen 
                name="program"
                options={{
                    title: "Program",
                    tabBarIcon: ({ color }) => <Ionicons name="book" size={iconSize} color={color} />
                }}
            />
            <Tabs.Screen 
                name="index"
                options={{
                    title: "LiFT",
                    tabBarIcon: ({ color }) => <Ionicons name="barbell" size={iconSize} color={color} />
                }}
            />
            <Tabs.Screen 
                name="exercises"
                options={{
                    title: "Exercises",
                    tabBarIcon: ({ color }) => <Ionicons name="add-circle" size={iconSize} color={color} />
                }}
            />
            <Tabs.Screen 
                name="sync"
                options={{
                    title: "Sync",
                    tabBarIcon: ({ color }) => <Ionicons name="cloud" size={iconSize} color={color} />
                }}
            />
        </Tabs>
    )
}