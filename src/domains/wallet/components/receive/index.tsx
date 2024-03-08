import { Skeleton } from "@/global/components/layouts"
import { Clipboard, Custom, Qr, Tick } from "@/assets/svg";
import { Colors } from "@/constants"
import { NAVIGATION } from "@/constants/navigation"
import { EN } from "@/constants/translations"
import { Text, View } from "react-native"
import TagInput from "./TagInput";
import ColorInput from "./ColorInput";
import { styles } from "@/domains/wallet/styles";
import { Address, ButtonWithIcon } from "@/global/components/elements";

const Receive = () => {

    const renderAddressInChunks = (address: string) => {
        
    }
    return (
        <View style={styles.receiveContainer}>
            <Skeleton
                backAction={NAVIGATION.wallet}
            >
                <View style={styles.bodyContainer}>
                    <View style={styles.qr}>
                        <Qr fontSize={200} color={Colors.Green} />
                        <View style={styles.addressContainer}>
                            <Address
                                value="tb1qe7un5dvqd26yp7mu0h35a0c9d05ylg2h8ealaq"
                            />
                        </View>
                        <Text style={styles.derivationColor}>m/84'/1'/0'/0/5</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <TagInput />
                        <View style={styles.property}>
                            <Tick fontSize={22} color={Colors.Green} />
                            <Text style={styles.font}>{EN.wallet.receive.reuse}</Text>
                        </View>
                        <ColorInput />
                        <View style={styles.property}>
                            <Custom fontSize={22} color={Colors.Green} />
                            <Text style={styles.font}>{EN.wallet.receive.customise}</Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <ButtonWithIcon
                            tag={EN.wallet.receive.clipboard}
                            Icon={Clipboard}
                            size={20}
                            background={Colors.Green}
                        />
                    </View>
                </View>
            </Skeleton>
        </View>
    )
}

export default Receive;