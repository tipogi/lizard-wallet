import { DimensionValue, View } from "react-native";
import { Colors } from "@/constants";
import { Close, IconProps } from "../svg";
import { EN } from "@/constants/translations";
import { NAVIGATION } from "@/constants/navigation";
import { dynamicSkeletonStyle } from "@/styles/global";
import { HeaderType } from "./headers";
import { SimpleHeader } from "./headers/SimpleHeader";
import { IconHeader } from "./headers/IconHeader";

interface SkeletonProps {
    headerType: HeaderType,
    headline: string,
    backAction: NAVIGATION,
    children: JSX.Element | JSX.Element[],
    icon: React.ElementType<IconProps>
}

export const Skeleton = ({ children, headerType, icon, headline, backAction }: SkeletonProps) => {

    const contentLength: DimensionValue = headerType === HeaderType.Simple ?
        "85%" : "75%"

    const renderHeader = () => {
        if (headerType === HeaderType.Simple) {
            return (
                <SimpleHeader
                    icon={Close}
                    iconColor={Colors.Background}
                    headline={EN.wallet.receive.headline}
                    backAction={NAVIGATION.wallet}
                />
            )
        } else if (headerType === HeaderType.Icon) {
            return (
                <IconHeader
                    icon={icon}
                    headline={headline}
                    backAction={backAction}
                />
            )
        }
    }

    return (
        <>
            { renderHeader() }
            <View style={dynamicSkeletonStyle(contentLength).main}>
                { children }
            </View>
        </>
    );
}

