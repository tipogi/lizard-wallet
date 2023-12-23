import { TxType } from "./bitcoin";

export enum Colors {
    Background = '#222F3A',
    BackgroundBlur = 'rgba(0, 0, 0, .9)',
    BottomTab = '#222F3A',
    White = "#ffffff",
    WhiteSoft = "#c1c1c1",
    Green = "#03DFA1",
    Yellow = "#FFBB38",
    YellowPlaceholder = "#f9e5be",
    Red = "#FF8E72",
    Grey = "#909090",
    Black = "#4D4D4D"
}

export enum GrapeColors {
    Pink = "#ED5AB3",
    Orange = "#FF6C22",
    Purple = "#BC7AF9",
    Blue = "#39A7FF",
    Beige = "#F0EDD4",
    Green = "#9ADE7B",
    Brown = "#A76F6F",
    Red = "#FF0060"
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

export const paletteColors: GrapeColors[] = [
    GrapeColors.Pink,
    GrapeColors.Orange,
    GrapeColors.Purple,
    GrapeColors.Blue,
    GrapeColors.Beige,
    GrapeColors.Green,
    GrapeColors.Brown,
    GrapeColors.Red
];