import { Colors } from "@/constants";
import { View, StyleSheet } from "react-native";
import AccountsHeader from "./Header";
import AccountCardList from "./AccountCardList";
import AccountDetail from "./AccountDetail";
import { useState } from "react";
import { useAppSelector } from "@/hooks/store";
import { accountIndexSelector, accountsSelector } from "@/store/selectors/account";
import { TAtomicAccountState } from "@/store/types/accounts";
import { cardDetailsContent } from "@/data/entities/accounts/card";

const AccountComponent = () => {
    // TODO: Hard coded index. That one has to come from the state
    //const [index, setIndex] = useState(0);

    const accounts = useAppSelector(accountsSelector);
    const accountIndex = useAppSelector(accountIndexSelector);

    const renderAccountDetail = (account: TAtomicAccountState) => {
        return (
            <View style={accountStyle.content}>
                {
                    cardDetailsContent.map((detail, index) => {
                        return (
                            <AccountDetail
                                icon={detail.icon}
                                text={account[detail.key]}
                                key={`account_detail_${index}`}
                            />
                        )
                    })
                }
            </View>
        )
    }

    return (
        <View style={accountStyle.container}>
            <AccountsHeader />
            <AccountCardList
                accounts={accounts}
                index={accountIndex}
            />
            <View style={accountStyle.main}>
                {
                    renderAccountDetail(accounts[accountIndex])
                }
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
        display: "flex",
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



