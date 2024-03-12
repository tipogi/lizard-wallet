export const INDEX = 'index'
export const ROOT = '/'

export const WALLET_SCREEN = "(wallet)"
export const UTXO_SCREEN = "utxos"
export const RECEIVE_SCREEN = "receive"
export const TX_SCREEN = "transaction"

export const SETTINGS_SCREEN = "(settings)"

export const ACCOUNT_SCREEN = "(accounts)"
export const IMPORT_ACCOUNT = "import"
export const EDIT_ACCOUNT = "edit"
export const DELETE_ACCOUNT = "delete"

export enum NAVIGATION {
    wallet = `/(tabs)/${WALLET_SCREEN}/`,
    utxos = `/(tabs)/${WALLET_SCREEN}/${UTXO_SCREEN}`,
    receive = `/(tabs)/${WALLET_SCREEN}/${RECEIVE_SCREEN}`,
    transaction = `/(tabs)/${WALLET_SCREEN}/${TX_SCREEN}`,
    settings = `/(tabs)/${SETTINGS_SCREEN}`,
    account = `/(tabs)/${ACCOUNT_SCREEN}/`,
    import = `/(tabs)/${ACCOUNT_SCREEN}/${IMPORT_ACCOUNT}`,
    delete = `/(tabs)/${ACCOUNT_SCREEN}/${DELETE_ACCOUNT}`,
    edit = `/(tabs)/${ACCOUNT_SCREEN}/${EDIT_ACCOUNT}`
}