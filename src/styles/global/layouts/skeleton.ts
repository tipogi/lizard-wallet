import { Colors } from "@/constants";
import { DimensionValue, StyleSheet } from "react-native";

export const dynamicSkeletonStyle = (contentLength: DimensionValue) => StyleSheet.create({
    main: {
        backgroundColor: Colors.Background,
        marginTop: "auto",
        height: contentLength,
        display: "flex",
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    }
});