import { Format, Share } from "@/components/global/svg";
import { Colors } from "@/constants";
import { H4 } from "@/constants/font";
import { detailStyle, dynamicBackground } from "@/styles/wallet";
import { StyleSheet, Text, View } from "react-native";

interface TxHexProps {
    link: string,
    background: Colors
}

const TxHex = ({ link, background }: TxHexProps) => {

    return (
        <View style={detailStyle.row}>
            <View style={detailStyle.icon}>
                <Format fontSize={20} color={background}/>
            </View>
            <Text style={[ hexStyle.detailText, dynamicBackground(background).txColor ]}>transaction hexadecimal</Text>
            <Share fontSize={20} color={background}/>
        </View>
    )
}

export default TxHex;

const hexStyle = StyleSheet.create({
    detailText: {
        flex: 18,
        fontSize: H4
      },
});