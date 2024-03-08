import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TWalletState } from '../types/wallets';
import { walletInitialState } from '../templates/wallet';

export const walletsSlice = createSlice({
    name: 'wallets',
    initialState: walletInitialState,
    reducers: {
        updateWallet: (state, action: PayloadAction<TWalletState>) => {
            state = action.payload
        }
    }
});

const { actions, reducer } = walletsSlice;

export const { updateWallet, /*updateSelectedWallet*/ } = actions;

export default reducer;