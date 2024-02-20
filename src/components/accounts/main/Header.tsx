import { TouchableOpacity, View } from 'react-native';
import { BroadcastStream, Utxos, ShieldCheck, Import, Rubbish, Dashboard } from '@/assets/svg';
import { Link } from 'expo-router';
import { NAVIGATION } from '@/constants/navigation';
import { Colors } from '@/constants';
import { headerStyle } from '@/styles/accounts';

const AccountsHeader = () => {
  return (
    <View style={headerStyle.container}>
      <View style={headerStyle.actionBar}>
        <View style={headerStyle.status}>
          <Link href={NAVIGATION.utxos} asChild style={headerStyle.icon}>
            <TouchableOpacity>
              <Import fontSize={18} color={Colors.Background} />
            </TouchableOpacity>
          </Link>
        </View>
        <View style={headerStyle.options}>
        <Link href={NAVIGATION.utxos} asChild style={headerStyle.icon}>
            <TouchableOpacity>
              <Dashboard fontSize={18} color={Colors.Background} />
            </TouchableOpacity>
          </Link>
          <Link href={NAVIGATION.utxos} asChild style={headerStyle.icon}>
            <TouchableOpacity>
              <Rubbish fontSize={18} color={Colors.Background} />
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}

export default AccountsHeader;