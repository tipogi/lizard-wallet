import CustomModal from "@/components/global/elements/CustomModal";
import { TagIcon } from "@/components/global/svg";
import { Colors } from "@/constants";
import { EN } from "@/constants/translations";
import { tagInputStyle } from "@/styles/wallet";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const TagInput = () => {

  const [modalVisible, toggleModal] = useState(false);
  const [text, onChangeText] = useState('');

  return (
    <View style={tagInputStyle.property}>
      <CustomModal 
        modalVisible={modalVisible} 
        toggleModal={toggleModal}
        icon={TagIcon}
        headline={EN.wallet.receive.modal.tag.headline}
      >
        <View style={tagInputStyle.inputContainer}>
          <TextInput
            style={[tagInputStyle.font, tagInputStyle.input]}
            onChangeText={onChangeText}
            value={text}
            placeholder={EN.wallet.receive.modal.tag.placeholder}
            placeholderTextColor={Colors.YellowPlaceholder}
            cursorColor={Colors.Green}
          />
        </View>
      </CustomModal>
      <TagIcon fontSize={22} color={Colors.Yellow} />
      <TouchableOpacity onPress={() => toggleModal(true)}>
        <Text style={tagInputStyle.font}>{EN.wallet.receive.tag}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TagInput;