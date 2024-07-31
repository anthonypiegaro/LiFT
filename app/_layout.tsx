import { Stack } from "expo-router";

export default function Tabs() {
    return (
        <Stack>
            <Stack.Screen 
                name="(tabs)"
                options={{
                    headerShown: false
                }}
            />
        </Stack>
    )
}