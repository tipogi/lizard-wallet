import { SimpleHeader } from "@/components/global/layouts"
import { Back, Custom, Qr, Tick } from "@/assets/svg";
import { Colors } from "@/constants"
import { NAVIGATION } from "@/constants/navigation"
import { EN } from "@/constants/translations"
import { Text, View } from "react-native"
import TagInput from "./TagInput";
import ColorInput from "./ColorInput";
import { styles } from "@/styles/wallet";
import { ButtonWithIcon } from "@/components/global/elements";

const Receive = () => {
    return (
        <View style={styles.receiveContainer}>
            <SimpleHeader
                icon={Back}
                headline={EN.wallet.receive.headline}
                backAction={NAVIGATION.wallet}
                iconColor={Colors.Grey}
            />
            <View style={styles.main}>
                <View style={styles.container}>
                    <View style={styles.qr}>
                        <Qr fontSize={200} color={Colors.Green} />
                        <Text style={styles.details}>tb1qe7un5dvqd26yp7mu0h35a0c9d05ylg2h8ealaq</Text>
                        <Text style={[styles.details, styles.derivationColor]}>m/84'/1'/0'/0/5</Text>
                    </View>
                    <View style={styles.othersContainer}>
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
                        <View style={styles.clipboard}>
                            <ButtonWithIcon
                                tag={EN.wallet.receive.clipboard}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Receive;