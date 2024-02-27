import { Colors, GrapeColors } from "@/constants";
import { View, StyleSheet, Text } from "react-native";
import AccountsHeader from "./Header";
import AccountCardList from "./AccountCardList";
import AccountDetail from "./AccountDetail";
import { Color, Fingerprint, HashTag, LockClosed, Sign } from "@/assets/svg";
import { useState } from "react";
import { useAppSelector } from "@/hooks/store";
import { accountsSelector } from "@/store/selectors/account";

const AccountComponent = () => {

    const [index, setIndex] = useState(1);

    const accounts = useAppSelector(accountsSelector)

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
                        text={accounts[index].descriptor }
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
                        text={accounts[index].colors }
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



