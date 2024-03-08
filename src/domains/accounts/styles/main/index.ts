import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const accountStyle = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: Colors.Green
    },
    main: {
        backgroundColor: Colors.Background,
        marginTop: "auto",
        height: "80%",
        display: "flex",
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },
    content: {
        display: "flex",
        padding: 30,
        paddingTop: 150,
        gap: 30
    }
})