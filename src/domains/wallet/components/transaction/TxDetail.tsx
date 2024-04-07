import { IconProps } from "@/assets/svg";
import { Colors } from "@/constants";
import { detailStyle, dynamicColor } from "@/domains/wallet/styles";
import { fontStyle } from "@/global";
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
                    <Text style={[fontStyle.semibold, fontStyle.h5 ,{ color: Colors.White } ]}>{data}</Text>
                </View>
            )
        }
        return <Text key={`details_${index}`} style={[ fontStyle.main, fontStyle.h5 ,{ color: Colors.Grey }]}>{data}</Text>
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
            <Text style={[fontStyle.semibold, fontStyle.h5, detailStyle.detailText]}>{ text }</Text>
            <View style={detailStyle.detailValue}>
                { renderDetailsValue() }
            </View>
        </View>
    )
}

export default TxDetail;