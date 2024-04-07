import { Grape, Tag } from "@/assets/svg";
import { Colors } from "@/constants";
import { addDotsToValue } from "@/data/convertions";
import { utxoCardStyle } from "@/domains/wallet/styles";
import { fontStyle, iconSizes } from "@/global";
import { Text, View } from "react-native";

export interface UtxoProps {
    id: string,
    address: string,
    tag: string,
    index: number,
    color: string,
    balance: number
}

const UtxoCard = ({ id, address, tag, index, color, balance }: UtxoProps) => {
    return (
        <View style={utxoCardStyle.container}>
            <View style={utxoCardStyle.indexContainer}>
                <Text style={[ fontStyle.main, fontStyle.h5, utxoCardStyle.indexFont ]}>{`#${index}`}</Text>
            </View>
            <View style={utxoCardStyle.addressContainer}>
                <View>
                    <Text style={[ fontStyle.semibold, fontStyle.h5, utxoCardStyle.address ]}>{address}</Text>
                </View>
                <View style={utxoCardStyle.infoContainer}>
                    <View style={utxoCardStyle.tagContainer}>
                        <View style={utxoCardStyle.tagIconContainer}>
                            <Tag fontSize={iconSizes.SMALL * .8} color={Colors.GreySoft}/>
                        </View>
                        <Text style={[ fontStyle.main, fontStyle.h5_s, utxoCardStyle.primaryColor]}>{`${tag}`}</Text>
                    </View>
                    <Text style={[ fontStyle.bold, fontStyle.h5, utxoCardStyle.balance ]}>{`${addDotsToValue(balance)} sat`}</Text>
                </View>
            </View>
            <View style={utxoCardStyle.colorContainer}>
                <Grape fontSize={iconSizes.SMALL} color={color} />
            </View>
        </View>
    )
}

export default UtxoCard;