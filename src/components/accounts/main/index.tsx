import { Colors, GrapeColors } from "@/constants";
import { View, StyleSheet, Text } from "react-native";
import AccountsHeader from "./Header";
import AccountCardList from "./AccountCardList";
import AccountDetail from "./AccountDetail";
import { Color, Fingerprint, HashTag, LockClosed, Sign } from "@/components/global/svg";
import { useState } from "react";


const accounts = [
    {
        fingerprint: "spacer-a",
    },
    {
        name: "daily wallet",
        color: GrapeColors.Green,
        balance: "1353299",
        fingerprint: "f8x92ks0",
        derivationPath: "m/84'/1'/0'/0",
        policy: false
    },
    {
        name: "ice cube wallet",
        color: GrapeColors.Red,
        balance: "34864",
        fingerprint: "m38d00d2",
        derivationPath: "m/84'/1'/0'/0",
        policy: true
    },
    {
        name: "work partners wallet",
        color: GrapeColors.Orange,
        balance: "5487",
        fingerprint: "xod254dd0",
        derivationPath: "m/84'/1'/0'/0",
        policy: false
    },
    {
        name: "bom xakalaka",
        color: GrapeColors.Blue,
        balance: "774511",
        fingerprint: "x3292jdd0",
        derivationPath: "m/84'/1'/0'/0",
        policy: false
    },
    {
        fingerprint: "spacer-b",
    }
]

const AccountComponent = () => {


    const [index, setIndex] = useState(1);

    return (
        <View style={accountStyle.container}>
            <AccountsHeader/>
            <AccountCardList 
                accounts={accounts}
                index={index}
                setIndex={setIndex}
            />
            <View style={accountStyle.main}>
                <View style={accountStyle.content}>
                    <AccountDetail
                        icon={HashTag}
                        iconSize={24}
                        text={accounts[index].name }
                    />
                    <AccountDetail
                        icon={Sign}
                        iconSize={24}
                        text={accounts[index].derivationPath }
                    />
                     <AccountDetail
                        icon={Fingerprint}
                        iconSize={24}
                        text={accounts[index].fingerprint }
                    />
                     <AccountDetail
                        icon={LockClosed}
                        iconSize={24}
                        text={accounts[index].balance }
                    />
                     <AccountDetail
                        icon={Color}
                        iconSize={24}
                        text={accounts[index].color }
                    />
                </View>
            </View>
        </View>

    )
}

export default AccountComponent;

const accountStyle = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: Colors.Green
    },
    main: {
        backgroundColor: Colors.Background,
        marginTop: "auto",
        height: "80%",
        display:"flex",
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },
    content: {
        display: "flex",
        padding: 30,
        paddingTop: 150,
        gap: 30
    }
})



