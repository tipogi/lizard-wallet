import { Arrow } from "@/assets/svg"
import { Colors, TTxColors } from "@/constants"
import { TxType } from "@/constants/bitcoin"
import { EN } from "@/constants/translations"
import { addDotsToValue } from "@/data/convertions"
import { getTransactionIcon, renderThreshold, transactionColor } from "@/data/entities/transactions"
import { fontStyle, iconSizes } from "@/global"
import { genericColor, summaryStyle } from "@/domains/wallet/styles"
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
            <Text style={[ fontStyle.extrabold, fontStyle.h1_s, summaryStyle.amountNumber]}>
                {`${type === TxType.OUT ? '- ' : ''}${addDotsToValue(parseInt(amount))}`}
                <Text style={[fontStyle.regular, fontStyle.h4, summaryStyle.amountValue]}>
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
                <View style={[ summaryStyle.primaryContainer, { paddingBottom: 3} ]}>
                    <Text style={[fontStyle.semibold, fontStyle.h3_s, summaryStyle.confValue]}>
                        {conf}
                        <Text style={[fontStyle.regular, fontStyle.h4_s, summaryStyle.confThreshold]}>
                            {`${renderThreshold(conf)}`}
                        </Text>
                        <Text style={[fontStyle.semibold, fontStyle.h5, summaryStyle.confLabel]}>
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
                        <Icon color={color} fontSize={iconSizes.XLARGE} rotate={rotation} />
                    </View>
                </Shadow>
                <View style={summaryStyle.txHexContainer}>
                    <Text style={[fontStyle.semibold, fontStyle.h4_s, summaryStyle.txHexFormat]}>{hex}</Text>
                </View>
            </View>
        </View>
    )
}