import { Clipboard, IconProps } from "@/assets/svg";
import { Colors } from "@/constants";
import { buttonStyle, buttonColors } from "@/domains/global";
import { Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
    tag: string,
    Icon: React.ElementType<IconProps>,
    size: number,
    background: Colors
}

export const ButtonWithIcon = ({ tag, Icon, size, background }: ButtonProps) => {
    return (
        <TouchableOpacity style={[buttonStyle.container, buttonStyle.shadow]}>
            <View style={[buttonStyle.iconContainer, buttonColors(background).iconBackground]}>
                <Icon fontSize={size} color={Colors.Background} />
            </View>
            <Text style={buttonStyle.label}>{tag}</Text>
        </TouchableOpacity>
    )
}