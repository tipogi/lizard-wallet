import { In, Out, TagIcon } from "@/assets/svg";
import { Colors } from "@/constants";
import { TxType } from "@/constants/bitcoin";
import { NAVIGATION } from "@/constants/navigation";
import { addDotsToValue } from "@/data/convertions";
import { transactionColor } from "@/data/entities/transactions";
import { listStyle, txTypeStyle } from "@/domains/wallet/styles";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native"

export interface TransactionProps {
    tx_id: string,
    tag: string,
    balance: number,
    type: TxType,
    time: string,
    conf: number
}

const Transaction = ({ tx_id, tag, balance, type, time, conf }: TransactionProps) => {

    const { color } = transactionColor(type, conf);

    const renderTxTypeIcon = (type: TxType) => {
        return type === TxType.OUT ?
            <Out fontSize={17} color={Colors.Grey} /> :
            <In fontSize={17} color={Colors.Grey} />
    }

    return (
        <Link
            href={{
                pathname: NAVIGATION.transaction,
                params: { conf, type }
            }}
            asChild
            style={listStyle.container}
        >
            <TouchableOpacity>
                <View style={[listStyle.content, txTypeStyle(color).border]}>
                    <View>
                        <Text style={[listStyle.balance, txTypeStyle(color).balance]}>
                            {`${type === TxType.OUT ? '- ' : ''}${addDotsToValue(balance)} sat`}
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