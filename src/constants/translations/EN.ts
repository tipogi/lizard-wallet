import { TDictionary } from ".";

export const EN: TDictionary = {
    wallet: {
        receive: {
            headline: "Receive",
            tag: "tap to edit",
            reuse: "never used",
            utxoColor: "choose the color of the UTXO",
            customise: "customise",
            clipboard: "copy to clipboard",
            modal: {
                tag: {
                    headline: "type a custom tag to identify the UTXO",
                    placeholder: "lizard hangout pot"
                },
                color: {
                    headline: "choose the colour of UTXO to identify with other UTXOs that has the same property, source, ..."
                }
            }
        },
        utxos: {
            headline: "Unspent UTXOs"
        },
        transactions: {
            single: {
                in: "received",
                out: "send",
                conf: "conf",
                notConf: "unconfirmed",
                view: "view on explorer"
            }
        },
    },
    settings: {
        elements: {
            tor: "connect your node through TOR circuit",
            node: "connect to personal node to not leak sensitive data",
            pin: "request PIN before initialise wallet",
            blockExplorer: "block explorer",
            backup: "create a backup"
        },
        headline: "Settings"
    },
    generic: {
        button: {
            save: "save",
            cancel: "cancel"
        }
    }
}