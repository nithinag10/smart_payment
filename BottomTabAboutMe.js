import {
  Text,
  View,
  StyleSheet,
  Button,
  ActivityIndicator,
  AsyncStorage,
} from "react-native";
import { Title, Caption } from "react-native-paper";
import { Avatar } from "react-native-elements";
import React, { Component, useEffect } from "react";
import { AuthContext } from "./component/Context";
import FlatButton from "./FlatButton";

const BottomTabAboutMe = () => {
  const { SignOut } = React.useContext(AuthContext);
  const [state, setState] = React.useState({
    name: "",
    phone: "",
    usn: "",
    mail: "",
    isLoading: true,
  });
  useEffect(() => {
    AsyncStorage.getItem("phone").then((mobileNo) => {
      if (mobileNo) {
        const url = "http://192.168.0.105:9750/getstudent/" + mobileNo;

        return fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            setState(
              {
                name: responseJson.name,
                usn: responseJson.USN,
                phone: responseJson.PhoneNo,
                isLoading: false,
                mail: responseJson.Mail,
              },
              function () {}
            );
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  }, []);
  // if (state.isLoading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <ActivityIndicator size='large' />
  //     </View>
  //   );
  // } else {
  return (
    <View style={styles.container}>
      <View style={styles.userinfo}>
        <View>
          <Avatar
            rounded
            source={{
              uri: "https://randomuser.me/api/portraits/men/41.jpg",
            }}
            size='large'
          />
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Title style={styles.title}>{state.name}</Title>
          <Caption style={styles.caption}>{state.phone}</Caption>
          <Caption style={styles.caption}>{state.mail}</Caption>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={{ paddingTop: 50 }}>
          <FlatButton
            title='SignOut'
            OnPress={() => {
              SignOut();
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userinfo: {
    flex: 1,
    backgroundColor: "#05375a",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 2,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  caption: {
    color: "white",
    fontSize: 10,
  },
});

export default BottomTabAboutMe;
