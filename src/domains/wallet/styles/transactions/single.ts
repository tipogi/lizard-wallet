import { APP_FONT, Colors, TTxColors } from "@/constants";
import { APP_FONT_BOLD, H1, H2, H2_5, H3, H4, H4_2, H5 } from "@/constants/font";
import { StyleSheet } from "react-native";

export const singleTxStyle = StyleSheet.create({
  bodyContainer: {
    display: "flex",
    flex: 6,
    flexDirection: "column"
  },
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
    flex: 1,
    backgroundColor: Colors.Background
  },
  infoContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    gap: 5
  },
  detailsContainer: {
    display: "flex",
    marginHorizontal: 40,
    marginVertical: 20,
    gap: 25
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    flex: 1,
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

export const genericColor = (color: Colors) => StyleSheet.create({
  background: {
    backgroundColor: color
  },
  txColor: {
    color: color,
    fontFamily: APP_FONT
  },
  border: {
    borderColor: color
  }
})

export const summaryStyle = StyleSheet.create({
  container: {
    display: "flex",
    marginHorizontal: 35,
    marginVertical: 15
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30
  },
  primaryContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  amountNumber: {
    color: Colors.White,
    fontSize: H1,
    fontFamily: APP_FONT_BOLD,
  },
  amountValue: {
    color: Colors.Grey,
    fontFamily: APP_FONT,
    fontSize: H4,
    marginLeft: 10,
  },
  confValue: {
    color: Colors.White,
    fontSize: H2_5,
  },
  confThreshold: {
    color: Colors.Grey,
    fontSize: H4
  },
  confLabel: {
    color: Colors.White,
    fontSize: H5
  },
  txIcon: {
    borderRadius: 40,
    borderWidth: 2,
    backgroundColor: Colors.Background,
    borderColor: Colors.Green,
    padding: 15
  },
  txHexContainer: {
    display: "flex",
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10
  },
  txHexFormat: {
    fontSize: H4_2,
    color: Colors.Grey
  }
})