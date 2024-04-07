import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const detailStyle = StyleSheet.create({
    row: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    icon: {
      paddingRight: 20,
      flex: 2
    },
    detailText: {
      flex: 8,
      color: Colors.White,
    },
    detailValue: {
      flex: 12,
      display: "flex",
      flexDirection: "row",
      gap: 10
    }
})