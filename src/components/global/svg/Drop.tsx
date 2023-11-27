import { SVGProps } from "react";
import { ColorValue } from "react-native";
import { G, Path, Svg } from "react-native-svg";

export type IconProps = {
    fontSize: number,
    color: ColorValue
}

export function Drop(props: IconProps) {
    console.log(props)
    return (
        <Svg 
            width={props.fontSize}
            height={props.fontSize}
            viewBox="0 0 16 16" 
        >
            <G 
                fill={props.color} 
                fillRule="evenodd"
            >
                <Path d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
                <Path d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
            </G>
        </Svg>
    )
}