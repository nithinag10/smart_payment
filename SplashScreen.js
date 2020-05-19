import React from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Button,
} from "react-native";
import * as Animatable from "react-native-animatable";
import FlatButton from "./FlatButton";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#05375a' barStyle='light-content' />

      <View style={styles.header}>
        <Animatable.Image
          animation='bounceIn'
          duration={1500}
          source={require("../smart_payment/assets/logo.png")}
          style={styles.logo}
          resizeMode='stretch'
        />
      </View>
      <Animatable.View style={styles.footer} animation='fadeInUpBig'>
        <Text style={styles.title}>Welcome To the Smart World!</Text>
        <Text style={styles.text}>SignIn with your USN </Text>
        <View style={styles.button}>
          <FlatButton
            OnPress={() => navigation.navigate("SignIn")}
            title='GET STARTED '
          />
        </View>
      </Animatable.View>
    </View>
  );
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.9 * 0.5;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#05375a",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#05375a",
    fontWeight: "bold",
    fontSize: 30,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
});

export default Home;
