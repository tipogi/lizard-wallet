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