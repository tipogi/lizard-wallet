import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const parameterStyle = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        gap: 15,
        alignItems: "center"
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
    grey: {
        color: Colors.Grey
    },
    white: {
        color: Colors.White
    }
});