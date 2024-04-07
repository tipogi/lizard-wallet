import { APP_HEADER_FONT, Colors } from "@/constants";
import { APP_HEADER_FONT_BOLD, H4 } from "@/constants/font";
import { StyleSheet } from "react-native";

export const singleTxStyle = StyleSheet.create({
  bodyContainer: {
    display: "flex",
    flex: 6,
    flexDirection: "column"
  },
  font: {
    fontFamily: APP_HEADER_FONT,
    fontSize: H4
  },
  fontBold: {
    fontFamily: APP_HEADER_FONT_BOLD,
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
    fontFamily: APP_HEADER_FONT,
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
    fontFamily: APP_HEADER_FONT
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
    color: Colors.White
  },
  amountValue: {
    color: Colors.Grey,
    marginLeft: 10,
  },
  confValue: {
    color: Colors.White,
  },
  confThreshold: {
    color: Colors.Grey
  },
  confLabel: {
    color: Colors.White
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
    color: Colors.Grey
  }
})