import { Path, Svg } from "react-native-svg";
import { IconProps } from "../index";

export function Tor(props: IconProps) {
    return (
        <Svg
            width={props.fontSize}
            height={props.fontSize}
            viewBox="0 0 24 24"
        >
            <Path
                fill={props.color}
                d="M12 21.82v-1.46A8.36 8.36 0 0 0 20.36 12A8.36 8.36 0 0 0 12 3.64V2.18A9.83 9.83 0 0 1 21.82 12A9.83 9.83 0 0 1 12 21.82m0-5.09A4.74 4.74 0 0 0 16.73 12A4.74 4.74 0 0 0 12 7.27V5.82A6.17 6.17 0 0 1 18.18 12A6.17 6.17 0 0 1 12 18.18zm0-7.27A2.54 2.54 0 0 1 14.55 12A2.54 2.54 0 0 1 12 14.54zM0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0A12 12 0 0 0 0 12"
            />
        </Svg>
    )
}