import { StyleSheet } from "react-native";

export const smallDescription = StyleSheet.create({
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
    },
    description: {
        display: "flex",
        flex: 3,
        justifyContent: "center",
        alignItems: "center"
    },
    font: {
        fontSize: 30
    }
})