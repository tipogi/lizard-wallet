import { SimpleHeader } from "@/components/global/layouts"
import { Close, Custom, Grape, Palette, Qr, Tick } from "@/components/global/svg";
import { Colors } from "@/constants"
import { NAVIGATION } from "@/constants/navigation"
import { EN } from "@/constants/translations"
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import TagInput from "./TagInput";

const Receive = () => {
    return (
        <>
            <SimpleHeader
                icon={Close}
                text={EN.wallet.receive.headline}
                backAction={NAVIGATION.wallet}
                color={Colors.Background}
                fontSize={30}
            />
            <View style={styles.main}>
                <View style={styles.container}>
                    <View style={styles.qr}>
                        <Qr fontSize={200} color={Colors.Yellow}/>
                        <Text style={styles.address}>tb1qe7un5dvqd26yp7mu0h35a0c9d05ylg2h8ealaq</Text>
                    </View>
                    <TagInput/>
                    <View style={styles.property}>
                        <Tick fontSize={22} color={Colors.Yellow}/>
                        <Text style={styles.font}>{ EN.wallet.receive.reuse }</Text>
                    </View>
                    <View style={styles.property}>
                        <Grape fontSize={22} color={Colors.Yellow}/>
                        <Text style={styles.font}>{ EN.wallet.receive.utxoColor }</Text>
                    </View>
                    <View style={styles.property}>
                        <Custom fontSize={22} color={Colors.Yellow}/>
                        <Text style={styles.font}>{ EN.wallet.receive.customise }</Text>
                    </View>
                    <View style={styles.clipboard}>
                        <TouchableOpacity style={styles.clipBtn}>
                            <Text style={styles.clipTxt}>{ EN.wallet.receive.clipboard }</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    main: {
      backgroundColor: Colors.Background,
      marginTop: "auto",
      height: "85%",
      display: "flex",
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,
    },
    container: {
        display: "flex",
        paddingLeft: 50,
        paddingRight: 50,
        gap: 30
    },
    qr: {
        marginTop: 40,
        marginBottom: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    address: {
        fontFamily: "karantina-light",
        fontSize: 30,
        color: Colors.Grey
    },
    property: {
        display: "flex",
        flexDirection: "row"
    },
    clipboard: {
        display: "flex",
        marginTop: 80,
        alignItems: "center",
    },
    clipBtn: {
        backgroundColor: Colors.Yellow,
        width: "70%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    clipTxt: {
        color: Colors.Background,
        fontFamily: "karantina-light",
        fontSize: 28,
        padding: 10
    },
    font: {
        fontFamily: "karantina-light",
        fontSize: 22,
        color: Colors.Grey,
        marginLeft: 15
    }
  });

export default Receive;