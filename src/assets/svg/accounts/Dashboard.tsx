import { Circle, G, Path, Rect, Svg } from "react-native-svg";
import { IconProps } from "../index";

export function Dashboard(props: IconProps) {
    return (
        <Svg 
            width={props.fontSize}
            height={props.fontSize}
            viewBox="0 0 14 14" 
        >
            <G
                fill="none" 
                stroke={props.color}
                strokeLinecap="round" 
                strokeLinejoin="round"
            >
                <Rect 
                    width="13" 
                    height="13" 
                    x=".5" 
                    y=".5" 
                    rx="1"
                />
                <Path 
                    d="M3 4.5h5"
                />
                <Circle 
                    cx="9.5" 
                    cy="4.5" 
                    r="1.5"
                />
                <Path 
                    d="M11 9.5H8m-3 0H3"
                />
                <Circle 
                    cx="6.5" 
                    cy="9.5" 
                    r="1.5"
                />
            </G>
        </Svg>
    )
}
