import { UnknownAction, combineReducers } from 'redux';
import wallet from '../slices/wallet';
import { persistReducer } from 'redux-persist';
import { storage } from './persistence';

const rootReducer = combineReducers({
  wallet
});

const RESET = false;

const rootReducerWithReset = (
  state: ReturnType<typeof rootReducer> | undefined,
  action: UnknownAction
): ReturnType<typeof rootReducer> => {
  if (!RESET) {
    return rootReducer(undefined, action)
  }
  return rootReducer(state, action)
}

//export type RootReducer = ReturnType<typeof rootReducerWithReset>;

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: []
}

export default persistReducer(rootPersistConfig, rootReducerWithReset);