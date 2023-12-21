import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BroadcastStream, Utxos, ShieldCheck } from '@/components/global/svg';
import { Link } from 'expo-router';
import { NAVIGATION } from '@/constants/navigation';
import { addDotsToValue } from '@/data/convertions';
import { Colors } from '@/constants';

const WalletHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.actionBar}>
        <View style={styles.status}>
          <ShieldCheck fontSize={30} color={Colors.Background}/>
          <Text style={styles.description}>Hot Wallet</Text>
        </View>
        <View style={styles.options}>
          <BroadcastStream fontSize={20} color={Colors.Background} />
          <Link href={NAVIGATION.utxos} asChild style={styles.icon}>
            <TouchableOpacity>
              <Utxos fontSize={15} color={Colors.Background}/>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.balance}>{`${addDotsToValue(435493)} sat`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "15%",
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  actionBar: {
    flex:1,
    alignItems: "center",
    justifyContent: 'space-between',
    flexDirection:"row"
  },
  icon: {
    padding: 15
  },
  status: {
    alignItems: 'center',
    flexDirection:"row",
    justifyContent: "flex-start",
    flex: 4
  },
  description: {
    paddingLeft: 10,
    fontFamily: "karantina-light",
    fontSize: 30
  },
  options: {
    justifyContent: "flex-end",
    alignItems: 'center',
    flexDirection:"row",
    flex: 1,
    paddingRight: 15,
    gap: 25
  },
  info: {
    flex:3,
    paddingRight: 60,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: "center",
  },
  balance: {
    fontSize: 60,
    //fontFamily: "share-techno-regular",
    fontFamily: "karantina-regular"
  }
});

export default WalletHeader;