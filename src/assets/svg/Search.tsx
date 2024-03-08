import { Path, Svg } from "react-native-svg";
import { IconProps } from "./index";

export function Search(props: IconProps) {
    return (
        <Svg 
            width={props.fontSize}
            height={props.fontSize}
            viewBox="0 0 24 24"
        >
            <Path 
                fill={props.color}
                d="M15.5 12c2.5 0 4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5M5 3h14c1.11 0 2 .89 2 2v8.03c-.5-.8-1.19-1.49-2-2.03V5H5v14h4.5c.31.75.76 1.42 1.31 2H5c-1.11 0-2-.89-2-2V5c0-1.11.89-2 2-2m2 4h10v2H7zm0 4h5.03c-.8.5-1.49 1.19-2.03 2H7zm0 4h2.17c-.11.5-.17 1-.17 1.5v.5H7z"
            />
        </Svg>
    )
}