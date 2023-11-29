import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BroadcastStream, Utxos, ShieldCheck } from '@/components/global/svg';
import { Link, useRouter } from 'expo-router';
import { NAVIGATION } from '@/constants/navigation';

const WalletHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.actionBar}>
        <View style={styles.status}>
          <ShieldCheck width={30} height={30}/>
          <Text style={styles.description}>Hot Wallet</Text>
        </View>
        <View style={styles.options}>
          <BroadcastStream width={20} height={20}/>
          <Link href={NAVIGATION.utxos} asChild>
            <TouchableOpacity>
              <Utxos width={15} height={15}/>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.balance}>435.493 sat</Text>
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
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection:"row",
  },
  status: {
    alignItems: 'center',
    flexDirection:"row",
    justifyContent: "flex-start",
    flex: 4
  },
  description: {
    paddingLeft: 10
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
    fontSize: 40
  }
});

export default WalletHeader;