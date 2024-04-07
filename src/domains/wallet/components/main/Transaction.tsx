import { In, Out, Tag } from "@/assets/svg";
import { Colors } from "@/constants";
import { TxType } from "@/constants/bitcoin";
import { NAVIGATION } from "@/constants/navigation";
import { addDotsToValue } from "@/data/convertions";
import { transactionColor } from "@/data/entities/transactions";
import { listStyle, txTypeStyle } from "@/domains/wallet/styles";
import { iconSizes } from "@/global";
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
            <Out fontSize={iconSizes.SMALL} color={Colors.Grey} /> :
            <In fontSize={iconSizes.SMALL} color={Colors.Grey} />
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
                    <View style={listStyle.main}>
                        <Text style={[listStyle.balance, txTypeStyle(color).balance]}>
                            {`${type === TxType.OUT ? '- ' : ''}${addDotsToValue(balance)} sat`}
                        </Text>
                        <Text style={listStyle.txDate}>{time}</Text>
                    </View>
                    <View style={listStyle.extra}>
                        <View style={listStyle.tag}>
                            <Tag fontSize={iconSizes.SMALL * .9} color={Colors.Grey} />
                            <Text style={listStyle.tagName}>{tag}</Text>
                        </View>
                        {renderTxTypeIcon(type)}
                    </View>
                </View>
            </TouchableOpacity>
        </Link>
    )
}

export default Transaction;