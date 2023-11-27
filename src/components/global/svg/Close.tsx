import { SVGProps } from "react";
import { ColorValue } from "react-native";
import { Path, Svg } from "react-native-svg";

export interface IconProps {
    fontSize: number,
    color: ColorValue
}

export function Close(props: IconProps) {
    console.log(props)
    return (
        <Svg 
            width={props.fontSize}
            height={props.fontSize}
            viewBox="0 0 512 512" 
        >
            <Path 
                fill={props.color}
                d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z"
            />
        </Svg>
    )
  }