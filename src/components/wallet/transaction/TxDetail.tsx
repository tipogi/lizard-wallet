import { IconProps } from "@/components/global/svg";
import { Colors } from "@/constants";
import { detailStyle, dynamicBackground, dynamicColor } from "@/styles/wallet";
import { Text, View } from "react-native";

interface DetailsValue {
    text: string,
    active: boolean
}

interface TxDetailProps {
    icon: React.ElementType<IconProps>,
    iconSize: number,
    background: Colors,
    text: string,
    value: DetailsValue[]
}

const TxDetail = ({ icon: Icon, iconSize, background, text, value }: TxDetailProps) => {

    const renderDetailsValue = () => {
        return value.map(({text, active }, index) => {
            return (
                <Text 
                    key={`details_${index}`}
                    style={dynamicColor(background, active).font}
                >{ text }</Text>
            )
        })
    }

    return (
        <View style={detailStyle.row}>
            <View style={detailStyle.icon}>
                <Icon fontSize={iconSize} color={background}/>
            </View>
            <Text style={[ detailStyle.detailText, dynamicBackground(background).txColor ]}>{ text }</Text>
            <View style={detailStyle.detailValue}>
                { renderDetailsValue() }
            </View>
        </View>
    )
}

export default TxDetail;