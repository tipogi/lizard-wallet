import { Colors } from "@/constants";
import { APP_FONT, H4 } from "@/constants/font";
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
      fontSize: H4,
      color: Colors.SecondaryBackground,
      fontFamily: APP_FONT
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
        fontSize: H4
    }
});