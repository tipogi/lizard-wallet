import { G, Path, Svg } from "react-native-svg";
import { IconProps } from "../index";

export function Sign(props: IconProps) {
    return (
        <Svg 
            width={props.fontSize}
            height={props.fontSize}
            viewBox="0 0 256 256"
        >
            <Path 
                fill={props.color}
                d="m244.46 108l-36-40a6 6 0 0 0-4.46-2h-70V32a6 6 0 0 0-12 0v34H40a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h82v66a6 6 0 0 0 12 0v-66h70a6 6 0 0 0 4.46-2l36-40a6 6 0 0 0 0-8m-43.13 38H40a2 2 0 0 1-2-2V80a2 2 0 0 1 2-2h161.33l30.6 34Z"
            />
        </Svg>
    )
}