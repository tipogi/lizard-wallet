import { APP_FONT, Colors } from "@/constants";
import { H2, H4 } from "@/constants/font";
import { StyleSheet } from "react-native";

export const generalStyle = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 40,
        paddingVertical: 20,
    },
    navigation: {
        alignItems:"flex-start",
        justifyContent: "center"
    }
})

export const simpleHeaderStyle = StyleSheet.create({    
    description: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    headline: {
        fontFamily: APP_FONT,
        fontSize: H2,
        color: Colors.Grey
    }
})

export const iconHeaderStyle = StyleSheet.create({
    description: {
        display: "flex",
        //flex: 3,
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    headline: {
        fontFamily: APP_FONT,
        fontSize: H4
    }
})