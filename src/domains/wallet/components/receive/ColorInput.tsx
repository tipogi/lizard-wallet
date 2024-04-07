import { Grape } from "@/assets/svg";
import { CustomModal } from "@/global/components/elements";
import { Colors } from "@/constants";
import { paletteColors } from "@/constants/colors";
import { EN } from "@/constants/translations";
import { background, colorStyles } from "@/domains/wallet/styles";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { fontStyle, iconSizes } from "@/global";

const ColorInput = () => {

    const [modalVisible, toggleModal] = useState(false);
    const [colorIndex, selectColor] = useState(-1);

    return (
        <View style={colorStyles.property}>
            <CustomModal
                modalVisible={modalVisible}
                toggleModal={toggleModal}
                icon={Grape}
                headline={EN.wallet.receive.modal.color.headline}
            >
                <View style={colorStyles.paletteContainer}>
                    { paletteColors.map((color, index) => {
                        return (
                            <TouchableOpacity 
                                key={`${color}-grape-${index}`}
                                style={[
                                    colorStyles.colorContainer, 
                                    background(color).main, 
                                    colorIndex === index ? colorStyles.selected : undefined
                                ]}
                                onPress={() => selectColor(index)}
                            />
                        )
                    }) }
                </View>
            </CustomModal>
            <Grape fontSize={iconSizes.MEDIUM} color={Colors.Grey} />
            <TouchableOpacity onPress={() => toggleModal(true)}>
                <Text style={[fontStyle.italic, fontStyle.h5, colorStyles.font]}>{EN.wallet.receive.utxoColor}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ColorInput;