import { IconProps } from "@/assets/svg";
import { APP_FONT, Colors } from "@/constants";
import { APP_FONT_BOLD, H4 } from "@/constants/font";
import { detailStyle, genericColor, dynamicColor } from "@/styles/wallet";
import { Text, View } from "react-native";

interface DetailsValue {
    data: string,
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

    const renderFeatures = (data: string, active: boolean, index: number) => {
        if (active) {
            return (
                <View key={`details_${index}`} style={{ backgroundColor: background, paddingVertical: 2, paddingHorizontal: 8, borderRadius: 4}}>
                    <Text style={{ color: Colors.White, fontFamily: APP_FONT_BOLD, fontSize: H4}}>{data}</Text>
                </View>
            )
        }
        return <Text style={{ color: Colors.Grey, fontFamily: APP_FONT, fontSize: H4}}>{data}</Text>
    }

    const renderDetailsValue = () => {
        return value.map(({data, active }, index) => {
            if (text === "features") {
                return renderFeatures(data, active, index)
            }
            return (
                <Text 
                    key={`details_${index}`}
                    style={dynamicColor(background, active).font}
                >{ data }</Text>
            )
        })
    }

    return (
        <View style={detailStyle.row}>
            <View style={detailStyle.icon}>
                <Icon fontSize={iconSize} color={background}/>
            </View>
            <Text style={detailStyle.detailText}>{ text }</Text>
            <View style={detailStyle.detailValue}>
                { renderDetailsValue() }
            </View>
        </View>
    )
}

export default TxDetail;