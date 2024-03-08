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
export { Arrow } from './Arrow';
export { Qr } from './Qr';
export { Tick } from './Tick';
export { Custom } from './Custom';
export { Clock } from './Clock';
export { BarChart } from './BarChart';
export { Format } from './Format';
export { HashTag } from './HashTag';
export { TimeLock } from './TimeLock';
export { Verified } from './Verified';
export { Version } from './Version';
export { Share } from './Share';
export { Color } from './Color';
export { Fingerprint } from './Fingerprint';
export { Sign } from './Sign';
export { Import } from './Import';
export { Rubbish } from './Rubbish';
export { Dashboard } from './Dashboard';
export { Back } from './Back';
export { Clipboard } from './Clipboard';
export { Pool } from './Pool';
export { Search } from './Search';
export { Filter } from './Filter';
export { Calendar } from './Calendar';

// Exported using SVG format not tsx. That was done because hot corner
export { Settings } from './Settings';

// Not in use
//export { Tail } from './Tail';
//export { Palette } from './Palette';
//export { Drop } from './Drop';