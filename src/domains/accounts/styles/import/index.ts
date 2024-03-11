import { APP_FONT, Colors } from "@/constants";
import { H4, H5, H5_2 } from "@/constants/font";
import { StyleSheet } from "react-native";

export const importStyle = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: "center",
        flex: 1,
        backgroundColor: Colors.Background,
    },
    bodyContainer: {
        display: "flex",
        flex: 1,
        paddingHorizontal: 60,
        paddingVertical: 30
    },
    formContainer: {
        display: "flex",
        flex: 6,
        gap: 40
    },
    formButtonContainer: {
        display: "flex",
        flex: 1
    },
    absoluteContainer: {
        position: "absolute",
        top: -10, 
        zIndex: 10,
        paddingHorizontal: 10,
        width: "100%"
    },
    inputHeaderContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    inputHeaderTextContaiener: {
        backgroundColor: Colors.Background,
        paddingHorizontal: 8
    },
    inputHeaderText: {
        color: Colors.Green,
        fontFamily: APP_FONT,
        fontSize: H5_2
    },
    nameInput: {
        borderColor: "#253440",
        borderWidth: 2,
        height: 50,
        paddingLeft: 20
    },
    descriptorInput: {
        borderColor: "#253440",
        borderWidth: 2,
        height: 300,
        paddingHorizontal: 20,
        paddingVertical: 10,
        textAlignVertical: "top"
    },
    input: {
        fontFamily: APP_FONT,
        fontSize: H5,
        color: Colors.WhiteSoft
    }
})