import { Path, Svg } from "react-native-svg";
import { IconProps } from "../index";

export function Back(props: IconProps) {
    return (
        <Svg
            width={props.fontSize * 0.9}
            height={props.fontSize}
            viewBox="0 0 344 384"
        >
            <Path
                fill={props.color}
                d="M341 171v42H82l119 120l-30 30L0 192L171 21l30 30L82 171z"
            />
        </Svg>
    )
}