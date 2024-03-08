import { G, Path, Svg } from "react-native-svg";
import { IconProps } from ".";

export function Calendar(props: IconProps) {
    
    return (
        <Svg 
            width={props.fontSize}
            height={props.fontSize}
            viewBox="0 0 16 16" 
        >
            <G
                fill={props.color}
            >
                <Path 
                    d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"
                />
                <Path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"
                />
            </G>
        </Svg>
    )
}