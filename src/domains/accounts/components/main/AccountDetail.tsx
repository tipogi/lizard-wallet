import { IconProps } from "@/assets/svg";
import { Colors } from "@/constants";
import { detailStyle } from "@/domains/accounts/styles";
import { Text, View } from "react-native";

interface TxDetailProps {
    icon: React.ElementType<IconProps>,
    text: any
}

const ICON_SIZE = 24;

const AccountDetail = ({ icon: Icon, text }: TxDetailProps) => {

    return (
        <View style={detailStyle.row}>
            <View style={detailStyle.icon}>
                <Icon fontSize={ICON_SIZE} color={Colors.Green}/>
            </View>
            <Text style={detailStyle.detailText}>{ text }</Text>
        </View>
    )
}

export default AccountDetail;