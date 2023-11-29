import UTXOList from '@/components/wallet/utxolist';
import { Colors } from '@/constants';
import { StyleSheet,View } from 'react-native';

export default function UTXOs() {
  // still do not know which is the best way to render the screen with View or without as ./index.tsx
  return (
    <View style={styles.container}>
      <UTXOList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: Colors.Yellow,
  }
});