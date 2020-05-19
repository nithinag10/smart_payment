import React, { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  StatusBar,
} from "react-native";
import { AuthContext } from "./component/Context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import FlatButton from "../smart_payment/FlatButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animatable from "react-native-animatable";
import { Value } from "react-native-reanimated";

const SignIn = ({ navigation }) => {
  const [data, setData] = React.useState({
    usn: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const { SignIn } = React.useContext(AuthContext);
  const textInputChange = (val) => {
    setData({
      ...data,
      usn: val,
      check_textInputChange: true,
    });
  };
  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
      check_textInputChange: false,
    });
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const loginHandle = (username, password) => {
    SignIn(username, password);
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#05375a' barStyle='light-content' />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
        <Text style={{ color: "white", paddingVertical: 10 }}>
          Smart Payment In DSI Campus
        </Text>
      </View>
      <View style={styles.footer} animation='fadeInUpBig'>
        <Text style={styles.footer_title}>Mobile Number</Text>
        <View style={styles.usndetails}>
          <FontAwesome name='user-o' color='#05375a' size={25} />
          <TextInput
            style={styles.textInput}
            placeholder='Your Number...'
            autoCapitalize='none'
            onChangeText={textInputChange}
            keyboardType={"phone-pad"}
          />
          <Feather
            name='check-circle'
            color='#05375a'
            size={25}
            style={{ alignItems: "flex-end" }}
          />
        </View>
        <Text style={styles.footer_title}>Password</Text>
        <View style={styles.usndetails}>
          <FontAwesome name='lock' color='#05375a' size={25} />
          <TextInput
            style={styles.textInput}
            placeholder='Your Password'
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={handlePasswordChange}
            autoCapitalize='none'
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            <Feather
              name='eye-off'
              color='grey'
              size={20}
              style={{ alignItems: "flex-end" }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 5,
          }}>
          <FlatButton
            style={{ paddingVertical: 5 }}
            title='Login'
            OnPress={() => {
              loginHandle(data.usn, data.password);
            }}
          />

          <Text>New User?</Text>
          <FlatButton
            style={{ paddingVertical: 5 }}
            title='SignUp'
            OnPress={() => navigation.navigate("SignUp")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#05375a",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: "center",
  },
  text_header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  footer_title: {
    fontWeight: "bold",
    fontSize: 25,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  usndetails: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "black",
    fontSize: 20,
  },
});
export default SignIn;
