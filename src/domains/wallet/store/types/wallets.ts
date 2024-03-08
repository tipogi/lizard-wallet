import { TAddress } from "@/utils/bitcoin/address"

export type TWalletState = {
    utxos: TUtxoState[],
    transactions: TTransactionsState[],
    addresses: TAddressState[],
    selectedTransaction: number | undefined,
    selectedUtxo: number | undefined
}

export type TUtxoState = {
    balance: number,
    address: string
}

export type TTransactionsState = {
    derivationPath: String,
    name: String,
    number: number
}

export type TAddressState = {
    type: TAddress,
    derivationPath: string,
    tag: string,
    color: string,
    used: boolean
}