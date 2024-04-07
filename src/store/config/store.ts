import { Middleware, configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from "redux-persist";

export const __DEV__ = false;

const middlewares: Middleware[] = [];

if (__DEV__) {
    //const createDebugger = require('redux-flipper').default;
    //middlewares.push(createDebugger());
}

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
            thunk: false,
        }).concat(middlewares),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;