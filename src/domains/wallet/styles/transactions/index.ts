import { APP_FONT, APP_FONT_BOLD, Colors, TTxColors } from "@/constants"
import { H4, H5 } from "@/constants/font"
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
    balance: {
        fontSize: H4,
        fontFamily: APP_FONT_BOLD

    },
    tag: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
    },
    tagName: {
        color: Colors.Grey,
        fontFamily: APP_FONT,
        fontSize: H5,

    },
    date: {
        display: "flex",
        flex: 2,
        flexDirection: "row-reverse",
        alignItems: "flex-end"
    },
    txDate: {
        color: Colors.WhiteSoft,
        fontFamily: APP_FONT,
        fontSize: H5,
        paddingRight: 10
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