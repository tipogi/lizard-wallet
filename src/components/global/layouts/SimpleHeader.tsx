import { ColorValue, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { IconProps } from "../svg";
import { Link } from "expo-router";
import { smallDescription } from "@/styles/layout";
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
                <Text style={style.headline}>{text}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    headline: {
        fontFamily: "karantina-light",
        fontSize: 45,
    }
})