import { Arrow } from "@/assets/svg"
import { Colors, TTxColors } from "@/constants"
import { TxType } from "@/constants/bitcoin"
import { EN } from "@/constants/translations"
import { addDotsToValue } from "@/data/convertions"
import { getTransactionIcon, renderThreshold, transactionColor } from "@/data/entities/transactions"
import { globalStyle } from "@/styles/global"
import { genericColor, summaryStyle } from "@/styles/wallet"
import { EBitcoinUnit } from "@/utils/bitcoin/network"
import { Text, View } from "react-native"
import { Shadow } from "react-native-shadow-2"

interface SummaryProps {
    // TODO: Define in a right way the properties
    type: any//TxType,
    amount: string,
    conf: any//number,
    hex: string

}

export const Summary = ({ type, amount, conf, hex }: SummaryProps) => {

    const Icon = getTransactionIcon(conf);
    const { color, rotation } = transactionColor(type, conf);

    const renderAmount = () => {
        return (
            <Text style={summaryStyle.amountNumber}>
                {`${type === TxType.OUT ? '- ' : ''}${addDotsToValue(parseInt(amount))}`}
                <Text style={summaryStyle.amountValue}>
                    {`  ${EBitcoinUnit.SAT}`}
                </Text>
            </Text>
        )
    }

    return (
        <View style={summaryStyle.container}>
            <View style={summaryStyle.row}>
                {/*TODO: For some reason the first Text child aligns a bit up*/}
                <View style={summaryStyle.primaryContainer}>
                    { renderAmount()}
                </View>
                <View style={summaryStyle.primaryContainer}>
                    <Text style={[globalStyle.fontFamilyBold, summaryStyle.confValue]}>
                        {conf}
                        <Text style={[globalStyle.fontFamily, summaryStyle.confThreshold]}>
                            {`${renderThreshold(conf)}`}
                        </Text>
                        <Text style={[globalStyle.fontFamilyBold, summaryStyle.confLabel]}>
                            {` ${EN.wallet.transactions.single.conf}`}
                        </Text>
                    </Text>
                </View>
            </View>
            <View style={summaryStyle.row}>
                <Shadow
                    distance={5}
                    startColor={Colors.BlackShadow}
                    offset={[0, 5]}
                >
                    <View style={[summaryStyle.txIcon, genericColor(color).border]}>
                        <Icon color={color} fontSize={30} rotate={rotation} />
                    </View>
                </Shadow>
                <View style={summaryStyle.txHexContainer}>
                    <Text style={[globalStyle.fontFamily, summaryStyle.txHexFormat]}>{hex}</Text>
                </View>
            </View>
        </View>
    )
}