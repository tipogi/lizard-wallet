import { ColorValue, Text, TouchableOpacity, View } from "react-native"
import { IconProps } from "@/assets/svg";
import { Link } from "expo-router";
import { generalStyle, simpleHeaderStyle } from "@/styles/global";
import { NAVIGATION } from "@navigation";

interface SimpleHeaderProps {
    headline: String,
    icon: React.ElementType<IconProps>,
    backAction: NAVIGATION,
    iconColor: ColorValue
}

export const SimpleHeader = ({ headline, icon: Icon, backAction, iconColor }: SimpleHeaderProps) => {

    const { container, navigation } = generalStyle;

    return (
        <View style={container}>
            <View style={navigation}>
                <Link href={backAction} asChild>
                    <TouchableOpacity >
                        <Icon fontSize={17} color={iconColor} />
                    </TouchableOpacity>
                </Link>
            </View>
            <View style={simpleHeaderStyle.description}>
                <Text style={simpleHeaderStyle.headline}>{headline}</Text>
            </View>
        </View>
    )
}