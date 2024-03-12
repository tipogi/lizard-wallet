import { Colors } from "@/constants";
import { INDEX } from "@/constants/navigation";
import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: INDEX,
};

export default function SettingsLayout() {
  return ( 
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarColor: Colors.Green,
      }}

    >
      <Stack.Screen
        name={INDEX}
        options={{
          //animation: "simple_push"
        }}
      />
    </Stack>
  );
}