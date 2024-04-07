import { Colors } from "@/constants";
import { Animated, StyleSheet } from "react-native";

export const cardListStyle = StyleSheet.create({
    container: {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1
    },
    list: {
        height: "30%",
        paddingTop: 60
    }
});

export const cardStyle = StyleSheet.create({
    _container: {
        display: "flex",
        justifyContent: "center"
    },
    name: {
        color: Colors.Background
    },
})

export const genericCardStyle = (SPACING: number, ITEM_HEIGHT: number) => StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginHorizontal: SPACING ,
        padding: SPACING * 2,
        borderRadius: 10,
        height: ITEM_HEIGHT
        //backgroundColor: "#D9DFE7", //"#F3F8FF",//"#BFC6CE",//"#81F4AC", //"#15F5BA",
    }
})

export const indexStyle = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        marginTop: 15
    },
    element: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: Colors.Grey
    }
})

export const indexStyleGeneric = (index: number, selectedIndex: number) => StyleSheet.create({
    focus: {
        backgroundColor: index === selectedIndex ? Colors.Green : Colors.Grey
    }
})