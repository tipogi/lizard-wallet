import { Colors } from "@/constants";
import { DELETE_ACCOUNT, IMPORT_ACCOUNT, INDEX } from "@/constants/navigation";
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
        name={IMPORT_ACCOUNT}
      />
      <Stack.Screen
        name={DELETE_ACCOUNT}
      />
    </Stack>
  );
}