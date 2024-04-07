import { StyleSheet } from "react-native";

export const headerStyle = StyleSheet.create({
    container: {
      //flex: 1,
      height: "5%",
      paddingVertical: 10,
      paddingHorizontal: 15,
      zIndex: 5
    },
    actionBar: {
      flex:1,
      alignItems: "center",
      justifyContent: 'space-between',
      flexDirection:"row",
      paddingTop: 15
    },
    icon: {
      padding: 10
    },
    status: {
      alignItems: 'center',
      flexDirection:"row",
      justifyContent: "flex-start",
      flex: 4
    },
    options: {
      justifyContent: "flex-end",
      alignItems: 'center',
      flexDirection:"row",
      flex: 1,
      paddingRight: 15,
      gap: 15
    }
  });