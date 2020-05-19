import {
  Text,
  View,
  StyleSheet,
  Image,
  AsyncStorage,
  ActivityIndicator,
} from "react-native";
import * as Animatable from "react-native-animatable";
import React, { Component } from "react";
import axios from "axios";

export default class BottomTabHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      isLoading: true,
      usn: "",
      phone: "",
      balance: "",
      url: "",
    };
  }
  componentDidMount() {
    AsyncStorage.getItem("phone").then((mobileNo) => {
      if (mobileNo) {
        const url = "http://192.168.0.105:9750/getstudent/" + mobileNo;
        this.setState({ url: url });

        return fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState(
              {
                name: responseJson.name,
                usn: responseJson.USN,
                balance: responseJson.Balance,
                phone: responseJson.PhoneNo,
                isLoading: false,
              },
              function () {}
            );
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        console.log("error");
      }
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size='large' />
        </View>
      );
    } else {
      return (
        <View style={styles.background}>
          <View style={styles.header}>
            <Text style={styles.title}>Smart Payment</Text>
            <Text
              style={{ paddingHorizontal: 10, fontSize: 15, color: "white" }}>
              Now Payment without hindrance...
            </Text>
          </View>
          <Animatable.View style={styles.footer} animation='bounceInUp'>
            <View style={styles.infobox}>
              <Text style={{ fontWeight: "bold", fontSize: 20, padding: 5 }}>
                {this.state.name}
              </Text>
              <Text style={styles.infotext}>
                USN : <Text style={styles.infotext}>{this.state.usn}</Text>{" "}
              </Text>
              <Text style={styles.infotext}>
                Mobile Number:
                <Text style={styles.infotext}>{this.state.phone}</Text>
              </Text>
              <Text style={styles.infotext}>
                Balance :{" "}
                <Text style={{ color: "green" }}>₹{this.state.balance}</Text>
              </Text>
            </View>
          </Animatable.View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 37,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  background: {
    flex: 1,
    backgroundColor: "#05375a",
  },
  infobox: {
    backgroundColor: "white",

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    zIndex: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    elevation: 1,
    borderWidth: 1,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    padding: 5,
  },
  infotext: {
    fontWeight: "bold",
    fontSize: 15,
    padding: 5,
  },
  footer: {
    flex: 2,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  header: {
    flex: 1,
    justifyContent: "center",
  },
});
