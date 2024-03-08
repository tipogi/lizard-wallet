import { TAccountsState } from "../types/accounts";

export const accountsInitialState: TAccountsState = {
    selectedAccount: undefined,
    testnet: [],
    mainnet: [
        {
            name: "daily wallet",
            descriptor: "m/84'/1'/0'/0",
            fingerprint: "f8x92ks0",
            balance: 1353299,
            colors: ["red"],
            default: true,
            policy: false,
        },
        {
            name: "ice cube wallet",
            descriptor: "m/84'/1'/0'/0",
            fingerprint: "m38d00d2",
            balance: 34864,
            colors: ["red"],
            default: true,
            policy: false,
        },
        {
            name: "work partners wallet",
            descriptor: "m/84'/1'/0'/0",
            fingerprint: "xod254dd0",
            balance: 5487,
            colors: ["red"],
            default: true,
            policy: false,
        },
        {
            name: "bom xakalaka",
            descriptor: "m/84'/1'/0'/0",
            fingerprint: "x3292jdd0",
            balance: 774511,
            colors: ["red"],
            default: true,
            policy: false,
        }
    ]
}