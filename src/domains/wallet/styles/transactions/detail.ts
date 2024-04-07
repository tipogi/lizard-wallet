import { Colors } from "@/constants";
import { APP_FONT, H5 } from "@/constants/font";
import { StyleSheet } from "react-native";

export const detailStyle = StyleSheet.create({
    row: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    icon: {
      paddingRight: 5,
      flex: 2
    },
    detailText: {
      flex: 8,
      color: Colors.SecondaryBackground,
    },
    detailValue: {
      flex: 12,
      display: "flex",
      flexDirection: "row",
      gap: 10
    }
})

export const dynamicColor = (background: Colors, active: boolean) => StyleSheet.create({
    font: {
        color: active ? background : Colors.White,
        fontFamily: APP_FONT,
        fontSize: H5
    }
});