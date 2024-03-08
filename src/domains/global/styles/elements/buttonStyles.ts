import { APP_FONT, Colors } from "@/constants";
import { H3 } from "@/constants/font";
import { StyleSheet } from "react-native";

export const buttonStyle = StyleSheet.create({
    container: {
        backgroundColor: Colors.White,
        //width: "70%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    iconContainer: {
        backgroundColor: Colors.Green,
        padding: 10,
        borderRadius: 5,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0
    },
    label: {
        color: Colors.Background,
        fontFamily: APP_FONT,
        fontSize: H3,
        paddingHorizontal: 15
    },
    shadow: {
        shadowColor: Colors.Black,
        elevation: 15,
    }
});

export const buttonColors = (color: Colors) => StyleSheet.create({
    iconBackground: {
        backgroundColor: color
    }
})