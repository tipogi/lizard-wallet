import { Backup, IconProps, Pin, Tor, Node, Block } from "@/assets/svg";
import { Colors } from "@/constants";
import { EN } from "@/constants/translations";
import { iconSizes } from "@/global";

export type TSettingListContent = {
    icon: React.ElementType<IconProps>,
    text: string,
    fontSize: number,
    color: Colors
};

export const settingListContent: TSettingListContent[] = [
    {
        icon: Tor,
        text: EN.settings.elements.tor,
        fontSize: iconSizes.MEDIUM,
        color: Colors.Green
    },{
        icon: Node,
        text: EN.settings.elements.node,
        fontSize: iconSizes.LARGE,
        color: Colors.Grey
    },{
        icon: Pin,
        text: EN.settings.elements.pin,
        fontSize: iconSizes.XLARGE,
        color: Colors.Grey
    },{
        icon: Block,
        text: EN.settings.elements.blockExplorer,
        fontSize: iconSizes.MEDIUM,
        color: Colors.Green
    },{
        icon: Backup,
        text: EN.settings.elements.backup,
        fontSize: iconSizes.MEDIUM,
        color: Colors.Grey
    },

];