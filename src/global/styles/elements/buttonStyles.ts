import { APP_FONT, Colors } from "@/constants";
import { H3, H4 } from "@/constants/font";
import { DimensionValue, StyleSheet } from "react-native";

export const buttonStyle = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
    },
    touchableContainer: {
        width: "70%",
        backgroundColor: Colors.White,
        display: "flex",
        flexDirection: "row",
        borderRadius: 10,
        
        alignItems: "center",
        justifyContent: "center"
    },
    iconContainer: {
        padding: 10,
        borderRadius: 10,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    labelContainer: {
        display: "flex",
        alignItems: "flex-start",
        flex: 3
    },
    label: {
        color: Colors.Background,
        fontFamily: APP_FONT,
        fontSize: H4,
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
});

export const buttonDimensions = (width: DimensionValue) => StyleSheet.create({
    width: {
        width
    }
})