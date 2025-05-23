import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#FAFAF9',
        },
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{
          title: "Home",
        }}
      />
    </Stack>
  );
}