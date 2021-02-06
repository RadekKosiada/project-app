import React, {useState} from "react";
import { Modal, Picker, StyleSheet,  TouchableOpacity,
  Text,
  ScrollView,
  View,
  TextInput,
  Image,
  Button, 
  Dimensions, 
  PickerIOSItem} from "react-native";

// type Props = {
//   visible: Boolean;
// }



const PickerModal = ({visible, title, onClose, onSelect, value }) => {
  const [pickerValue, setPickerValue] = useState("abc")
  const items = ["abc", "def", "ghi"]
  return <Modal 
  animated
  transparent
  animationType="fade"
  visible={visible}
  // items = 
  >
    <View style={styles.container}>
      <View style={styles.picker}>
        <Picker 
        selectedValue={pickerValue}
        onValueChange={() => setPickerValue(value)}
        >
          {items.map((item, index) => 
            <Picker.Item 
            key={index}
            value ={item} 
            label={item} 
          />)}
        </Picker>
      </View>
    </View>
  </Modal>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  justifyContent: "flex-end",
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  picker: {
    // fontSize: 20, 
    // borderRadius: 10, 
    // backgroundColor: "lightgray",
    // height: 200,
    width: "80%",
    backgroundColor: "white"
  }

})

export default PickerModal;