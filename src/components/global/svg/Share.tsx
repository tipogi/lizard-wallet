import { Path, Svg } from "react-native-svg";
import { IconProps } from "./index";

export function Share(props: IconProps) {
    return (
        <Svg 
            width={props.fontSize}
            height={props.fontSize}
            viewBox="0 0 48 48"
        >
            <Path 
                fill="none"
                stroke={props.color}
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="4" 
                d="M28 6h14v14m0 9.474V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h9m7.8 16.2L41.1 6.9"
            />
        </Svg>
    )
}