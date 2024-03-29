import { Path, Svg } from "react-native-svg";
import { IconProps } from "..";

export function Tag(props: IconProps) {

    return (
        <Svg 
            width={props.fontSize}
            height={props.fontSize}
            viewBox="0 0 24 24" 
        >
            <Path 
                fill={props.color}
                fillRule="evenodd" 
                d="M15.648 2.007L15.75 2a.75.75 0 0 1 .743.648l.007.102v18.5a.75.75 0 0 1-1.493.102L15 21.25v-1.254H9.25A2.25 2.25 0 0 1 7 17.746V6.25A2.25 2.25 0 0 1 9.25 4L15 3.999V2.75a.75.75 0 0 1 .648-.743L15.75 2l-.102.007ZM15 5.5H9.25a.75.75 0 0 0-.75.75v11.496c0 .415.336.75.75.75H15V5.5Z"
            />
        </Svg>
    )
}