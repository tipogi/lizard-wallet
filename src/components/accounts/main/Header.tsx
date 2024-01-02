import { TouchableOpacity, View } from 'react-native';
import { BroadcastStream, Utxos, ShieldCheck } from '@/components/global/svg';
import { Link } from 'expo-router';
import { NAVIGATION } from '@/constants/navigation';
import { Colors } from '@/constants';
import { headerStyle } from '@/styles/accounts';

const AccountsHeader = () => {
  return (
    <View style={headerStyle.container}>
      <View style={headerStyle.actionBar}>
        <View style={headerStyle.status}>
          <ShieldCheck fontSize={25} color={Colors.Background}/>
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
    </View>
  );
}

export default AccountsHeader;