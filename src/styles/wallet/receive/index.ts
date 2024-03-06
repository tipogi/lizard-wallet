import { Colors } from "@/constants";
import { APP_FONT, H3, H5 } from "@/constants/font";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    receiveContainer: {
        display: 'flex',
        justifyContent: "center"
    },
    main: {
        backgroundColor: Colors.Background,
        display: "flex",
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },
    container: {
        display: "flex",
        paddingLeft: 20,
        paddingRight: 25,
    },
    qr: {
        //marginTop: 10,
        marginBottom: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    details: {
        fontFamily: APP_FONT,
        fontSize: H3,
        color: Colors.White,
        textAlign: "center"
    },
    derivationColor: {
        color: Colors.Grey,
        marginTop: 10,
        fontSize: H5
    },
    clipboard: {
        display: "flex",
        marginTop: 80,
        alignItems: "center",
    },
    othersContainer: {
        paddingLeft: 30,
        paddingRight: 30,
        gap: 20
    },
    property: {
        display: "flex",
        flexDirection: "row"
    },
    font: {
        fontFamily: APP_FONT,
        fontSize: H5,
        color: Colors.Grey,
        marginLeft: 15
    }
});