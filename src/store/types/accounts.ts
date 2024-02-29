import { TSlideEdges } from "../selectors/account"

export type TAccountsState = {
    selectedAccount: number | undefined,
    mainnet: TAtomicAccountState[],
    testnet: TAtomicAccountState[]
}

export type TAtomicAccountState = {
    name: string,
    descriptor: string,
    fingerprint: string,
    balance: number,
    colors: string[],
    default: boolean,
    policy?: boolean
}

// Create a type guard to verify our object is AtomicTypeState
export const isAtomicAccount = (account: TSlideEdges | TAtomicAccountState): account is TAtomicAccountState => {
    return (account as TAtomicAccountState).descriptor !== undefined
}