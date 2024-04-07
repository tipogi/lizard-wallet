import { APP_HEADER_FONT, APP_HEADER_FONT_BOLD, Colors, TTxColors } from "@/constants"
import { APP_FONT, H5, H5_2, H_M } from "@/constants/font"
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
    balance: {
        fontSize: H_M,
        fontFamily: APP_HEADER_FONT_BOLD

    },
    tag: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5
    },
    tagName: {
        color: Colors.White,
        fontFamily: APP_FONT,
        fontSize: H5,

    },
    txDate: {
        color: Colors.WhiteSoft,
        fontFamily: APP_FONT,
        fontSize: H5_2,
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