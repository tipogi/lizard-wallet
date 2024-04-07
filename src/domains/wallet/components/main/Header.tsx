import { Text, TouchableOpacity, View } from 'react-native';
import { BroadcastStream, Utxos, ShieldCheck, ScanAddress } from '@/assets/svg';
import { Link } from 'expo-router';
import { NAVIGATION } from '@/constants/navigation';
import { addDotsToValue } from '@/data/convertions';
import { Colors } from '@/constants';
import { headerStyle } from '@/domains/wallet/styles';
import { fontStyle, iconSizes } from '@/global';

const WalletHeader = () => {
  return (
    <View style={headerStyle.container}>
      <View style={headerStyle.actionBar}>
        <View style={headerStyle.status}>
          <ShieldCheck fontSize={iconSizes.MEDIUM * 1.2} color={Colors.Background}/>
          <Text style={[ headerStyle.description, fontStyle.main, fontStyle.h5 ]}>cold wallet</Text>
        </View>
        <View style={headerStyle.options}>
          <BroadcastStream fontSize={iconSizes.MEDIUM * .8} color={Colors.Background} />
          <Link href={NAVIGATION.utxos} asChild style={headerStyle.icon}>
            <TouchableOpacity>
              <Utxos fontSize={iconSizes.MEDIUM * .7} color={Colors.Background}/>
            </TouchableOpacity>
          </Link>
          <Link href={NAVIGATION.receive} asChild>
            <TouchableOpacity>
              <ScanAddress fontSize={iconSizes.MEDIUM} color={Colors.Background}/>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
      <View style={headerStyle.info}>
        <Text style={[headerStyle.balance,fontStyle.extrabold, fontStyle.h1_s]}>{`${addDotsToValue(435493)} sat`}</Text>
      </View>
    </View>
  );
}

export default WalletHeader;