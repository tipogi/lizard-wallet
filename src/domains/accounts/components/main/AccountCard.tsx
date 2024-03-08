import { addDotsToValue } from "@/data/convertions";
import { TAtomicAccountState } from "@/domains/accounts/store/types/accounts";
import { cardStyle, genericCardStyle } from "@/domains/accounts/styles";
import { LinearGradient } from "expo-linear-gradient";
import { Animated, Dimensions, Text, View } from "react-native";

const { height } = Dimensions.get('window');

const ITEM_HEIGHT = height * 0.2;
const SPACING = 10;

interface AccountCardProps {
    item: TAtomicAccountState,
    ITEM_SIZE: number
}

const AccountCard = ({ item, ITEM_SIZE }: AccountCardProps) => {

    return (
        <View style={{ width: ITEM_SIZE, height: ITEM_HEIGHT + 20 }}>
            <LinearGradient
                // TODO: Make that colors randoms and user has to option to set in wallet creation
                colors={['#BFC6CE', '#15F5BA']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                style={genericCardStyle(SPACING, ITEM_HEIGHT).container}
            >
                <Animated.View>
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