import { TxType } from "./bitcoin";

export enum Colors {
    Background = '#222F3A',
    BottomTab = '#222F3A',
    White = "#ffffff",
    Green = "#03DFA1",
    Yellow = "#FFBB38",
    Red = "#FF8E72"
}

export type txColors = Colors.Green | Colors.Red | Colors.Yellow;

export const transactionColor = (type: TxType): txColors => {
    switch (type) {
        case TxType.SEND:
            return Colors.Red;
        case TxType.RECEIVE:
            return Colors.Green;
        case TxType.PENDING:
            return Colors.Yellow;
    }
}