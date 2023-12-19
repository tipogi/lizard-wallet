import { SimpleHeader } from "@/components/global/layouts"
import { Close, Qr } from "@/components/global/svg"
import { Colors } from "@/constants"
import { NAVIGATION } from "@/constants/navigation"
import { EN } from "@/constants/translations"
import { StyleSheet, Text, View } from "react-native"

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
                    <Qr fontSize={150} color={Colors.Yellow}/>
                    <Text>tb1qe7un5dvqd26yp7mu0h35a0c9d05ylg2h8ealaq</Text>
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
      paddingTop: 30
    },
    container: {
        display: "flex",
        alignItems: "center",

    }
  });

export default Receive;