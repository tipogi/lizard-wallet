import { APP_HEADER_FONT, APP_HEADER_FONT_BOLD, Colors } from "@/constants";
import { H4, H5 } from "@/constants/font";
import { StyleSheet } from "react-native";

export const utxoCardStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 17,
        paddingBottom: 17,
        borderBottomColor: "#273643",
        borderBottomWidth: 1
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
        color: Colors.White,
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
    tagIconContainer: {
        marginRight: 5
    },
    colorContainer: {
        display: 'flex',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 5
    },
    balance: {
        color: Colors.Green,
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