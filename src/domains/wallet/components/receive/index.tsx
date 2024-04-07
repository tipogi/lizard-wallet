import { Skeleton } from "@/global/components/layouts"
import { Clipboard, Custom, DerivationPath, Qr, Tick } from "@/assets/svg";
import { Colors } from "@/constants"
import { NAVIGATION } from "@/constants/navigation"
import { EN } from "@/constants/translations"
import { Text, View } from "react-native"
import TagInput from "./TagInput";
import ColorInput from "./ColorInput";
import { styles } from "@/domains/wallet/styles";
import { Address, ButtonWithIcon } from "@/global/components/elements";
import { fontStyle, iconSizes } from "@/global";

const Receive = () => {
    return (
        <View style={styles.receiveContainer}>
            <Skeleton
                backAction={NAVIGATION.wallet}
                headerLabel={"Receive"}
            >
                <View style={styles.bodyContainer}>
                    <View style={styles.qr}>
                        <Qr fontSize={200} color={Colors.Green} />
                        <View style={styles.addressContainer}>
                            <Address
                                value="tb1qe7un5dvqd26yp7mu0h35a0c9d05ylg2h8ealaq"
                            />
                        </View>
                    </View>
                    <View style={styles.detailsContainer}>
                        <View style={styles.property}>
                            <DerivationPath fontSize={iconSizes.MEDIUM} color={Colors.Green} />
                            <Text style={[styles.font, fontStyle.main, fontStyle.h5]}>m/84'/1'/0'/0/5</Text>
                        </View>
                        <TagInput />
                        <View style={styles.property}>
                            <Tick fontSize={iconSizes.MEDIUM} color={Colors.Green} />
                            <Text style={[styles.font, fontStyle.main, fontStyle.h5]}>{EN.wallet.receive.reuse}</Text>
                        </View>
                        <ColorInput />
                        <View style={styles.property}>
                            <Custom fontSize={iconSizes.MEDIUM} color={Colors.Green} />
                            <Text style={[styles.font, fontStyle.main, fontStyle.h5]}>{EN.wallet.receive.customise}</Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <ButtonWithIcon
                            width="60%"
                            tag={EN.wallet.receive.clipboard}
                            Icon={Clipboard}
                            size={iconSizes.MEDIUM}
                            background={Colors.Green}
                        />
                    </View>
                </View>
            </Skeleton>
        </View>
    )
}

export default Receive;