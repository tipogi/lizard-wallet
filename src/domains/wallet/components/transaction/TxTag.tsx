import { TagIcon } from "@/assets/svg";
import { Colors } from "@/constants";
import { APP_FONT, H4 } from "@/constants/font";
import { detailStyle } from "@/domains/wallet/styles";
import { StyleSheet, Text, View } from "react-native";

interface TxTagProps {
    tag: string,
    background: Colors
}

const TxTag = ({ tag, background }: TxTagProps) => {

    return (
        <View style={detailStyle.row}>
            <View style={detailStyle.icon}>
                <TagIcon fontSize={20} color={background} />
            </View>
            <Text style={[tagStyle.detailText, tagStyle.color]}>
                After visit my big friends of komodo, time to buy return ticket
            </Text>
        </View>
    )
}

export default TxTag;

const tagStyle = StyleSheet.create({
    detailText: {
        flex: 18,
        fontSize: H4
    },
    color: {
        fontSize: H4,
        fontFamily: APP_FONT,
        color: Colors.White
    }
});