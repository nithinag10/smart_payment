import React, { useState } from "react";
import { Text, View, Button, Vibration, Platform } from "react-native";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";

const registerForPushNotificationsAsync = () => {
  const [notification, setnotification] = useState("fg");

  Notifications.addListener(handleNotification);

  const handleNotification = (notification) => {
    Vibration.vibrate();
    console.log(notification);
    setnotification(notification);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
      }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>Origin: {notification}</Text>
        <Text>Data: {}</Text>
      </View>
    </View>
  );
};

export default registerForPushNotificationsAsync;
