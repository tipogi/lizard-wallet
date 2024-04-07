import { IconProps } from "@/assets/svg"
import { Colors } from "@/constants"
import { Text, TouchableOpacity, View } from "react-native"
import { parameterStyle } from "../../styles"
import { fontStyle } from "@/global"

interface ParameterProps {
    icon: React.ElementType<IconProps>,
    fontSize: number,
    color: Colors,
    text: string
}

const Parameter = ({ icon: Icon, fontSize, color, text }: ParameterProps) => {
    return (
        <TouchableOpacity style={parameterStyle.container}>
            <View style={parameterStyle.iconContainer}>
                <Icon
                    fontSize={fontSize}
                    color={color}
                />
            </View>
            <View style={parameterStyle.textContainer}>
                <Text style={[ 
                    fontStyle.main, 
                    fontStyle.h5,
                    color === Colors.Green ? parameterStyle.white : parameterStyle.grey 
                ]}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Parameter;