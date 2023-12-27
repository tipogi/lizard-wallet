import { APP_FONT, Colors } from "@/constants";
import { H5 } from "@/constants/font";
import { StyleSheet } from "react-native";

export const tagInputStyle = StyleSheet.create({
    property: {
        display: "flex",
        flexDirection: "row"
    },
    font: {
        fontFamily: APP_FONT,
        fontSize: H5,
        color: Colors.Grey,
        marginLeft: 15
    },
    inputContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        height: 50,
        color: Colors.Yellow,
        padding: 10,
        width: 300,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderBottomColor: Colors.Yellow,
        borderBottomWidth: 2,
    }
});