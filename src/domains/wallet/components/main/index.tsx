import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Colors } from '@/constants';
import TransactionList from './TransactionList';
import WalletHeader from './Header';

export const WalletComponent = () => {
    return (
        <View style={styles.container}>
            <WalletHeader/>
            <View style={styles.main}>
                <TransactionList />
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
        height: "80%",
        display:"flex",
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    }
});