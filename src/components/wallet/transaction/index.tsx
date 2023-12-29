import { Skeleton } from "@/components/global/layouts";
import { HeaderType } from "@/components/global/layouts/headers";
import { BarChart, HashTag, TimeLock, Verified, Version } from "@/components/global/svg";
import { APP_FONT, H3, H4 } from "@/constants/font";
import { NAVIGATION } from "@/constants/navigation";
import { TransactionHeaderIcon, headerText, transactionColor } from "@/data/entities/transactions";
import { dynamicBackground, singleTxStyle } from "@/styles/wallet";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TxDetail from "./TxDetail";
import TxHex from "./TxHex";
import TxTag from "./TxTag";
import { EN } from "@/constants/translations";
import { Colors } from "@/constants";

const Transaction = () => {
    const { conf, type } = useLocalSearchParams();
    const background = transactionColor(type, conf);

    return (
        <View style={[singleTxStyle.container, dynamicBackground(background).container]}>
            <Skeleton
                headerType={HeaderType.Icon}
                headline={headerText(type, conf)}
                backAction={NAVIGATION.wallet}
                icon={TransactionHeaderIcon(type, conf)}
            >
                <View style={singleTxStyle.detailsContainer}>
                    <View style={singleTxStyle.row}>
                        <View>
                            <HashTag color={background} fontSize={H4} />
                        </View>
                        <View style={singleTxStyle.infoContainer}>
                            <Text
                                style={[dynamicBackground(background).txColor, singleTxStyle.fontBold]}
                            >transaction id</Text>
                            <Text style={[singleTxStyle.secondaryColor, singleTxStyle.font]}>c76844da3f2e9062266f021ca07dbec842b17dd609076b82dc9e4bde813a1c1e</Text>
                        </View>
                    </View>
                    <TxDetail
                        icon={BarChart}
                        iconSize={20}
                        background={background}
                        text="fees"
                        value={[
                            { text: "256 sat", active: false }
                        ]}
                    />
                    <TxDetail
                        icon={Verified}
                        iconSize={18}
                        background={background}
                        text="features"
                        value={[
                            { text: "rbf", active: true },
                            { text: "segwit", active: false },
                            { text: "taproot", active: true }
                        ]}
                    />
                    <TxDetail
                        icon={Version}
                        iconSize={20}
                        background={background}
                        text="version"
                        value={[
                            { text: "2", active: false }
                        ]}
                    />
                    <TxDetail
                        icon={TimeLock}
                        iconSize={20}
                        background={background}
                        text="locktime"
                        value={[
                            { text: "0", active: false }
                        ]}
                    />
                    <TxHex
                        link=""
                        background={background}
                    />
                    <TxTag
                        tag=""
                        background={background}
                    />
                    <View style={[singleTxStyle.row, singleTxStyle.center]}>
                        <TouchableOpacity style={[singleTxStyle.clipBtn, dynamicBackground(background).container]}>
                            <Text style={singleTxStyle.clipTxt}>{EN.wallet.transactions.single.view}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Skeleton>
        </View>
    )
}

export default Transaction;