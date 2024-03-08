import { Arrow,  IconProps, Pool } from "@/assets/svg";
import { Colors, TTxColors } from "@/constants";
import { TTxState, TxType } from "@/constants/bitcoin";
import { EN } from "@/constants/translations";

export type TxIconProps = {
    color: TTxColors,
    rotation?: number
}

// #TODO: expo-router UnknownOutputParams does not match, these arguments when we use the hook
export const transactionColor = (type: any, conf: any): TxIconProps => {
    if (parseInt(conf) === TTxState.MEMPOOL_TX) {
        return { color: Colors.Yellow };
    } else if (type === TxType.IN) {
        return { color: Colors.Green, rotation: 45 };
    }
    return { color: Colors.Red, rotation: -45 };
}

// DEPRECATED: v1
export const headerText = (type: any, conf: any): string => {
    if (parseInt(conf) < TTxState.UNCONFIRMED_TX) {
        return `${EN.wallet.transactions.single.notConf} (${conf}/${TTxState.UNCONFIRMED_TX})`;
    } else if (type === TxType.IN) {
        return `${EN.wallet.transactions.single.in} (${conf} ${EN.wallet.transactions.single.conf})`;
    }
    return `${EN.wallet.transactions.single.out} (${conf} ${EN.wallet.transactions.single.conf})`;
}

export const renderThreshold = (conf: string) => {
    if (parseInt(conf) <= TTxState.UNCONFIRMED_TX) {
        return ` /${TTxState.UNCONFIRMED_TX}`;
    }
    return ''
}

export const getTransactionIcon = (conf: any): React.ElementType<IconProps> => {
    if (parseInt(conf) === TTxState.MEMPOOL_TX) {
        return Pool;
    } else {
        return Arrow;
    }
}