import { Tag } from "@/assets/svg";
import { CustomModal } from "@/global/components/elements";
import { Colors } from "@/constants";
import { EN } from "@/constants/translations";
import { tagInputStyle } from "@/domains/wallet/styles";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { fontStyle, iconSizes } from "@/global";

const TagInput = () => {

  const [modalVisible, toggleModal] = useState(false);
  const [text, onChangeText] = useState('');

  return (
    <View style={tagInputStyle.property}>
      <CustomModal 
        modalVisible={modalVisible} 
        toggleModal={toggleModal}
        icon={Tag}
        headline={EN.wallet.receive.modal.tag.headline}
      >
        <View style={tagInputStyle.inputContainer}>
          <TextInput
            style={[fontStyle.main, fontStyle.h5, tagInputStyle.input]}
            onChangeText={onChangeText}
            value={text}
            placeholder={EN.wallet.receive.modal.tag.placeholder}
            placeholderTextColor={Colors.YellowPlaceholder}
            cursorColor={Colors.Green}
          />
        </View>
      </CustomModal>
      <Tag fontSize={iconSizes.MEDIUM} color={Colors.Grey} />
      <TouchableOpacity onPress={() => toggleModal(true)}>
        <Text style={[fontStyle.italic, fontStyle.h5, tagInputStyle.font]}>{EN.wallet.receive.tag}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TagInput;