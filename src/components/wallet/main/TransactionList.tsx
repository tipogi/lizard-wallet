import { StyleSheet, Text, View } from "react-native";
import { TxType } from "@/constants/bitcoin";
import Transaction, { TransactionProps } from "./Transaction";

const data: TransactionProps[] = [
    {
        tx_id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        tag: 'selling shells and eggs',
        balance: 32913,
        type: TxType.PENDING
    },
    {
        tx_id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        tag: 'contribution in the komodo islands',
        balance: 54832,
        type: TxType.RECEIVE
    },
    {
        tx_id: '58694a0f-3da1-471f-bd96-145571e29d72',
        tag: 'Rented a solar panel',
        balance: 1954215,
        type: TxType.SEND
    },
    {
        tx_id: '58694a0f-3da1-471f-bd96-145571e29d43',
        tag: 'Buy local red berries ',
        balance: 648005,
        type: TxType.SEND
    },
    {
        tx_id: '58694a0f-3da1-471f-bd96-145571e29d12',
        tag: 'Fund the wallet',
        balance: 4128889,
        type: TxType.RECEIVE
    },
]

const TransactionList = () => {

    const renderTransactions = () => {
        return data.map((props, index) => {
            return (
                <Transaction {...props} key={`tx_${index}`}/>
            )
        })
    }

    return (
        <View style={stylesheet.container}>
            {renderTransactions()}
            {renderTransactions()}
            {renderTransactions()}
        </View>
    )
}

export default TransactionList;

const stylesheet = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 20,
        height: "80%"
    }
})