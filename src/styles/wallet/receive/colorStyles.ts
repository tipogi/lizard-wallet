import { APP_FONT, Colors, GrapeColors } from "@/constants";
import { StyleSheet } from "react-native";

export const colorStyles = StyleSheet.create({
    font: {
        fontFamily: APP_FONT,
        fontSize: 22,
        color: Colors.Grey,
        marginLeft: 15
    },
    property: {
        display: "flex",
        flexDirection: "row"
    },
    paletteContainer: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        gap: 20,
        justifyContent: "center"
    },
    colorContainer: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
    selected: {
        borderWidth: 3,
        borderColor: Colors.WhiteSoft
    },
});

export const background = (color: GrapeColors) => StyleSheet.create({
    main: {
        backgroundColor: color
    },
    border: {
        borderLeftColor: color,
        borderLeftWidth: 4
    }
})