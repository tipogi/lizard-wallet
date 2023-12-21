import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        backgroundColor: Colors.Background,
        marginTop: "auto",
        height: "85%",
        display: "flex",
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },
    container: {
        display: "flex",
        paddingLeft: 50,
        paddingRight: 50,
        gap: 30
    },
    qr: {
        marginTop: 40,
        marginBottom: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    details: {
        fontFamily: "karantina-light",
        fontSize: 30,
        color: Colors.Grey
    },
    derivationColor: {
        color: Colors.WhiteSoft,
        marginTop: 10,
        fontSize: 25
    },
    property: {
        display: "flex",
        flexDirection: "row"
    },
    clipboard: {
        display: "flex",
        marginTop: 80,
        alignItems: "center",
    },
    clipBtn: {
        backgroundColor: Colors.Yellow,
        width: "70%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    clipTxt: {
        color: Colors.Background,
        fontFamily: "karantina-light",
        fontSize: 28,
        padding: 10
    },
    font: {
        fontFamily: "karantina-light",
        fontSize: 22,
        color: Colors.Grey,
        marginLeft: 15
    }
});