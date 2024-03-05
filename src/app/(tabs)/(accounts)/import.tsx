import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ImportAccount = () => {
    return (
        <View style={styles.container}>
            {/* <StatusBar style="auto" /> */}
            <Text>Import account Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#222F3A',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default ImportAccount;