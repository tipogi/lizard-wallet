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

})

export const genericCardStyle = (SPACING: number, ITEM_HEIGHT: number, translateY: Animated.AnimatedInterpolation<string | number>) => StyleSheet.create({
    container: {
        marginTop: 10,
        marginHorizontal: SPACING,
        padding: SPACING * 2,
        alignItems: 'center',
        backgroundColor: Colors.Green,
        borderRadius: 10,
        transform: [{ translateY }],
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