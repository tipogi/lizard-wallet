import { Colors } from "@/constants";
import { APP_FONT, H4 } from "@/constants/font";
import { StyleSheet } from "react-native";

export const skeletonStyle = StyleSheet.create({
    headerContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 35,
        marginVertical: 15
    },
    bodyContainer: {
        marginTop: "auto",
        display: "flex",
        flex: 1
    },
    headerBackIcon: {
        display: "flex",
        flex: 2,
        alignItems:"flex-start",
        justifyContent: "center",
    },
    headerLabelContainer: {
        display: "flex",
        flex: 6,
        alignItems: "center"
    },
    headerLabel: {
        fontFamily: APP_FONT,
        fontSize: H4
    },
    headerActions: {
        display: "flex",
        flex: 2,
        alignItems: "flex-end",
    },
})