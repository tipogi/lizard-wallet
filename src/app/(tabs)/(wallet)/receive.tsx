import Receive from '@/components/wallet/receive';
import { Colors } from '@/constants';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function ReceiveUTXO() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <Receive/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
});
