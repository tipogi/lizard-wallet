import AccountComponent from '@/domains/accounts/components/main';
import { NAVIGATION } from '@/constants/navigation';
import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Accounts() {
  return (
    <View style={styles.container}>
      <AccountComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222F3A',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

/**
<View style={styles.container}>
      <Text>Accounts</Text>
      <Link href={NAVIGATION.add_account} asChild>
        <TouchableOpacity>
          <Text>Add account</Text>
        </TouchableOpacity>
      </Link>
    </View>
 */