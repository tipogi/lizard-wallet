import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const StoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Provider
            store={store}
        >
            <PersistGate
                persistor={persistor}
            >
                {children}
            </PersistGate>
        </Provider>
    )
}

export default StoreProvider;