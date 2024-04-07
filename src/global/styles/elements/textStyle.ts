import { APP_HEADER_FONT, Colors } from "@/constants";
import { H3, H4 } from "@/constants/font";
import { StyleSheet } from "react-native";

export const textColors = (color: Colors) => StyleSheet.create({
    fontColor: {
        color,
        fontFamily: APP_HEADER_FONT,
        fontSize: H3
    }
})