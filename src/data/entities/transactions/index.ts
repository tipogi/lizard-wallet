import { Colors } from "@/constants";
import { TxType } from "@/constants/bitcoin";

// #TODO: expo-router UnknownOutputParams does not match, these arguments when we use the hook
export const renderColor = (confirmations: any, txType: any): Colors => {
    if (txType === TxType.SEND) {
        return Colors.Red
    } else if (confirmations < 2) {
        return Colors.Yellow
    } else {
        return Colors.Green
    }
}