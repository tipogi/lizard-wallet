import { Colors } from "@/constants";
import { EN } from "@/constants/translations";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { IconProps } from "@/assets/svg";
import { modalStyle } from "@/domains/global";

interface CustomModalProps {
  children: JSX.Element | JSX.Element[],
  modalVisible: boolean,
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>
  icon: React.ElementType<IconProps>,
  headline: string
}

export const CustomModal = ({ children, modalVisible, toggleModal, icon: Icon, headline }: CustomModalProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
    >
      <View style={modalStyle.centeredView}>
        <View style={modalStyle.modalView}>
          <View style={modalStyle.header}>
            <View style={modalStyle.modalIconContainer}>
              <Icon fontSize={30} color={Colors.Background} rotate={0} />
            </View>
            <Text style={[modalStyle.font, modalStyle.headerText]}>{headline}</Text>
          </View>
          {children}
          <View style={modalStyle.buttonsContainer}>
            <TouchableOpacity
              style={modalStyle.cancelBtn}
              onPress={() => toggleModal(!modalVisible)}
            >
              <Text style={[modalStyle.font, modalStyle.cancelBtnText]}>{EN.generic.button.cancel}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={modalStyle.saveBtn}
              onPress={() => toggleModal(!modalVisible)}
            >
              <Text style={[modalStyle.font, modalStyle.saveBtnText]}>{EN.generic.button.save}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}