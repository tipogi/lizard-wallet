import { Colors, TabBarSVGIcon } from "@/constants";
import { StyleSheet, View } from "react-native";

import SettingsFocus from '@/svg/settings-focus.svg';
import SettingsInactive from '@/svg/settings-non-focus.svg';

interface TabBarIconProps {
    focused: boolean,
    iconType: TabBarSVGIcon
}

export const TabBarIcon = ({ focused }: TabBarIconProps) => {
    let icon;
    let style;
    if (focused) {
        const height = 50;
        style = styles.container;
        icon = <SettingsFocus height={height}/>
    } else {
        const height = 35;
        style = styles.none;
        icon = <SettingsInactive height={height}/>
    }
    return (
        <View style={style}>
            { icon }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.Green,
        borderRadius: 40,
        height: 80,
        width: 80,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',   
    },
    none: {}
});