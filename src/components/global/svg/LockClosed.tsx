import { Path, Svg } from "react-native-svg";
import { IconProps } from "./index";

export function LockClosed(props: IconProps) {
    return (
        <Svg 
            width={props.fontSize}
            height={props.fontSize} 
            viewBox="0 0 20 20" 
        >
            <Path 
                fill={props.color}
                fillRule="evenodd" 
                d="M5 9V7a5 5 0 0 1 10 0v2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2Zm8-2v2H7V7a3 3 0 0 1 6 0Z" 
                clipRule="evenodd"
            />
        </Svg>
    )
  }