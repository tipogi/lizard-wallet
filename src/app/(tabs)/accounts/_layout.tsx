import { Colors } from "@/constants";
import { ADD_ACCOUNT, INDEX } from "@/constants/navigation";
import { Stack } from "expo-router";

// export const unstable_settings = {
//   initialRouteName: INDEX,
// };

export default function AccountLayout() {
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
      <Stack.Screen
        name={ADD_ACCOUNT}
        options={{
          //animation: "simple_push"
        }}
      />
    </Stack>
  );
}