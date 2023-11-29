import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function WalletTransaction() {
  return (
    <View style={styles.container}>
      <Text>Wallet Transaction</Text>
      {/* <StatusBar style="auto" /> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCF96',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
