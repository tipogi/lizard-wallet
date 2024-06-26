import { Colors } from "@/constants";
import { APP_HEADER_FONT_BOLD, H2 } from "@/constants/font";
import { StyleSheet } from "react-native";

export const settingStyle = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: Colors.Green,
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    headerText: {
        color: Colors.Black,
        paddingTop: 30
    },
    main: {
        backgroundColor: Colors.Background,
        marginTop: "auto",
        height: "85%",
        display:"flex",
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        paddingHorizontal: 50,
        paddingVertical: 50,
        gap: 30
    }
});