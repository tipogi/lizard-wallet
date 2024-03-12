import { Circle, Path, Svg } from "react-native-svg";
import { IconProps } from "../index";

export function Backup(props: IconProps) {
    return (
        <Svg
            width={props.fontSize * 0.9}
            height={props.fontSize}
            viewBox="0 0 32 32"
        >
            <Circle 
                cx="7" 
                cy="7" 
                r="1" 
                fill={props.color}
            />
            <Circle 
                cx="7" 
                cy="15" 
                r="1" 
                fill={props.color}
            />
            <Circle 
                cx="7" 
                cy="23" 
                r="1" 
                fill={props.color}
            />
            <Path 
                fill={props.color}
                d="M12 26H4v-6h8v-2H4v-6h18V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h8ZM4 4h16v6H4Z"
            />
            <Path 
                fill={props.color}
                d="M28 17v2.413A6.996 6.996 0 1 0 22 30v-2a5 5 0 1 1 4.576-7H24v2h6v-6Z"
            />
        </Svg>
    )
}