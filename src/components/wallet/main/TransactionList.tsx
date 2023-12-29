import { FlatList, StyleSheet, Text, View } from "react-native";
import { TxType } from "@/constants/bitcoin";
import Transaction, { TransactionProps } from "./Transaction";

const data: TransactionProps[] = [
    {
        tx_id: 'bd7acbeac1b146c2aed5-3ad53abb28ba',
        tag: 'selling shells and eggs',
        balance: 32913,
        type: TxType.OUT,
        time: '05/12/23 18:18',
        conf: 3
    },
    {
        tx_id: '3ac68afcc60548d3a4f8fbd91aa97f63',
        tag: 'contribution in the komodo islands',
        balance: 54832,
        type: TxType.IN,
        time: '04/12/23 8:08',
        conf: 0
    },
    {
        tx_id: '58694a0f3da1471fbd96-145571e29d72',
        tag: 'Rented a motorbike',
        balance: 1954215,
        type: TxType.OUT,
        time: '03/12/23 7:21',
        conf: 1
    },
    {
        tx_id: '58694a0f3da1471fbd96-145571e29d43',
        tag: 'Buy local red berries ',
        balance: 648005,
        type: TxType.OUT,
        time: '30/11/23 9:54',
        conf: 5
    },
    {
        tx_id: '58694a0f3da1471fbd96-145571e29d12',
        tag: 'Fund the wallet',
        balance: 4128889,
        type: TxType.IN,
        time: '24/11/23 18:18',
        conf: 3
    },{
        tx_id: 'bd7acbeac1b146c2aed5-3ad53abb28ba',
        tag: 'selling shells and eggs',
        balance: 32913,
        type: TxType.IN,
        time: '20/11/23 4:44',
        conf: 4
    },
    {
        tx_id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        tag: 'contribution in the komodo islands',
        balance: 54832,
        type: TxType.IN,
        time: '11/11/23 18:18',
        conf: 44
    },
    {
        tx_id: '58694a0f-3da1-471f-bd96-145571e29d72',
        tag: 'Rented a motorbike',
        balance: 1954215,
        type: TxType.OUT,
        time: '08/11/23 2:22',
        conf: 33
    },
    {
        tx_id: '58694a0f-3da1-471f-bd96-145571e29d43',
        tag: 'Buy local red berries ',
        balance: 648005,
        type: TxType.OUT,
        time: '05/11/23 15:48',
        conf: 43
    },
    {
        tx_id: '58694a0f-3da1-471f-bd96-145571e29d12',
        tag: 'Fund the wallet',
        balance: 4128889,
        type: TxType.IN,
        time: '01/11/23 18:18',
        conf: 54
    },{
        tx_id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        tag: 'selling shells and eggs',
        balance: 32913,
        type: TxType.IN,
        time: '01/11/23 18:18',
        conf: 23
    },
    {
        tx_id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        tag: 'contribution in the komodo islands',
        balance: 54832,
        type: TxType.IN,
        time: '01/11/23 18:18',
        conf: 15
    },
    {
        tx_id: '58694a0f-3da1-471f-bd96-145571e29d72',
        tag: 'Rented a motorbike',
        balance: 1954215,
        type: TxType.OUT,
        time: '01/11/23 18:18',
        conf: 12
    },
    {
        tx_id: '58694a0f-3da1-471f-bd96-145571e29d43',
        tag: 'Buy local red berries ',
        balance: 648005,
        type: TxType.OUT,
        time: '01/11/23 18:18',
        conf: 5
    },
    {
        tx_id: '58694a0f-3da1-471f-bd96-145571e29d12',
        tag: 'Fund the wallet',
        balance: 4128889,
        type: TxType.IN,
        time: '01/11/23 18:18',
        conf: 3
    },
]

const TransactionList = () => {

    /*const renderTransactions = () => {
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
    )*/

    return (
        <View style={stylesheet.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <Transaction {...item}/>
                    )
                }}
                showsVerticalScrollIndicator={false}
            >

            </FlatList>
        </View>
    )
}

export default TransactionList;

const stylesheet = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 20,
        height: "90%"
    }
})