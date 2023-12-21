import CustomModal from "@/components/global/elements/CustomModal";
import { Grape } from "@/components/global/svg";
import { Colors } from "@/constants";
import { paletteColors } from "@/constants/colors";
import { EN } from "@/constants/translations";
import { background, colorStyles } from "@/styles/wallet";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

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
            <Grape fontSize={22} color={Colors.Yellow} />
            <TouchableOpacity onPress={() => toggleModal(true)}>
                <Text style={colorStyles.font}>{EN.wallet.receive.utxoColor}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ColorInput;