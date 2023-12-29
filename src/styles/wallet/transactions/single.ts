import { APP_FONT, Colors } from "@/constants";
import { APP_FONT_BOLD, H4 } from "@/constants/font";
import { StyleSheet } from "react-native";

export const singleTxStyle = StyleSheet.create({
  font: {
    fontFamily: APP_FONT,
    fontSize: H4
  },
  fontBold: {
    fontFamily: APP_FONT_BOLD,
    fontSize: H4
  },
  secondaryColor: {
    color: Colors.Grey
  },
  container: {
    display: "flex",
    flex: 1
  },
  infoContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    gap: 5
  },
  detailsContainer: {
    display: "flex",
    margin: 40,
    gap: 25
  },
  row: {
    display: "flex",
    flexDirection: "row"
  },
  center: {
    justifyContent: "center",
    marginTop: 20
  },
  clipBtn: {
    backgroundColor: Colors.Yellow,
    width: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  clipTxt: {
    fontFamily: APP_FONT,
    fontSize: H4,
    padding: 10
  },
});

export const dynamicBackground = (background: Colors) => StyleSheet.create({
  container: {
    backgroundColor: background
  },
  txColor: {
    color: background,
    fontFamily: APP_FONT
  }
})