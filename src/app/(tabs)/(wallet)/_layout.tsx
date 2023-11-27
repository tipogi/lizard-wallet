import { Stack } from "expo-router";
import { Colors } from "@/constants";
import { INDEX, RECEIVE_SCREEN, TX_SCREEN, UTXO_SCREEN } from "@/constants/navigation";

// Prevent the splash screen from auto-hiding before asset loading is complete.

// export const unstable_settings = {
// 	// Ensure that reloading on `/modal` keeps a back button present.
// 	initialRouteName: 'index',
// };

// export default function WalletLayout() {
//     return (
//         <Stack
//             initialRouteName="index"
//             screenOptions={{
//                 headerShown: false,
//             }}
//         >
//             <Stack.Screen name="index" options={{}} />
//             <Stack.Screen name="receive" options={{}} />
//             <Stack.Screen name="transactions" options={{}} />
//             <Stack.Screen name="utxos" options={{}} />
//         </Stack>
//     );
// }






// type WalletStackParamList = {
//     receive: undefined;
//     transaction: undefined;
//     utxolist: undefined;
// }

// export type WalletScreenNavigationProps = NativeStackScreenProps<WalletStackParamList>;

// export const unstable_settings = {
//   initialRouteName: INDEX,
// };

export default function WalletLayout() {
  return (
    <Stack
      screenOptions={{
          statusBarColor: Colors.Green,
          animation: "slide_from_right",
          headerShown: false
      }}
    >
      <Stack.Screen
        name={INDEX}
        options={{
          //animation: "simple_push"
        }}
      />
      <Stack.Screen
        name={RECEIVE_SCREEN}
        options={{
          statusBarColor: Colors.Yellow,
          animation: "slide_from_bottom"
        }}
      />
      <Stack.Screen
        name={TX_SCREEN}
        options={{
          statusBarColor: Colors.Yellow
          //animation: "default"
        }}
      />
      <Stack.Screen
        name={UTXO_SCREEN}
        options={{
          statusBarColor: Colors.Yellow
          //animation: "flip"
        }}
      />
    </Stack>
  );
}