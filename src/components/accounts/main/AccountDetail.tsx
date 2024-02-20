import { IconProps } from "@/assets/svg";
import { Colors } from "@/constants";
import { detailStyle } from "@/styles/accounts";
import { Text, View } from "react-native";

interface TxDetailProps {
    icon: React.ElementType<IconProps>,
    iconSize: number,
    text: number | undefined
}

const AccountDetail = ({ icon: Icon, iconSize, text }: TxDetailProps) => {

    return (
        <View style={detailStyle.row}>
            <View style={detailStyle.icon}>
                <Icon fontSize={iconSize} color={Colors.Green}/>
            </View>
            <Text style={detailStyle.detailText}>{ text }</Text>
        </View>
    )
}

export default AccountDetail;