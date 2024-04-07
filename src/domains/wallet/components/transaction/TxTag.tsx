import { Tag } from "@/assets/svg";
import { Colors } from "@/constants";
import { detailStyle } from "@/domains/wallet/styles";
import { fontStyle, iconSizes } from "@/global";
import { StyleSheet, Text, View } from "react-native";

interface TxTagProps {
    tag: string,
    background: Colors
}

const TxTag = ({ tag, background }: TxTagProps) => {

    return (
        <View style={detailStyle.row}>
            <View style={detailStyle.icon}>
                <Tag fontSize={iconSizes.SMALL} color={background} />
            </View>
            <Text style={[ fontStyle.main, fontStyle.h5 ,tagStyle.detailText, tagStyle.color ]}>
                {tag}
            </Text>
        </View>
    )
}

export default TxTag;

const tagStyle = StyleSheet.create({
    detailText: {
        flex: 18
    },
    color: {
        color: Colors.White
    }
});