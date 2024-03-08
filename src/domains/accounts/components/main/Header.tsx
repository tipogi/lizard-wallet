import { TouchableOpacity, View } from 'react-native';
import { Import, Rubbish, Dashboard } from '@/assets/svg';
import { Link } from 'expo-router';
import { NAVIGATION } from '@/constants/navigation';
import { Colors } from '@/constants';
import { headerStyle } from '@/domains/accounts/styles';

const AccountsHeader = () => {
  return (
    <View style={headerStyle.container}>
      <View style={headerStyle.actionBar}>
        <View style={headerStyle.status}>
          <Link href={NAVIGATION.import} asChild style={headerStyle.icon}>
            <TouchableOpacity>
              <Import fontSize={18} color={Colors.Background} />
            </TouchableOpacity>
          </Link>
        </View>
        <View style={headerStyle.options}>
        <Link href={NAVIGATION.edit} asChild style={headerStyle.icon}>
            <TouchableOpacity>
              <Dashboard fontSize={18} color={Colors.Background} />
            </TouchableOpacity>
          </Link>
          <Link href={NAVIGATION.delete} asChild style={headerStyle.icon}>
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