import { Path, Svg } from "react-native-svg";
import { IconProps } from "./index";

export function ScanAddress(props: IconProps) {
    return (
        <Svg 
            width={props.fontSize}
            height={props.fontSize}
            viewBox="0 0 24 24" 
        >
            <Path 
                fill={props.color}
                d="M2 5.75A2.75 2.75 0 0 1 4.75 3h1.5a.75.75 0 0 1 0 1.5h-1.5c-.69 0-1.25.56-1.25 1.25v1.5a.75.75 0 0 1-1.5 0v-1.5Zm15-2a.75.75 0 0 1 .75-.75h1.5A2.75 2.75 0 0 1 22 5.75v1.5a.75.75 0 0 1-1.5 0v-1.5c0-.69-.56-1.25-1.25-1.25h-1.5a.75.75 0 0 1-.75-.75ZM2.75 16a.75.75 0 0 1 .75.75v1.5c0 .69.56 1.25 1.25 1.25h1.5a.75.75 0 0 1 0 1.5h-1.5A2.75 2.75 0 0 1 2 18.25v-1.5a.75.75 0 0 1 .75-.75Zm18.5 0a.75.75 0 0 1 .75.75v1.5A2.75 2.75 0 0 1 19.25 21h-1.5a.75.75 0 0 1 0-1.5h1.5c.69 0 1.25-.56 1.25-1.25v-1.5a.75.75 0 0 1 .75-.75ZM5.75 7a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-8.5A.75.75 0 0 1 5.75 7Zm4.75.75a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0v-8.5ZM13.75 7a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 .75-.75Zm4.75.75a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0v-8.5Z"
            />
        </Svg>
    )
  }