import { Colors } from "@/constants";
import { DELETE_ACCOUNT, EDIT_ACCOUNT, IMPORT_ACCOUNT, INDEX } from "@/constants/navigation";
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
      />
      <Stack.Screen
        name={IMPORT_ACCOUNT}
        options={{
          statusBarColor: Colors.Background
        }}
      />
      <Stack.Screen
        name={EDIT_ACCOUNT}
        options={{
          statusBarColor: Colors.Background
        }}
      />
      <Stack.Screen
        name={DELETE_ACCOUNT}
        options={{
          statusBarColor: Colors.Background
        }}
      />
    </Stack>
  );
}