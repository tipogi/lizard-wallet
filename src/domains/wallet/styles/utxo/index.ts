import { APP_FONT, APP_FONT_BOLD, Colors } from "@/constants";
import { H4, H5 } from "@/constants/font";
import { StyleSheet } from "react-native";

export const utxoCardStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 17,
        marginBottom: 17,
    },
    indexContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    indexFont: {
        color: Colors.Grey,
    },
    addressContainer: {
        flex: 9,
        display: 'flex',
        alignItems: 'flex-start',
    },
    address: {
        fontSize: H4,
        color: Colors.Grey,
        fontFamily: APP_FONT_BOLD,
    },
    infoContainer: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10
    },
    tagContainer: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center'
    },
    tagText: {
        fontFamily: APP_FONT,
        fontSize: H5
    },
    tagIconContainer: {
        marginRight: 5
    },
    colorContainer: {
        display: 'flex',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 2
    },
    balance: {
        color: Colors.Yellow,
        fontFamily: APP_FONT_BOLD,
        fontSize: H4
    },
    primaryColor: {
        color: Colors.Grey,
    }
});

export const listStyles = StyleSheet.create({
    main: {
        backgroundColor: Colors.Background,
        display: "flex",
        marginVertical: 20,
        flex: 1
    }
  });