import { Skeleton } from "@/components/global/layouts";
import { HeaderType } from "@/components/global/layouts/headers";
import { In } from "@/components/global/svg";
import { NAVIGATION } from "@/constants/navigation";
import { renderColor } from "@/data/entities/transactions";
import { dynamicBackground, singleTxStyle } from "@/styles/wallet";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const Transaction = () => {
    const { conf, type } = useLocalSearchParams();
    const background = renderColor(conf, type);

    return (
        <View style={[ singleTxStyle.container, dynamicBackground(background).container ]}>
            <Skeleton
                headerType={HeaderType.Icon}
                headline="confirmed (5 confirmations)"
                backAction={NAVIGATION.wallet}
                icon={In}
            >
                <Text>Transaction Unit</Text>
            </Skeleton>
        </View>
    )
}

export default Transaction;