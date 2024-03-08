import { UnknownAction, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import reduxMmkvStorage, { storage } from './persistence';

import wallet from '../../domains/wallet/store/slices/wallets';
import accounts from '../../domains/accounts/store/slices/accounts';
import settings from '../../domains/settings/store/slices/settings';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const rootReducer = combineReducers({
  wallet,
  accounts,
  settings
});

const RESET = false;

const rootReducerWithReset = (
  state: ReturnType<typeof rootReducer> | undefined,
  action: UnknownAction
): ReturnType<typeof rootReducer> => {
  if (RESET) {
    console.log('Reseting all the store...')
    storage.clearAll();
    return rootReducer(undefined, action)
  }
  return rootReducer(state, action)
}

export type RootReducer = ReturnType<typeof rootReducerWithReset>;

const rootPersistConfig = {
  key: 'root',
  storage: reduxMmkvStorage,
  blacklist: [],
	stateReconciler: autoMergeLevel2,
  // TODO: Check migrate prop to prepare when the state changes
  version: 1
}

export default persistReducer<RootReducer>(rootPersistConfig, rootReducerWithReset);