import { ColorValue } from "react-native";

export interface IconProps {
    fontSize: number,
    color: ColorValue,
    rotate?: number
}

// Account related Icons
export { LockClosed } from './accounts/LockClosed';
export { HashTag } from './accounts/HashTag';
export { Color } from './accounts/Color';
export { Sign } from './accounts/Sign';
export { Import } from './accounts/Import';
export { Rubbish } from './accounts/Rubbish';
export { Dashboard } from './accounts/Dashboard';
export { Broom } from './accounts/Broom';

// Wallet related Icons
export { Clipboard } from './wallet/Clipboard';
export { Pool } from './wallet/Pool';
export { Search } from './wallet/Search';
export { Filter } from './wallet/Filter';
export { Calendar } from './wallet/Calendar';
export { TimeLock } from './wallet/TimeLock';
export { Verified } from './wallet/Verified';
export { Version } from './wallet/Version';
export { Qr } from './wallet/Qr';
export { Tick } from './wallet/Tick';
export { Custom } from './wallet/Custom';
export { BarChart } from './wallet/BarChart';
export { In } from './wallet/In';
export { Out } from './wallet/Out';
export { Utxos } from "./wallet/Utxos";
export { BroadcastStream } from "./wallet/BroadcastStream";
export { Tag } from "./wallet/Tag";


// Settings related Icons
export { Tor } from './settings/Tor';
export { Node } from './settings/Node';
export { Pin } from './settings/Pin';
export { Backup } from './settings/Backup';
export { Block } from './settings/Block';

// Not domain attached Icons
export { Wallet } from './general/menu/Wallet';
export { MultipleLayers } from './general/menu/MultipleLayer';
export { ScanAddress } from './general/menu/ScanAddress';
export { Grape } from './general/Grape';
export { Arrow } from './general/Arrow';
export { Back } from './general/Back';
export { Fingerprint } from './general/Fingerprint';
export { ShieldCheck } from "./general/ShieldCheck";

// Exported using SVG format not tsx. That was done because hot corner
export { Settings } from './general/menu/Settings';

// Not in use
//export { Tail } from './deprecated/Tail';
//export { Palette } from './deprecated/Palette';
//export { Drop } from './deprecated/Drop';
//export { Close } from './deprecated/Close';
//export { Share } from './deprecated/Share';
//export {  } from './deprecated/_Tag';
//export { Clock } from './deprecated/Clock';
//export { Format } from './deprecated/Format';