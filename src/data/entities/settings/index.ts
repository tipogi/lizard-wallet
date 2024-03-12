import { Backup, IconProps, Pin, Tor, Node, Block } from "@/assets/svg";
import { Colors } from "@/constants";
import { EN } from "@/constants/translations";

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
        fontSize: 20,
        color: Colors.Green
    },{
        icon: Node,
        text: EN.settings.elements.node,
        fontSize: 25,
        color: Colors.Grey
    },{
        icon: Pin,
        text: EN.settings.elements.pin,
        fontSize: 30,
        color: Colors.Grey
    },{
        icon: Block,
        text: EN.settings.elements.blockExplorer,
        fontSize: 20,
        color: Colors.Green
    },{
        icon: Backup,
        text: EN.settings.elements.backup,
        fontSize: 20,
        color: Colors.Grey
    },

];