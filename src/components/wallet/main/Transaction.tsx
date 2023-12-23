import { In, Out, TagIcon } from "@/components/global/svg";
import { Colors, transactionColor } from "@/constants";
import { TxType } from "@/constants/bitcoin";
import { NAVIGATION } from "@/constants/navigation";
import { addDotsToValue } from "@/data/convertions";
import { listStyle, txTypeStyle } from "@/styles/wallet";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native"

export interface TransactionProps {
    tx_id: string,
    tag: string,
    balance: number,
    type: TxType,
    time: string
}

const Transaction = ({ tx_id, tag, balance, type, time }: TransactionProps) => {

    const color = transactionColor(type);

    const renderTxTypeIcon = (type: TxType) => {
        return type === TxType.SEND ?
            <Out fontSize={17} color={Colors.Grey} /> :
            <In fontSize={17} color={Colors.Grey} />
    }

    return (
        <Link
            href={{
                pathname: NAVIGATION.transaction,
                params: { conf: 0, type }
            }}
            asChild
            style={listStyle.container}
        >
            <TouchableOpacity>
                <View style={[listStyle.content, txTypeStyle(color).border]}>
                    <View>
                        <Text style={[listStyle.balance, txTypeStyle(color).balance]}>
                            {`${type === TxType.SEND ? '- ' : ''}${addDotsToValue(balance)} sat`}
                        </Text>
                    </View>
                    <View style={listStyle.tag}>
                        <TagIcon fontSize={17} color={Colors.Grey} />
                        <Text style={listStyle.tagName}>{tag}</Text>
                    </View>
                </View>
                <View style={listStyle.date}>
                    {renderTxTypeIcon(type)}
                    <Text style={listStyle.txDate}>{time}</Text>
                </View>
            </TouchableOpacity>
        </Link>
    )
}

export default Transaction;