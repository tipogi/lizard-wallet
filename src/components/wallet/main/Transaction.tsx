import { Tag } from "@/components/global/svg";
import { transactionColor, txColors } from "@/constants";
import { TxType } from "@/constants/bitcoin";
import { StyleSheet, Text, View } from "react-native"

export interface TransactionProps {
    tx_id: string,
    tag: string,
    balance: number,
    type: TxType
}

const Transaction = ({ tx_id, tag, balance, type}: TransactionProps) => {

    const color = transactionColor(type);

    return (
        <View style={stylesheet.container}>
            <View style={[stylesheet.type, palette(color).type]}></View>
            <View style={stylesheet.content}>
                <View>
                    <Text style={[stylesheet.balance, palette(color).balance]}>{`${balance} sat`}</Text>
                </View>
                <View style={stylesheet.tag}>
                    <Tag fontSize={17} color={"#909090"}/>
                    <Text style={stylesheet.tagName}>{tag}</Text>
                </View>
            </View>
        </View>
    )
}

export default Transaction;

const stylesheet = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 20,
        flexDirection: "row",
        height: 45
    },
    type: {
        flex: 1,
        backgroundColor: "red",
        display: "flex"
    },
    content: {
        display: "flex",
        flex: 100,
        marginLeft: 20,
        justifyContent: "space-between"
    },
    balance: {
        fontSize: 18,
        fontWeight: "bold"
    },
    tag: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    tagName: {
        color: "#909090"
    }
})

const palette = (color: txColors) => StyleSheet.create({
    balance: {
        color,
    },
    type: {
        backgroundColor: color
    }
})