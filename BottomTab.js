import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import BottomTabAboutMe from "./BottomTabAboutMe";
import BottomTabHome from "./BottomTabHome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import History from "./History";

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      activeColor='#05375a'
      inactiveColor='#000000'
      barStyle={{ backgroundColor: "#FFFFFF" }}>
      <Tab.Screen
        name='Home'
        component={BottomTabHome}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name='home' color='#05375a' size={25} />
          ),
        }}
      />
      <Tab.Screen
        name='notification'
        component={BottomTabHome}
        options={{
          tabBarLabel: "Notification",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='notification' color='#05375a' size={25} />
          ),
        }}
      />
      <Tab.Screen
        name='transaction'
        component={History}
        options={{
          tabBarLabel: "History",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name='history' color='#05375a' size={25} />
          ),
        }}
      />
      <Tab.Screen
        name='me'
        component={BottomTabAboutMe}
        options={{
          tabBarLabel: "Me",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name='user' color='#05375a' size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
