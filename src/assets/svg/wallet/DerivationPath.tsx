import { Path, Svg } from "react-native-svg";
import { IconProps } from "../index";

export function DerivationPath(props: IconProps) {
    return (
        <Svg
            width={props.fontSize}
            height={props.fontSize}
            viewBox="0 0 256 256"
        >
            <Path
                fill={props.color}
                d="M200 168a32.06 32.06 0 0 0-31 24H72a32 32 0 0 1 0-64h96a40 40 0 0 0 0-80H72a8 8 0 0 0 0 16h96a24 24 0 0 1 0 48H72a48 48 0 0 0 0 96h97a32 32 0 1 0 31-40"
            />
        </Svg>
    )
}