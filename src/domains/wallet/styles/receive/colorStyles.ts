import { APP_HEADER_FONT, Colors, GrapeColors } from "@/constants";
import { H5 } from "@/constants/font";
import { StyleSheet } from "react-native";

export const colorStyles = StyleSheet.create({
    font: {
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
        width: 30,
        height: 30,
        borderRadius: 10
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