import { Grape, TagIcon } from "@/assets/svg";
import { Colors } from "@/constants";
import { addDotsToValue } from "@/data/convertions";
import { utxoCardStyle } from "@/domains/wallet/styles";
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
                <Text style={utxoCardStyle.indexFont}>{`#${index}`}</Text>
            </View>
            <View style={utxoCardStyle.addressContainer}>
                <View>
                    <Text style={utxoCardStyle.address}>{address}</Text>
                </View>
                <View style={utxoCardStyle.infoContainer}>
                    <View style={utxoCardStyle.tagContainer}>
                        <View style={utxoCardStyle.tagIconContainer}>
                            <TagIcon fontSize={17} color={Colors.White}/>
                        </View>
                        <Text style={[utxoCardStyle.tagText, utxoCardStyle.primaryColor]}>{`${tag}`}</Text>
                    </View>
                    <Text style={utxoCardStyle.balance}>{`${addDotsToValue(balance)} sat`}</Text>
                </View>
            </View>
            <View style={utxoCardStyle.colorContainer}>
                <Grape fontSize={15} color={color} />
            </View>
        </View>
    )
}

export default UtxoCard;