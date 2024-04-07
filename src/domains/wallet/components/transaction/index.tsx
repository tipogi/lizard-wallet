import { Skeleton } from "@/global/components/layouts";
import { BarChart, Calendar, Search, TimeLock, Verified, Version } from "@/assets/svg";
import { NAVIGATION } from "@/constants/navigation";
import { transactionColor } from "@/data/entities/transactions";
import { singleTxStyle } from "@/domains/wallet/styles";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import TxDetail from "./TxDetail";
import TxTag from "./TxTag";
import { EN } from "@/constants/translations";
import { Summary } from "./Summary";
import { ButtonWithIcon } from "@/global/components/elements";
import { iconSizes } from "@/global";

const Transaction = () => {
    const { conf, type } = useLocalSearchParams();
    const { color: background } = transactionColor(type, conf);

    return (
        <View style={[singleTxStyle.container]}>
            <Skeleton
                backAction={NAVIGATION.wallet}
            >
                <View style={singleTxStyle.bodyContainer}>
                    <Summary
                        type={type}
                        conf={conf}
                        amount={"1548884"}
                        hex="c76844da3f2e9062266f021ca07dbec842b17dd609076b82dc9e4bde813a1c1e"
                    />
                    <View style={singleTxStyle.detailsContainer}>
                    <TxDetail
                            icon={Calendar}
                            iconSize={iconSizes.SMALL}
                            background={background}
                            text="timestamp"
                            value={[
                                { data: "01/11/23 18:18", active: false },
                            ]}
                        />
                        <TxDetail
                            icon={BarChart}
                            iconSize={iconSizes.MEDIUM}
                            background={background}
                            text="fees"
                            value={[
                                { data: "256 sat/vB", active: false }
                            ]}
                        />
                        <TxDetail
                            icon={Verified}
                            iconSize={iconSizes.SMALL}
                            background={background}
                            text="features"
                            value={[
                                { data: "rbf", active: true },
                                { data: "segwit", active: false },
                                { data: "taproot", active: true }
                            ]}
                        />
                        <TxDetail
                            icon={Version}
                            iconSize={iconSizes.MEDIUM}
                            background={background}
                            text="version"
                            value={[
                                { data: "2", active: false }
                            ]}
                        />
                        <TxDetail
                            icon={TimeLock}
                            iconSize={iconSizes.MEDIUM * .85}
                            background={background}
                            text="locktime"
                            value={[
                                { data: "88", active: false }
                            ]}
                        />
                        <TxTag
                            tag="After visit my big friends of komodo, time to buy return ticket"
                            background={background}
                        />
                    </View>
                </View>
                <View style={singleTxStyle.buttonContainer}>
                    <ButtonWithIcon
                        width="50%"
                        tag={EN.wallet.transactions.single.view}
                        Icon={Search}
                        size={20}
                        background={background}
                    />
                </View>
            </Skeleton>
        </View>
    )
}

export default Transaction;