export { EN } from "./EN";

export type TDictionary = {
    wallet: {
        receive: {
            headline: string,
            tag: string,
            reuse: string,
            utxoColor: string,
            customise: string,
            clipboard: string,
            modal: {
                tag: {
                    headline: string,
                    placeholder: string
                },
                color: {
                    headline: string
                }
            }
        },
        utxos: {
            headline: string
        },
        transactions: {
            single: {
                in: string,
                out: string,
                conf: string,
                notConf: string,
                view: string
            }
        },
    },
    settings: {
        elements: {
            tor: string,
            node: string,
            pin: string,
            blockExplorer:string,
            backup: string
        },
        headline: string
    },
    generic: {
        button: {
            save: string,
            cancel: string
        }
    }
}