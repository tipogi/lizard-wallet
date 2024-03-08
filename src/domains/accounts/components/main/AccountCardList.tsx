import { cardListStyle, indexStyle, indexStyleGeneric } from "@/domains/accounts/styles";
import { useEffect, useRef } from "react";
import { Animated, Dimensions,TouchableOpacity, View } from "react-native";
import AccountCard from "./AccountCard";
import useAppDispatch from "@/store/hooks/useAppDispatch";
import { updateSelectedAccount } from '../../store/slices/accounts';
import * as SecureStore from 'expo-secure-store';
import { useAppSelector } from "@/store/hooks/store";
import { TAccountCarouselElements, TSlideEdges, accountAmountSelector } from "@/domains/accounts/store/selectors/account";
import { times } from 'lodash';
import { TAtomicAccountState, isAtomicAccount } from "@/domains/accounts/store/types/accounts";

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
}

const AccountCardList = ({ accounts, index }: AccountCardListProps) => {

    const dispatch = useAppDispatch();
    const accountsNumber = useAppSelector(accountAmountSelector);

    const accountsWithEdges: TAccountCarouselElements = [
        SLIDER_EDGES[0],
        ...accounts,
        SLIDER_EDGES[1]
    ];

    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef<Animated.FlatList>(null);

    useEffect(() => {
        flatListRef.current?.scrollToIndex({
            animated: true,
            index
        })
    }, [index])

    const renderAccountIndexDots = (selectedIndex: number) => {
        return times(accountsNumber, (index) => {
            return (
                <TouchableOpacity 
                    onPress={() => dispatch(updateSelectedAccount(index))}
                    key={`account_list_dot_${index}`}
                >
                    <View
                        key={`dot-${index}`}
                        style={[indexStyle.element, indexStyleGeneric(index, selectedIndex).focus]}
                    />
                </TouchableOpacity>
            )
        })
    }

    const renderAccountCards = (item: TSlideEdges | TAtomicAccountState) => {
        if (isAtomicAccount(item)) {
            return (
                <AccountCard item={item} ITEM_SIZE={ITEM_SIZE}/>
            )
        }
        // These elements are the edges of the carousel
        return <View style={{ width: SPACER_ITEM_SIZE }} />
    }

    return (
        <View style={cardListStyle.container}>
            <Animated.FlatList
                initialScrollIndex={index}
                data={accountsWithEdges}
                keyExtractor={(item: TAtomicAccountState | TSlideEdges) => item.fingerprint}
                ref={flatListRef}
                style={cardListStyle.list}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={ITEM_SIZE}
                decelerationRate={0}
                bounces={false}
                contentContainerStyle={{ alignItems: "center" }}
                scrollEventThrottle={16}
                renderItem={({ item }) => renderAccountCards(item)}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                getItemLayout={(data, index) => {
                    return {length: ITEM_SIZE, offset: ITEM_SIZE * index, index}
                }}
                onScrollToIndexFailed={({index, highestMeasuredFrameIndex}) => {
                    flatListRef.current?.scrollToOffset({
                        offset: index * 1000, // Overestimate offset
                        animated: true,
                     });
                     const wait = new Promise((resolve) => setTimeout(resolve, 500));
                     wait.then(() => {
                        flatListRef.current?.scrollToIndex({
                            index, animated: true
                        });
                     });
                }}
                onMomentumScrollEnd={async (ev) => {
                    // Calculate from the index from the list width (x)
                    // The list content, will start in index=1 and will finish length -1 
                    // This is because the way that it is designed the slider
                    // The first and the last elements we use to create the edges and with that we have a visual effect while sliding
                    const newIndex = Math.round(ev.nativeEvent.contentOffset.x / ITEM_SIZE);
                    // TODO: Clean up the if clause without outputs
                    if (newIndex !== index) {
                        //setIndex(newIndex);
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
            />
            <View style={indexStyle.container}>
                {renderAccountIndexDots(index)}
            </View>
        </View>
    )
}

export default AccountCardList