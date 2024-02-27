import { EBitcoinNetwork } from "@/utils/bitcoin/network";
import { TSettingsState } from "../types/settings";

export const settingsInitialState: TSettingsState = {
    selectedNetwork: EBitcoinNetwork.MAINNET,
    onionRouting: false,
    electrumEndpoints: []
}