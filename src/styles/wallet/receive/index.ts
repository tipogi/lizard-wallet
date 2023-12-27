import { Colors } from "@/constants";
import { APP_FONT, H3, H5 } from "@/constants/font";
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
        paddingLeft: 20,
        paddingRight: 25,
    },
    qr: {
        marginTop: 30,
        marginBottom: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    details: {
        fontFamily: APP_FONT,
        fontSize: H3,
        color: Colors.Grey,
        textAlign: "center"
    },
    derivationColor: {
        color: Colors.WhiteSoft,
        marginTop: 10,
        fontSize: H5
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
        fontFamily: APP_FONT,
        fontSize: H3,
        padding: 10
    },
    font: {
        fontFamily: APP_FONT,
        fontSize: H5,
        color: Colors.Grey,
        marginLeft: 15
    }
});