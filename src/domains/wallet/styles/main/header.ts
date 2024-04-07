import { Color } from "@/assets/svg";
import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const headerStyle = StyleSheet.create({
    container: {
      flex: 1,
      height: "15%",
      paddingVertical: 10,
      paddingHorizontal: 15
    },
    actionBar: {
      flex:1,
      alignItems: "center",
      justifyContent: 'space-between',
      flexDirection:"row"
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
    description: {
      paddingLeft: 10,
    },
    options: {
      justifyContent: "flex-end",
      alignItems: 'center',
      flexDirection:"row",
      flex: 1,
      paddingRight: 15,
      gap: 10
    },
    info: {
      flex:3,
      paddingRight: 20,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: "center",
    },
    balance: {
      color: Colors.Background
    }
  });