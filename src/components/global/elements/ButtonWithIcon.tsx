import { Clipboard } from "@/assets/svg";
import { Colors } from "@/constants";
import { buttonStyle } from "@/styles/global";
import { Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
    tag: string
}

export const ButtonWithIcon = ({ tag }: ButtonProps) => {
    return (
        <TouchableOpacity style={[buttonStyle.container, buttonStyle.shadow]}>
            <View style={buttonStyle.iconContainer}>
                <Clipboard fontSize={20} color={Colors.Background} />
            </View>
            <Text style={buttonStyle.label}>{tag}</Text>
        </TouchableOpacity>
    )
}