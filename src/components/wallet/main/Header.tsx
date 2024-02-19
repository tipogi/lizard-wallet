import { Text, TouchableOpacity, View } from 'react-native';
import { BroadcastStream, Utxos, ShieldCheck } from '@/assets/svg';
import { Link } from 'expo-router';
import { NAVIGATION } from '@/constants/navigation';
import { addDotsToValue } from '@/data/convertions';
import { Colors } from '@/constants';
import { headerStyle } from '@/styles/wallet';

const WalletHeader = () => {
  return (
    <View style={headerStyle.container}>
      <View style={headerStyle.actionBar}>
        <View style={headerStyle.status}>
          <ShieldCheck fontSize={25} color={Colors.Background}/>
          <Text style={headerStyle.description}>cold wallet</Text>
        </View>
        <View style={headerStyle.options}>
          <BroadcastStream fontSize={18} color={Colors.Background} />
          <Link href={NAVIGATION.utxos} asChild style={headerStyle.icon}>
            <TouchableOpacity>
              <Utxos fontSize={15} color={Colors.Background}/>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
      <View style={headerStyle.info}>
        <Text style={headerStyle.balance}>{`${addDotsToValue(435493)} sat`}</Text>
      </View>
    </View>
  );
}

export default WalletHeader;