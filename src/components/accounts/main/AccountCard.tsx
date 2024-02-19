import { GrapeColors } from "@/constants";
import { addDotsToValue } from "@/data/convertions";
import { cardStyle, genericCardStyle } from "@/styles/accounts";
import { Animated, Dimensions, Text, View } from "react-native";
const { height, width } = Dimensions.get('window');

const ITEM_SIZE = width * 0.9;
const ITEM_HEIGHT = height * 0.2;
const SPACING = 10;

type Account = {
    name: string,
    color: GrapeColors,
    balance: string,
    fingerprint: string,
    derivationPath: string,
    policy: boolean
}

interface AccountCardProps {
    index: number,
    item: Account,
    scrollX: Animated.Value
}

const AccountCard = ({ index, item, scrollX }: AccountCardProps) => {

    const inputRange = [
        (index - 2) * ITEM_SIZE,
        (index - 1) * ITEM_SIZE,
        index * ITEM_SIZE,
    ];
    const translateY = scrollX.interpolate({
        inputRange,
        outputRange: [0, -5, 0]
    })

    return (
        <View style={{ width: ITEM_SIZE, height: ITEM_HEIGHT + 20 }}>
            <Animated.View style={[genericCardStyle(SPACING, ITEM_HEIGHT, translateY).container, cardStyle.container]}>
                <Text style={cardStyle.name}>
                    {item.name}
                </Text>
                <Text style={cardStyle.balance}>
                    {`${addDotsToValue(item.balance)} sat`}
                </Text>
            </Animated.View>
        </View>
    )
}

export default AccountCard;