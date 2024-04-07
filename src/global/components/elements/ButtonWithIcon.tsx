import { IconProps } from "@/assets/svg";
import { Colors } from "@/constants";
import { buttonStyle, buttonColors, buttonDimensions, fontStyle } from "@/global";
import { DimensionValue, Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
    width: DimensionValue,
    tag: string,
    Icon: React.ElementType<IconProps>,
    size: number,
    background: Colors,
    action?: any
}

export const ButtonWithIcon = ({ tag, Icon, size, background, width, action}: ButtonProps) => {
    return (
        <View style={buttonStyle.container}>
            <TouchableOpacity 
                style={[buttonStyle.touchableContainer, buttonStyle.shadow, buttonDimensions(width).width]}
                onPress={action}
            >
                <View style={[buttonStyle.iconContainer, buttonColors(background).iconBackground]}>
                    <Icon fontSize={size} color={Colors.Background} />
                </View>
                <View style={buttonStyle.labelContainer}>
                    <Text style={[buttonStyle.label, fontStyle.semibold, fontStyle.h5]}>{tag}</Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}