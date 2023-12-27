import { APP_FONT, APP_FONT_BOLD } from "@/constants";
import { H1, H4 } from "@/constants/font";
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
      padding: 15
    },
    status: {
      alignItems: 'center',
      flexDirection:"row",
      justifyContent: "flex-start",
      flex: 4
    },
    description: {
      paddingLeft: 10,
      fontFamily: APP_FONT,
      fontSize: H4
    },
    options: {
      justifyContent: "flex-end",
      alignItems: 'center',
      flexDirection:"row",
      flex: 1,
      paddingRight: 15,
      gap: 25
    },
    info: {
      flex:3,
      paddingRight: 60,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: "center",
    },
    balance: {
      fontSize: H1,
      fontFamily: APP_FONT_BOLD
    }
  });