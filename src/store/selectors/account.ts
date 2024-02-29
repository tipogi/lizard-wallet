import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../config/store";
import { TAccountsState, TAtomicAccountState } from "../types/accounts";

// Animated carousel edges. FlatList element
export type TSlideEdges = {
    fingerprint: string
}

export type TAccountCarouselElements = (TSlideEdges | TAtomicAccountState)[];

export const accountState = (state: RootState): TAccountsState => {
	return state.accounts;
};

export const accountsSelector = createSelector(
	accountState,
    // TODO: the network type has to be generic depending the selected network
	(account): TAtomicAccountState[] => account.mainnet
);

export const accountAmountSelector = createSelector(
    accountState,
    (account) => account.mainnet.length
)


type Person = {
    name: string;
    age: number;
  }
  
  type Animal = {
    name: string;
  
    species: string;
  }

  function isPerson(obj: Person | Animal): obj is Person {
    return (obj as Person).age !== undefined;
  }