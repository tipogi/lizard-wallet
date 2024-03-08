import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { accountsInitialState } from '../templates/account';



export const accountsSlice = createSlice({
    name: 'accounts',
    initialState: accountsInitialState,
    reducers: {
        updateSelectedAccount: (state, action: PayloadAction<number>) => {
            state.selectedAccount = action.payload
        }
    }
});

const { actions, reducer } = accountsSlice;

export const { updateSelectedAccount } = actions;

export default reducer;