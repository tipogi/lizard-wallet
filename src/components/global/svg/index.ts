import { ColorValue } from "react-native";

export interface IconProps {
    fontSize: number,
    color: ColorValue,
    rotate?: number
}

export { BroadcastStream } from "./BroadcastStream";
export { ShieldCheck } from "./ShieldCheck";
export { Utxos } from "./Utxos";
export { LockClosed } from './LockClosed';
export { MultipleLayers } from './MultipleLayer';
export { Close } from './Close';
export { ScanAddress } from './ScanAddress';
export { Wallet } from './Wallet';
export { TagIcon } from './Tag';
export { Grape } from './Grape';
export { In } from './In';
export { Out } from './Out';
export { Qr } from './Qr';
export { Tick } from './Tick';
export { Custom } from './Custom';
export { Clock } from './Clock';

// Exported using SVG format not tsx. That was done because hot corner
//export { Settings } from './Settings';

// Not in use
export { Tail } from './Tail';
export { Palette } from './Palette';
export { Drop } from './Drop';