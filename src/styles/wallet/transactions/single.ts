import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const singleTxStyle = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1
  },
});

export const dynamicBackground = (background: Colors) => StyleSheet.create({
  container: {
    backgroundColor: background
  }
})