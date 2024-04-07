import { IconProps } from "@/assets/svg";
import { Colors } from "@/constants";
import { detailStyle } from "@/domains/accounts/styles";
import { fontStyle, iconSizes } from "@/global";
import { Text, View } from "react-native";

interface TxDetailProps {
    icon: React.ElementType<IconProps>,
    text: any
}

const ICON_SIZE = iconSizes.MEDIUM;

const AccountDetail = ({ icon: Icon, text }: TxDetailProps) => {

    return (
        <View style={detailStyle.row}>
            <View style={detailStyle.icon}>
                <Icon fontSize={ICON_SIZE} color={Colors.Green}/>
            </View>
            <Text style={[ fontStyle.main, fontStyle.h5, detailStyle.detailText ]}>{ text }</Text>
        </View>
    )
}

export default AccountDetail;