import { Path, Svg } from "react-native-svg";
import { IconProps } from "./index";

export function Grape(props: IconProps) {
    return (
        <Svg 
            width={props.fontSize}
            height={props.fontSize}
            viewBox="0 0 1568 1824"
        >
            <Path 
                fill={props.color}
                fillRule="evenodd" 
                d="M16 38q27 117 77.5 184.5T215 314t165.5 28.5T589 339q61-3 93-4Q629-106 16 38zm271 366q-104 0-178 74.5T35 657q0 103 74.5 177.5T287 909q60 0 112-26t87-72q-37-71-37-154q0-84 37-155q-35-46-87-72t-112-26zm554 6q3-104 69.5-175T1074 133t218-33V0q-86 1-164 17T980.5 65.5t-120.5 80t-81 115T749 409q-90 14-149.5 84.5T540 657q0 104 74 178t178 74t178-74t74-178q0-91-58-160.5T841 410zm455-6q-60 0-112 26t-87 72q37 71 37 155q0 83-37 154q35 46 87 72t112 26q104 0 178-74t74-178t-74-178.5t-178-74.5zm-23 594q-139-9-229-109q-92 100-230 109q-22 48-22 105q0 104 74 178t178 74t178-74t74-178q0-54-23-105zm-535 260q-37-72-37-155q0-57 19-112q-109-23-180-102q-92 100-230 109q-23 58-23 105q0 104 74.5 178t178.5 74q59 0 111-26t87-71zm283 187q-138-11-229-111q-92 100-231 111q-21 50-21 103q0 104 74 178t178 74t178-74t74-178q0-55-23-103z"
            />
        </Svg>
    )
}

  //width="0.86em" height="1em"