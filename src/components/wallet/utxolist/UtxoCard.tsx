import { Drop, Grape, Palette, Tag, Tail } from "@/components/global/svg";
import { StyleSheet, Text, View } from "react-native";

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
                            <Tag fontSize={17} color={"#909090"}/>
                        </View>
                        <Text style={utxoCardStyle.primaryColor}>{`${tag}`}</Text>
                    </View>
                    <Text style={utxoCardStyle.balance}>{`${balance} sat`}</Text>
                </View>
            </View>
            <View style={utxoCardStyle.colorContainer}>
                {/* <Drop fontSize={12} color={color}/> */}
                <Grape fontSize={15} color={color} />
            </View>
        </View>
    )
}

export default UtxoCard;

const utxoCardStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 17,
        marginBottom: 17,
    },
    indexContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    indexFont: {
        color: "#909090",
    },
    addressContainer: {
        flex: 9,
        display: 'flex',
        alignItems: 'flex-start',
    },
    address: {
        fontSize: 14,
        color: "#909090",
        fontWeight: "bold"
    },
    infoContainer: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10
    },
    tagContainer: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center'
    },
    tagIconContainer: {
        marginRight: 5
    },
    colorContainer: {
        display: 'flex',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 2
    },
    balance: {
        color: "#FFBB38",
        fontWeight: "bold"
    },
    primaryColor: {
        color: "#909090",
    }
})

const utxoColor = (color: string) => StyleSheet.create({
    container: {
        backgroundColor: color,
        width: 12,
        height: 12,
        borderRadius: 3
    }
})