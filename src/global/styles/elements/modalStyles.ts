import { APP_HEADER_FONT_BOLD, Colors } from "@/constants";
import { H5 } from "@/constants/font";
import { StyleSheet } from "react-native";

export const modalStyle = StyleSheet.create({
    font: {
        color: Colors.WhiteSoft,
        fontFamily: APP_HEADER_FONT_BOLD,
        fontSize: H5
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BackgroundBlur
    },
    modalView: {
        display: "flex",
        margin: 20,
        backgroundColor: Colors.Background,
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        gap: 30,
        borderColor: Colors.WhiteSoft,
        borderWidth: 3,
        maxWidth: 350
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: 10
    },
    headerText: {
        marginLeft: 15
    },
    modalIconContainer: {
        height: 40,
        width: 40,
        backgroundColor: Colors.Yellow,
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: 250,
        paddingTop: 20
    },
    cancelBtn: {
        backgroundColor: Colors.Red,
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 4
    },
    cancelBtnText: {
        color: Colors.White,
    },
    saveBtn: {
        backgroundColor: Colors.Green,
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 4
    },
    saveBtnText: {
        color: Colors.White,
    }
});