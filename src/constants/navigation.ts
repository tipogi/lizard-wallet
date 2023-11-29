export const INDEX = 'index'
export const ROOT = '/'

export const WALLET_SCREEN = "(wallet)"
export const UTXO_SCREEN = "utxos"
export const RECEIVE_SCREEN = "receive"
export const TX_SCREEN = "transaction"

export const SETTINGS_SCREEN = "settings"

export const ACCOUNT_SCREEN = "accounts"
export const ADD_ACCOUNT = "add"

export enum NAVIGATION {
    wallet = `/(tabs)/${WALLET_SCREEN}/`,
    utxos = `/(tabs)/${WALLET_SCREEN}/${UTXO_SCREEN}`,
    receive = `/(tabs)/${WALLET_SCREEN}/${RECEIVE_SCREEN}`,
    transaction = `/(tabs)/${WALLET_SCREEN}/${TX_SCREEN}`,
    settings = `/(tabs)/${SETTINGS_SCREEN}`,
    account = `/(tabs)/${ACCOUNT_SCREEN}/`,
    add_account = `/(tabs)/${ACCOUNT_SCREEN}/${ADD_ACCOUNT}`
}