import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./SplashScreen";
import SignInScreen from "../smart_payment/SignIn";
import SignUpScreen from "./SignUpScreen";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name='Home' component={SplashScreen} />
      <Stack.Screen name='SignIn' component={SignInScreen} />
      <Stack.Screen name='SignUp' component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default MyStack;
