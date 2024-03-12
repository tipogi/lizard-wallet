import { Path, Svg } from "react-native-svg";
import { IconProps } from "../index";

export function Block(props: IconProps) {
    return (
        <Svg
            width={props.fontSize}
            height={props.fontSize}
            viewBox="0 0 256 256"
        >
            <Path
                fill={props.color}
                d="m223.68 66.15l-88-48.15a15.88 15.88 0 0 0-15.36 0l-88 48.17a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03M128 32l80.34 44L128 120L47.66 76ZM40 90l80 43.78v85.79l-80-43.75Zm96 129.57v-85.75L216 90v85.78Z"
            />
        </Svg>
    )
}