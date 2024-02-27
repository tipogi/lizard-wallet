import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../config/store";
import { TAccountsState } from "../types/accounts";

// We use first and last elements for the slide effect
const accounts = [
    { fingerprint: "spacer-start" },
    { fingerprint: "spacer-end" }
]

export const accountState = (state: RootState): TAccountsState => {
	return state.accounts;
};

export const accountsSelector = createSelector(
	accountState,
    // TODO: the network type has to be generic depending the selected network
	(account) => {
        console.log('Account List selector: ');
        const accountList = account.mainnet;
        console.log(accountList);
        if (accountList.length != 0) {
            return [
                accounts[0],
                ...accountList,
                accounts[1]
            ]
        }
        return accounts;
    }
);

export const accountAmountSelector = createSelector(
    accountState,
    (account) => account.mainnet.length
)