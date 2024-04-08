import { Colors, TTxColors } from "@/constants"
import { StyleSheet } from "react-native"

export const listStyle = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 20,
        flexDirection: "row",
    },
    content: {
        display: "flex",
        flex: 5,
        justifyContent: "space-between",
        paddingLeft: 20,
        gap: 10
    },
    main: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    extra: {
        display: "flex",
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    tag: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5
    },
    tagName: {
        color: Colors.White
    },
    txDate: {
        color: Colors.WhiteSoft
    }
})

export const txTypeStyle = (color: TTxColors) => StyleSheet.create({
    balance: {
        color,
    },
    type: {
        backgroundColor: color
    },
    border: {
        borderLeftColor: color,
        borderLeftWidth: 4
    }
})