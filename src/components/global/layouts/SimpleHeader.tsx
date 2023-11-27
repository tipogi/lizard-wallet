import { ColorValue, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Close } from "../svg";
import { Colors } from "@/constants";
import { Link, useRouter } from "expo-router";
import { smallDescription } from "@/styles/layout";
import { IconProps } from "../svg/Close";
import { NAVIGATION } from "@/navigation";

interface SimpleHeaderProps {
    text: String,
    icon: React.ElementType<IconProps>,
    backAction: NAVIGATION,
    color: ColorValue
    fontSize: number
}

export const SimpleHeader = ({ text, icon: Icon, backAction, color, fontSize }: SimpleHeaderProps) => {

    const { container, navigation, description, font } = smallDescription;
    
    return (
        <View style={container}>
            <View style={navigation}>
                <Link href={backAction} asChild>
                    <TouchableOpacity >
                        <Icon fontSize={fontSize} color={color}/>
                    </TouchableOpacity>
                </Link>
            </View>
            <View style={description}>
                <Text style={font}>{text}</Text>
            </View>
        </View>
    )
}