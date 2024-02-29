import { GrapeColors } from "@/constants";
import { addDotsToValue } from "@/data/convertions";
import { TAtomicAccountState } from "@/store/types/accounts";
import { cardStyle, genericCardStyle } from "@/styles/accounts";
import { LinearGradient } from "expo-linear-gradient";
import { Animated, Dimensions, Text, View } from "react-native";

const { height, width } = Dimensions.get('window');

const ITEM_SIZE = width * 0.9;
const ITEM_HEIGHT = height * 0.2;
const SPACING = 10;

interface AccountCardProps {
    index: number,
    item: TAtomicAccountState,
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
            <LinearGradient
                // TODO: Make that colors randoms and user has to option to set in wallet creation
                colors={['#BFC6CE', '#15F5BA']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                style={genericCardStyle(SPACING, ITEM_HEIGHT, translateY).container}
            >
                <Animated.View /*style={[cardStyle.container]}*/>
                    <Text style={cardStyle.name}>
                        {item.name}
                    </Text>
                    <Text style={cardStyle.balance}>
                        {`${addDotsToValue(item.balance)} sat`}
                    </Text>

                </Animated.View>
            </LinearGradient>
        </View>
    )
}

export default AccountCard;