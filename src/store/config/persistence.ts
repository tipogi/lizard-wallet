import { MMKV } from "react-native-mmkv";
import { Storage } from "redux-persist";
import { initializeMMKVFlipper } from 'react-native-mmkv-flipper-plugin';

const __ENABLE_MMKV_FLIPPER__ = true;

export const storage = new MMKV();

if (__ENABLE_MMKV_FLIPPER__) {
	initializeMMKVFlipper({ default: storage });
}

const reduxMmkvStorage: Storage = {
    setItem: (key, value) => {
        storage.set(key, value)
        return Promise.resolve(true)
    },
    getItem: key => {
        const value = storage.getString(key)
        return Promise.resolve(value)
    },
    removeItem: key => {
        storage.delete(key)
        return Promise.resolve()
    },
}

export default reduxMmkvStorage;