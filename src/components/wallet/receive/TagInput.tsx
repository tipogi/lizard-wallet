import { TagIcon } from "@/components/global/svg";
import { Colors } from "@/constants";
import { EN } from "@/constants/translations";
import { useState } from "react";
import { Alert, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TagInput = () => {

    const [modalVisible, toggleModal] = useState(false)

    return (
        <View style={styles2.property}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                toggleModal(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => toggleModal(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <TagIcon fontSize={22} color={Colors.Yellow}/>
            <TouchableOpacity onPress={() => toggleModal(true)}>
                <Text style={styles2.font}>{ EN.wallet.receive.tag }</Text>
            </TouchableOpacity>
        </View>
    );
}

export default TagInput;

const styles2 = StyleSheet.create({
    property: {
        display: "flex",
        flexDirection: "row"
    },
    font: {
        fontFamily: "karantina-light",
        fontSize: 22,
        color: Colors.Grey,
        marginLeft: 15
    }
});

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      //marginTop: 22,
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      //opacity: 1,
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
    //   shadowColor: '#000',
    //   shadowOffset: {
    //     width: 0,
    //     height: 2,
    //   },
    //   shadowOpacity: 0.25,
    //   shadowRadius: 4,
    //   elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });