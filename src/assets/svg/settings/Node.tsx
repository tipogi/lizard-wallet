import { Path, Svg } from "react-native-svg";
import { IconProps } from "../index";

export function Node(props: IconProps) {
    return (
        <Svg
            width={props.fontSize}
            height={props.fontSize}
            viewBox="0 0 16 16"
        >
            <Path
                fill={props.color}
                d="M1 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm11.5 1a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1M1 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M1.25 9h5.5a.25.25 0 0 1 0 .5h-5.5a.25.25 0 0 1 0-.5"
            />
        </Svg>
    )
}