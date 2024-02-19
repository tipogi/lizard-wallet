import { Text, TouchableOpacity, View } from "react-native"
import { Close, IconProps } from "@/assets/svg";
import { Link } from "expo-router";
import { generalStyle, iconHeaderStyle } from "@/styles/global";
import { NAVIGATION } from "@navigation";
import { Colors } from "@/constants";

interface IconHeaderProps {
    icon: React.ElementType<IconProps>,
    headline: String,
    backAction: NAVIGATION,
}

export const IconHeader = ({ headline, icon: Icon, backAction }: IconHeaderProps) => {

    const { description, headline: headlineStyle } = iconHeaderStyle;
    
    return (
        <View style={generalStyle.container}>
            <View style={generalStyle.navigation}>
                <Link href={backAction} asChild>
                    <TouchableOpacity >
                        <Close fontSize={30} color={Colors.Background}/>
                    </TouchableOpacity>
                </Link>
            </View>
            <View style={description}>
                <Icon fontSize={70} color={Colors.Background}/>
                <Text style={headlineStyle}>{headline}</Text>
            </View>
        </View>
    )
}