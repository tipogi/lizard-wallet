import { APP_FONT, Colors } from "@/constants";
import { H4, H4_2, H5 } from "@/constants/font";
import { StyleSheet } from "react-native";

export const parameterStyle = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        gap: 15
    },
    iconContainer: {
        display: "flex",
        alignItems: "center",
        width: "10%"

    },
    textContainer: {
        display: "flex",
        alignItems: "flex-start",

    },
    text: {
        fontFamily: APP_FONT,
        fontSize: H4_2
    },
    grey: {
        color: Colors.Grey
    },
    white: {
        color: Colors.White
    }
});