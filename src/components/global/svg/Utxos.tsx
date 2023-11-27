import { SVGProps } from "react";
import Svg, { Path } from "react-native-svg";

export function Utxos(props: SVGProps<SVGSVGElement>) {
    return (
        <Svg 
            width={props.width} 
            height={props.height} 
            viewBox="0 0 16 16"
        >
            <Path 
                fill="#222F3A" 
                d="M6 1h10v2H6V1zm0 6h10v2H6V7zm0 6h10v2H6v-2zM0 2a2 2 0 1 1 3.999-.001A2 2 0 0 1 0 2zm0 6a2 2 0 1 1 3.999-.001A2 2 0 0 1 0 8zm0 6a2 2 0 1 1 3.999-.001A2 2 0 0 1 0 14z"
            />
        </Svg>
    )
}