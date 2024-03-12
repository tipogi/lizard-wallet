import { Path, Svg } from "react-native-svg";
import { IconProps } from "../index";

export function LockClosed(props: IconProps) {
    return (
        <Svg 
            width={props.fontSize}
            height={props.fontSize} 
            viewBox="0 0 256 256" 
        >
            <Path 
                fill={props.color}
                d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M96 56a32 32 0 0 1 64 0v24H96Zm112 152H48V96h160z"
            />
        </Svg>
    )
  }