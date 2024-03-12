import { Path, Svg } from "react-native-svg";
import { IconProps } from "..";

export function Filter(props: IconProps) {
    // Rotate the icon or not
    const rotateDeg = props.rotate ?
         `${props.rotate}deg` : 
         '0deg'

    return (
        <Svg 
            width={props.fontSize}
            height={props.fontSize}
            viewBox="0 0 24 24" 
            style={{ transform: [{ rotate: rotateDeg }] }}
        >
            <Path 
                fill={props.color}
                d="M6 13h12v-2H6M3 6v2h18V6M10 18h4v-2h-4z"
            />
        </Svg>
    )
}