import { Path, Svg } from "react-native-svg";
import { IconProps } from "./index";

export function In(props: IconProps) {
    return (
        <Svg 
            width={props.fontSize}
            height={props.fontSize}
            viewBox="0 0 24 24" 
        >
            <Path 
                fill="none" 
                stroke={props.color}
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5" 
                d="m14.828 9.172l-5.656 5.656m0 0h4.95m-4.95 0v-4.95M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"
            />
        </Svg>
    )
}

