import { Colors } from "@/constants";
import { APP_FONT, H3, H5 } from "@/constants/font";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    receiveContainer: {
        display: 'flex',
        justifyContent: "center",
        flex: 1
    },
    main: {
        backgroundColor: Colors.Background,
        display: "flex",
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },
    bodyContainer: {
        display: "flex",
        flex: 1,
        paddingLeft: 20,
        paddingRight: 25,
        alignContent: "space-between"
    },
    qr: {
        display: "flex",
        flex: 1,
        //marginBottom: 40,
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
    detailsContainer: {
        display: "flex",
        flex: 1,
        paddingHorizontal: 30,
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
    },
    buttonContainer: {
        display: "flex",
        alignItems: "center",
        marginBottom: 40
    },
});