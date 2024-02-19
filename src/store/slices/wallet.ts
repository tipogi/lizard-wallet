import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INewWallet } from '../types/wallet';

export type WalletState = {
    derivationPath: String,
    name: String,
    number: number
}

const walletInitialState: WalletState = {
    derivationPath: '',
    name: '',
    number: 0
}

export const walletSlice = createSlice({
    name: 'wallet',
    initialState: walletInitialState,
    reducers: {
        updateWallet: (state, action: PayloadAction<INewWallet>) => {
            state = action.payload
        },
        updateSelectedWallet: (state, action: PayloadAction<number>) => {
            state.number = action.payload
        }
    }
});

const { actions, reducer } = walletSlice;

export const { updateWallet, updateSelectedWallet } = actions;

export default reducer;