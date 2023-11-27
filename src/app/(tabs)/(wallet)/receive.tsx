import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function ReceiveUTXO() {
  return (
    <View style={styles.container}>
      <Text>Receive UTXO</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E97A7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
