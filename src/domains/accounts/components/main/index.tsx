import { View } from "react-native";
import AccountsHeader from "./Header";
import AccountCardList from "./AccountCardList";
import AccountDetail from "./AccountDetail";
import { useAppSelector } from "@/store/hooks/store";
import { accountIndexSelector, accountsSelector } from "@/domains/accounts/store/selectors/account";
import { TAtomicAccountState } from "@/domains/accounts/store/types/accounts";
import { cardDetailsContent } from "@/data/entities/accounts/card";
import { accountStyle } from "@/domains/accounts/styles/main";

const AccountComponent = () => {

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



