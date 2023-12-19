import { In, Out, TagIcon } from "@/components/global/svg";
import { transactionColor, txColors } from "@/constants";
import { TxType } from "@/constants/bitcoin";
import { addDotsToValue } from "@/data/convertions";
import { StyleSheet, Text, View } from "react-native"

export interface TransactionProps {
    tx_id: string,
    tag: string,
    balance: number,
    type: TxType,
    time: string
}

const Transaction = ({ tx_id, tag, balance, type, time}: TransactionProps) => {

    const color = transactionColor(type);

    const renderTxTypeIcon = (type: TxType) => {
        return type === TxType.SEND ?
            <Out fontSize={17} color={"#909090"}/> :
            <In fontSize={17} color={"#909090"}/>
    }

    return (
        <View style={stylesheet.container}>
            {/*<View style={[stylesheet.type, palette(color).type]}></View>*/}
            <View style={[stylesheet.content, palette(color).border]}>
                <View>
                    <Text style={[stylesheet.balance, palette(color).balance]}>
                        {`${type === TxType.SEND? '- ': ''}${addDotsToValue(balance)} sat`}
                    </Text>
                </View>
                <View style={stylesheet.tag}>
                    <TagIcon fontSize={17} color={"#c1c1c1"}/>
                    <Text style={stylesheet.tagName}>{tag}</Text>
                </View>
            </View>
            <View style={stylesheet.date}>
                { renderTxTypeIcon(type) }
                <Text style={stylesheet.txDate}>{time}</Text>
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
    },
    /*type: {
        flex: 1,
        backgroundColor: "red",
        display: "flex"
    },*/
    content: {
        display: "flex",
        flex: 5,
        justifyContent: "space-between",
        paddingLeft: 20,
        gap: 10
    },
    balance: {
        fontSize: 26,
        //fontWeight: "bold",
        //fontFamily: "coda"
        fontFamily: "karantina-regular"
        //fontFamily: "saira-bold"
        //fontFamily: "share-techno-regular"

    },
    tag: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
    },
    tagName: {
        color: "#909090",
        //fontFamily: "coda",
        //fontSize: 14,
        fontFamily: "karantina-light",
        fontSize: 22,
        //fontFamily: "saira",
        //fontFamily: "share-techno-regular",
        
    },
    date: {
        display: "flex",
        flex: 2,
        flexDirection: "row-reverse",
        alignItems: "flex-end"
    },
    txDate: {
        color: "#909090",
        fontFamily: "karantina-light",
        fontSize: 22,
        paddingRight: 10
    }
})

const palette = (color: txColors) => StyleSheet.create({
    balance: {
        color,
    },
    type: {
        backgroundColor: color
    },
    border: {
        borderLeftColor: color,
        borderLeftWidth: 4
    }
})