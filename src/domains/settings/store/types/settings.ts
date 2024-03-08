import { EBitcoinNetwork } from "@/utils/bitcoin/network";

export type TSettingsState = {
    selectedNetwork: EBitcoinNetwork,
    onionRouting: boolean,
    electrumEndpoints: string[],
}