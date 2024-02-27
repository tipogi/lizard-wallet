import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { settingsInitialState } from '../templates/settings';



export const settingsSlice = createSlice({
    name: 'settings',
    initialState: settingsInitialState,
    reducers: {
        
    }
});

const { actions, reducer } = settingsSlice;

export const {  } = actions;

export default reducer;