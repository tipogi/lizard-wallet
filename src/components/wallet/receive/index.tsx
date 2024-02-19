import { SimpleHeader } from "@/components/global/layouts"
import { Close, Custom, Qr, Tick } from "@/assets/svg";
import { Colors } from "@/constants"
import { NAVIGATION } from "@/constants/navigation"
import { EN } from "@/constants/translations"
import { Text, TouchableOpacity, View } from "react-native"
import TagInput from "./TagInput";
import ColorInput from "./ColorInput";
import { styles } from "@/styles/wallet";

const Receive = () => {
    return (
        <>
            <SimpleHeader
                icon={Close}
                headline={EN.wallet.receive.headline}
                backAction={NAVIGATION.wallet}
                iconColor={Colors.Background}
            />
            <View style={styles.main}>
                <View style={styles.container}>
                    <View style={styles.qr}>
                        <Qr fontSize={200} color={Colors.Yellow} />
                        <Text style={styles.details}>tb1qe7un5dvqd26yp7mu0h35a0c9d05ylg2h8ealaq</Text>
                        <Text style={[styles.details, styles.derivationColor]}>m/84'/1'/0'/0/5</Text>
                    </View>
                    <View style={styles.othersContainer}>
                        <TagInput />
                        <View style={styles.property}>
                            <Tick fontSize={22} color={Colors.Yellow} />
                            <Text style={styles.font}>{EN.wallet.receive.reuse}</Text>
                        </View>
                        <ColorInput />
                        <View style={styles.property}>
                            <Custom fontSize={22} color={Colors.Yellow} />
                            <Text style={styles.font}>{EN.wallet.receive.customise}</Text>
                        </View>
                        <View style={styles.clipboard}>
                            <TouchableOpacity style={styles.clipBtn}>
                                <Text style={styles.clipTxt}>{EN.wallet.receive.clipboard}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        </>
    )
}

export default Receive;