import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./BottomTab";
import { View, ActivityIndicator, AsyncStorage } from "react-native";
import RootStack from "./RootStack";
import { AuthContext } from "./component/Context";

export default function App() {
  const initialLoginState = {
    isLoading: true,
    usn: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          usn: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          usn: null,
          userToken: null,
          isLoading: false,
        };
      case "RESGISTER":
        return {
          ...prevState,
          usn: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };
  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );
  const authContext = React.useMemo(
    () => ({
      SignIn: async (usn, password) => {
        if (password == "admin") {
          let userToken;

          userToken = "dfsdf";

          try {
            await AsyncStorage.setItem("phone", usn);
          } catch (e) {
            console.log(e);
          }
          try {
            await AsyncStorage.setItem("userToken", userToken);
          } catch (e) {
            console.log(e);
          }
          // console.log('user token: ', userToken);
          dispatch({ type: "LOGIN", id: usn, token: userToken });
        }
      },
      SignOut: async () => {
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },
      SignUp: () => {},
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    }, 1000);
  }, []);
  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? <BottomTab /> : <RootStack />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
