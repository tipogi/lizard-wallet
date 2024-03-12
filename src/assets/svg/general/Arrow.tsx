import { Path, Svg } from "react-native-svg";
import { IconProps } from "..";

export function Arrow(props: IconProps) {
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
                d="M16.175 13H5q-.425 0-.712-.288T4 12q0-.425.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"
            />
        </Svg>
    )
}