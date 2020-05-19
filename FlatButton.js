import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ShadowPropTypesIOS,
} from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const FlatButton = (props) => {
  return (
    <TouchableOpacity onPress={props.OnPress} style={props.style}>
      <View style={styles.buttonstyle}>
        <Text style={styles.textInButton}>{props.title}</Text>
        <MaterialIcons name='navigate-next' color='white' size={20} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonstyle: {
    width: 150,
    height: 45,
    backgroundColor: "#05375a",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textInButton: {
    color: "white",
  },
});
export default FlatButton;
