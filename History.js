import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions, AsyncStorage } from "react-native";
import { Title } from "react-native-paper";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
import { Avatar, ListItem } from "react-native-elements";
import UserAvatar from "react-native-user-avatar";

export default class fetch_list extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      transaction: [],
    };
  }
  async componentDidMount() {
    AsyncStorage.getItem("phone").then((mobileNo) => {
      if (mobileNo) {
        const url = "http://192.168.0.105:9750/gettransaction/" + mobileNo;

        return fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
            this.setState(
              {
                transaction: responseJson,
              },
              function () {}
            );
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  }
  render() {
    if (this.state.transaction.length !== 0) {
      return (
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
              Transactionn
            </Text>
          </View>
          <View style={styles.list}>
            {this.state.transaction.map((item) => {
              return (
                <View>
                  <View style={styles.items}>
                    <View style={{ paddingLeft: 5 }}>
                      <UserAvatar size={50} name={item.Category} />
                    </View>
                    <View style={{ paddingLeft: 20 }}>
                      <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                        {item.Category}
                      </Text>
                      <Text>
                        {item.item_name}*{item.quantity}
                      </Text>
                    </View>

                    <View style={{ paddingLeft: 10 }}>
                      {item.total_Cost > 0 ? (
                        <Text style={{ color: "green", fontSize: 20 }}>
                          ₹{item.total_Cost}
                        </Text>
                      ) : (
                        <Text style={{ color: "red", fontSize: 20 }}>
                          ₹{item.total_Cost}
                        </Text>
                      )}
                    </View>
                  </View>
                  <View style={styles.gap}></View>
                </View>
              );
            })}
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={{ color: "white" }}>No Transaction !</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#05375a",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  items: {
    backgroundColor: "white",
    height: windowHeight * 0.1,
    width: windowWidth * 0.95,
    padding: 2,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    backgroundColor: "#05375a",
    height: windowHeight * 0.1,
    justifyContent: "center",
    padding: 5,
    color: "white",
  },
  list: {
    padding: 10,
  },
  gap: {
    backgroundColor: "#05375a",
    height: windowHeight * 0.02,
  },
});
