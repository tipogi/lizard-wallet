import { APP_FONT } from "@/constants";
import { H2, H4 } from "@/constants/font";
import { StyleSheet } from "react-native";

export const generalStyle = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        paddingHorizontal: 40,
        paddingVertical: 20
    },
    navigation: {
        flex: 1,
        alignItems:"flex-start",
        justifyContent: "center"
    }
})

export const simpleHeaderStyle = StyleSheet.create({    
    description: {
        display: "flex",
        flex: 3,
        justifyContent: "center",
        alignItems: "center"
    },
    headline: {
        fontFamily: APP_FONT,
        fontSize: H2,
    }
})

export const iconHeaderStyle = StyleSheet.create({
    description: {
        display: "flex",
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    headline: {
        fontFamily: APP_FONT,
        fontSize: H4,
    }
})