import { Path, Rect, Svg } from "react-native-svg";
import { IconProps } from "../../index";

export function Wallet(props: IconProps) {
    return (
        <Svg 
            width={props.fontSize}
            height={props.fontSize} 
            viewBox="0 0 512 512"
        >
            <Rect
                width="416" 
                height="288" 
                x="48" 
                y="144" 
                fill="none" 
                stroke={props.color}
                strokeLinejoin="round" 
                strokeWidth="32" 
                rx="48" 
                ry="48"
            />
            <Path 
                fill="none" 
                stroke={props.color}
                strokeLinejoin="round" 
                strokeWidth="32" 
                d="M411.36 144v-30A50 50 0 0 0 352 64.9L88.64 109.85A50 50 0 0 0 48 159v49"
            />
            <Path 
                fill={props.color} 
                d="M368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32Z"
            />
        </Svg>
    )
}