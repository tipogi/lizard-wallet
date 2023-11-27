import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { Colors } from '@/constants';
import { WalletHeader } from './header';

export const WalletComponent = () => {
    return (
        <View style={styles.container}>
            <WalletHeader/>
            <View style={styles.main}>
                
            </View>
        </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: Colors.Green
    },
    main: {
        backgroundColor: Colors.Background,
        marginTop: "auto",
        height: "85%",
        display:"flex",
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    }
});


{/* <View>
    <Link href={'/(tabs)/wallet/receive'} asChild>
    <Button title="Receive"/>
    </Link>
</View>
<View >
    <Link href={'/(tabs)/wallet/transaction'} asChild>
    <Button title="Transaction"/>
    </Link>
</View> */}