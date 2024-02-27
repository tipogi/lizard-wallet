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
        console.log('reduxStorage: setItem')
        storage.set(key, value)
        console.log(value)
        return Promise.resolve(true)
    },
    getItem: key => {
        console.log('reduxStorage: getItem')
        const value = storage.getString(key)
        console.log(key, value)
        return Promise.resolve(value)
    },
    removeItem: key => {
        console.log('reduxStorage: removeItem')
        storage.delete(key)
        return Promise.resolve()
    },
}

export default reduxMmkvStorage;