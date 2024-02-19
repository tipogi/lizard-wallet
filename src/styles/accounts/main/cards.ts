import { APP_FONT, Colors } from "@/constants";
import { APP_FONT_BOLD, H2, H3, H4 } from "@/constants/font";
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
    container: {
        display: "flex",
        justifyContent: "center"
    },
    name: {
        fontFamily: APP_FONT_BOLD,
        fontSize: H2,
        color: Colors.Background
    },
    balance: {
        fontFamily: APP_FONT,
        fontSize: H4
    },
})

export const genericCardStyle = (SPACING: number, ITEM_HEIGHT: number, translateY: Animated.AnimatedInterpolation<string | number>) => StyleSheet.create({
    container: {
        marginTop: 10,
        marginHorizontal: SPACING,
        padding: SPACING * 2,
        alignItems: 'center',
        backgroundColor: "linear-gradient(135deg, #bd6772, #53223f)",//"#4D6579",//Colors.Green,
        borderRadius: 10,
        //transform: [{ translateY }],
        height: ITEM_HEIGHT
    }
})

export const indexStyle = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
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