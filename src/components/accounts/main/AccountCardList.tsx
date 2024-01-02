import { GrapeColors } from "@/constants";
import { cardListStyle, indexStyle, indexStyleGeneric } from "@/styles/accounts";
import { useRef, useState } from "react";
import { Animated, Dimensions, Text, View } from "react-native";
import AccountCard from "./AccountCard";

const { width } = Dimensions.get('window');

const ITEM_SIZE = width * 0.9;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2

interface AccountCardListProps {
    accounts: any,
    index: number,
    setIndex: React.Dispatch<React.SetStateAction<number>>
}

const AccountCardList = ({ accounts, index, setIndex }: AccountCardListProps) => {

    const scrollX = useRef(new Animated.Value(0)).current;

    const renderAccountIndexDots = (selectedIndex: number) => {
        // Hard coded index
        return [1, 2, 3, 4].map((index) => {
            return <View key={`dot-${index}`} style={[indexStyle.element, indexStyleGeneric(index, selectedIndex).focus]} />
        })
    }

    return (
        <View style={cardListStyle.container}>
            <Animated.FlatList
                style={cardListStyle.list}
                showsHorizontalScrollIndicator={false}
                data={accounts}
                keyExtractor={(item) => item.fingerprint}
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
                onMomentumScrollEnd={(ev) => {
                    // Calculate from the index from the list width (x)
                    const newIndex = Math.round(ev.nativeEvent.contentOffset.x / ITEM_SIZE) + 1;
                    if (newIndex !== index) {
                        setIndex(newIndex)
                    }
                }}
                scrollEventThrottle={16}
                renderItem={({ item, index }) => {
                    if (!item.name) {
                        return <View style={{ width: SPACER_ITEM_SIZE }} />
                    }
                    return (
                        <AccountCard
                            item={item}
                            index={index}
                            scrollX={scrollX}
                        />
                    )
                }}
            />
            <View style={indexStyle.container}>
                { renderAccountIndexDots(index) }
            </View>
        </View>
    )
}

export default AccountCardList