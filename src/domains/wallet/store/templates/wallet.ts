import { TWalletState } from "../types/wallets";

export const walletInitialState: TWalletState = {
    utxos: [],
    transactions: [],
    addresses: [],
    selectedTransaction: undefined,
    selectedUtxo: undefined
}