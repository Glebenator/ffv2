import { Stack } from "expo-router";
import { ThemeProvider } from "../contexts/ThemeContext";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "../contexts/ThemeContext";
import { View } from "react-native";

function RootLayoutNav() {
  const { colors, theme } = useTheme();

  return (
    <>
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      <View style={{ flex: 1, backgroundColor: colors.background.primary }}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: colors.background.primary,
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
      </View>
    </>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <RootLayoutNav />
    </ThemeProvider>
  );
}