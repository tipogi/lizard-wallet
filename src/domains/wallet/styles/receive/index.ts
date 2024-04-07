import { Colors } from "@/constants";
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
        justifyContent: "center",
        alignItems: "center"
    },
    addressContainer: {
        display: 'flex',
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'center',
        rowGap: 6
    },
    detailsContainer: {
        display: "flex",
        flex: 1,
        paddingHorizontal: 30,
        gap: 20,
        marginTop: 50
    },
    property: {
        display: "flex",
        flexDirection: "row",
        alignItems:"center"
    },
    font: {
        color: Colors.White,
        marginLeft: 15
    },
    buttonContainer: {
        marginBottom: 40
    },
});