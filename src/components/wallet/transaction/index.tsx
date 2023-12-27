import { Skeleton } from "@/components/global/layouts";
import { HeaderType } from "@/components/global/layouts/headers";
import { In } from "@/components/global/svg";
import { NAVIGATION } from "@/constants/navigation";
import { TransactionHeaderIcon, headerText, transactionColor } from "@/data/entities/transactions";
import { dynamicBackground, singleTxStyle } from "@/styles/wallet";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const Transaction = () => {
    const { conf, type } = useLocalSearchParams();
    const background = transactionColor(type, conf);

    return (
        <View style={[ singleTxStyle.container, dynamicBackground(background).container ]}>
            <Skeleton
                headerType={HeaderType.Icon}
                headline={headerText(type,conf)}
                backAction={NAVIGATION.wallet}
                icon={TransactionHeaderIcon(type,conf)}
            >
                <Text>Transaction Unit</Text>
            </Skeleton>
        </View>
    )
}

export default Transaction;