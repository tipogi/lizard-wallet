import { GrapeColors } from "@/constants";
import { cardListStyle, indexStyle, indexStyleGeneric } from "@/styles/accounts";
import { useRef, useState } from "react";
import { Animated, Dimensions, Text, View } from "react-native";
import AccountCard from "./AccountCard";
import useAppDispatch from "@/store/hooks/useAppDispatch";
import { updateSelectedAccount } from '../../../store/slices/accounts';
import * as SecureStore from 'expo-secure-store';
import { useAppSelector } from "@/hooks/store";
import { TAccountCarouselElements, TSlideEdges, accountAmountSelector } from "@/store/selectors/account";
import { times } from 'lodash';
import { TAtomicAccountState, isAtomicAccount } from "@/store/types/accounts";

const { width } = Dimensions.get('window');

const ITEM_SIZE = width * 0.9;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;

// We use first and last elements for the slide effect
const SLIDER_EDGES: TSlideEdges[] = [
    { fingerprint: "spacer-start" },
    { fingerprint: "spacer-end" }
]

interface AccountCardListProps {
    accounts: TAtomicAccountState[],
    index: number,
    setIndex: React.Dispatch<React.SetStateAction<number>>
}

const AccountCardList = ({ accounts, index, setIndex }: AccountCardListProps) => {

    const dispatch = useAppDispatch();
    const accountsNumber = useAppSelector(accountAmountSelector);

    const accountWithEdges: TAccountCarouselElements = [
        SLIDER_EDGES[0],
        ...accounts,
        SLIDER_EDGES[1]
    ];

    const scrollX = useRef(new Animated.Value(0)).current;

    const renderAccountIndexDots = (selectedIndex: number) => {
        return times(accountsNumber, (index) => {
            return (
                <View
                    key={`dot-${index}`}
                    style={[indexStyle.element, indexStyleGeneric(index, selectedIndex).focus]}
                />
            )
        })
    }

    const renderAccountCards = (item: TSlideEdges | TAtomicAccountState, slider_index: number) => {
        if (isAtomicAccount(item)) {
            return (
                <AccountCard
                    item={item}
                    index={slider_index}
                    scrollX={scrollX}
                />
            )
        }
        // These elements are the edges of the carousel
        return <View style={{ width: SPACER_ITEM_SIZE }} />
    }

    return (
        <View style={cardListStyle.container}>
            <Animated.FlatList
                style={cardListStyle.list}
                showsHorizontalScrollIndicator={false}
                data={accountWithEdges}
                keyExtractor={(item: TAtomicAccountState | TSlideEdges) => item.fingerprint}
                horizontal
                contentContainerStyle={{
                    alignItems: "center"
                }}
                snapToInterval={ITEM_SIZE}
                decelerationRate={0}
                bounces={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                onMomentumScrollEnd={async (ev) => {
                    // Calculate from the index from the list width (x)
                    // The list content, will start in index=1 and will finish length -1 
                    // This is because the way that it is designed the slider
                    // The first and the last elements we use to create the edges and with that we have a visual effect while sliding
                    const newIndex = Math.round(ev.nativeEvent.contentOffset.x / ITEM_SIZE);
                    // TODO: Clean up the if clause without outputs
                    if (newIndex !== index) {
                        setIndex(newIndex);
                        dispatch(updateSelectedAccount(newIndex))
                        const fingerprint = SecureStore.getItem(`fingerprint_${newIndex}`)
                        if (fingerprint) {
                            console.log('onMomentumScrollEnd: Fingerprint does exist in the secure store, GET')
                            //console.log(await SecureStore.deleteItemAsync(`fingerprint_${newIndex}`), `fingerprint_${newIndex}`);
                            console.log('onMomentumScrollEnd: : ', SecureStore.getItem(`fingerprint_${newIndex}`), 'GET')
                        } else {
                            console.log('onMomentumScrollEnd: Fingerprint does not exist in the secure store, SET')
                            SecureStore.setItemAsync(`fingerprint_${newIndex}`, accounts[newIndex].fingerprint)
                        }

                    }
                }}
                scrollEventThrottle={16}
                renderItem={({ item, index: slider_index }) => renderAccountCards(item, slider_index)}
            />
            <View style={indexStyle.container}>
                {renderAccountIndexDots(index)}
            </View>
        </View>
    )
}

export default AccountCardList