import { DimensionValue, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "@/constants";
import { Back, IconProps } from "@/assets/svg";
import { NAVIGATION } from "@/constants/navigation";
import { skeletonStyle } from "@/global";
import { Link } from "expo-router";

export type THeaderAction = {
    icon: React.ElementType<IconProps>,
    action: any
}

interface SkeletonProps {
    children: JSX.Element | JSX.Element[],
    headerLabel?: string,
    backAction: NAVIGATION,
    actionIcon?: THeaderAction,
    /*headerType: HeaderType,
    headline: string,
    icon: React.ElementType<IconProps>*/
}

export const Skeleton = ({ children, headerLabel, backAction, actionIcon }: SkeletonProps) => {

    const contentLength: DimensionValue = "85%";

    const renderBackIcon = () => (
        <View style={skeletonStyle.headerBackIcon}>
            <Link href={backAction} asChild>
                <TouchableOpacity>
                    <Back fontSize={17} color={Colors.Grey} />
                </TouchableOpacity>
            </Link>
        </View>
    );

    const renderHeaderLabel = () => (
        <View style={skeletonStyle.headerLabelContainer}>
            <Text style={skeletonStyle.headerLabel}>{headerLabel}</Text>
        </View>
    );

    const renderHeaderAction = () => {
        return (
            <View style={skeletonStyle.headerActions}>
                { actionIcon && 
                    <TouchableOpacity>
                        <Back fontSize={17} color={Colors.Grey} />
                    </TouchableOpacity>
                }
            </View>
        )
    }

    return (
        <>
            <View style={skeletonStyle.headerContainer}>
                { renderBackIcon() }
                { headerLabel && renderHeaderLabel() }
                { renderHeaderAction() }
            </View>
            {children}
        </>
    );
}

