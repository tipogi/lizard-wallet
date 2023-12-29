import { Path, Svg } from "react-native-svg";
import { IconProps } from "./index";

export function TimeLock(props: IconProps) {
    return (
        <Svg 
            width={props.fontSize}
            height={props.fontSize}
            viewBox="0 0 24 24"
        >
            <Path 
                fill={props.color}
                d="M9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6zm3.25 14H6q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v1.3q-.45-.15-.937-.225T18 11v-1H6v10h5.3q.2.6.4 1.038t.55.962M18 23q-2.075 0-3.537-1.463T13 18q0-2.075 1.463-3.537T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23m.5-5.2v-2.3q0-.2-.15-.35T18 15q-.2 0-.35.15t-.15.35v2.275q0 .2.075.388t.225.337l1.5 1.5q.15.15.35.15T20 20q.15-.15.15-.35T20 19.3zM6 10v10z"
            />
        </Svg>
    )
}