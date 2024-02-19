import { Clock, IconProps, In, Out } from "@/assets/svg";
import { Colors, txColors } from "@/constants";
import { TxType, UNCONFIRMED_TX } from "@/constants/bitcoin";
import { EN } from "@/constants/translations";

// #TODO: expo-router UnknownOutputParams does not match, these arguments when we use the hook
export const transactionColor = (type: any, conf: any): txColors => {
    if (conf < UNCONFIRMED_TX) {
        return Colors.Yellow; 
    } else if (type === TxType.IN) {
        return Colors.Green;
    }
    return Colors.Red;
}

export const headerText = (type: any,conf: any): string => {
    if (conf < UNCONFIRMED_TX) {
        return `${EN.wallet.transactions.single.notConf} (${conf}/2)`; 
    } else if (type === TxType.IN) {
        return `${EN.wallet.transactions.single.in} (${conf} ${EN.wallet.transactions.single.conf})`;
    }
    return `${EN.wallet.transactions.single.out} (${conf} ${EN.wallet.transactions.single.conf})`;
    
}

export const TransactionHeaderIcon = (type: any, conf: any): React.ElementType<IconProps> => {
    if (conf < UNCONFIRMED_TX) {
        return Clock; 
    } else if (type === TxType.IN) {
        return In;
    }
    return Out;
}