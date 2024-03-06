export enum Colors {
    Background = '#222F3A',
    Navigation = '#2E3B46',
    BackgroundBlur = 'rgba(0, 0, 0, .9)',
    White = "#ffffff",
    WhiteSoft = "#c1c1c1",
    AlmostWhite = "#e1e1e1",
    Green = "#03DFA1",
    Yellow = "#FFBB38",
    YellowPlaceholder = "#f9e5be",
    Red = "#FF8E72",
    Grey = "#909090",
    SoftBlack = "#4D4D4D",
    Black = "#000000",
    // Related accounts Card
    GreenSoft = "#15F5BA",
    GreySoft = "#BFC6CE"
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