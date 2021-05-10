import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/screens/Login/Login";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import InfoUser from "./src/screens/InfoUser/InfoUser";
import InfoAdminUser from "./src/screens/InfoAdminUser/InfoAdminUser";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Provider } from "react-redux";
import { createStore } from "redux";
import VideoPlayer from "./src/screens/VideoPlayer/VideoPlayer";
import SearchChannel from "./src/screens/SearchChannel/SearchChannel";
import store from "./src/redux/stores/index.store";
import ListVideo from "./src/screens/ListVideo/ListVideo";
import PlayList from "./src/screens/PlayList/PlayList";
import ChannelScreen from "./src/layouts/ChannelScreen/ChannelScreen";
import ListVideoPlaylist from "./src/screens/ListVideoPlaylist/ListVideoPlaylist";
import RegisterScreen from "./src/screens/RegisterScreen/RegisterScreen";
import { ModalPortal } from "react-native-modals";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName = "ios-help";

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "User") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          } else if (route.name === "User Admin") {
            iconName = focused ? "person-circle" : "person-add-sharp";
          } else if (route.name === "Search Channel") {
            iconName = focused ? "search" : "search";
          } else if (route.name === "Playlist") {
            iconName = focused ? "play" : "play";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Home" component={SearchChannel} />
      <Tabs.Screen name="User" component={InfoUser} />
      <Tabs.Screen name="User Admin" component={InfoAdminUser} />
    </Tabs.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="rootHome"
            component={RootHome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="user"
            options={{ headerShown: false }}
            component={InfoUser}
          />
          <Stack.Screen
            name="videoplayer"
            options={{ headerShown: false }}
            component={VideoPlayer}
          />
          <Stack.Screen
            name="listVideo"
            options={{ headerShown: false }}
            component={ListVideo}
          />
          <Stack.Screen
            name="playlist"
            options={{ headerShown: false }}
            component={PlayList}
          />
          <Stack.Screen
            name="channelScreen"
            options={{ headerShown: false }}
            component={ChannelScreen}
          />
          <Stack.Screen
            name="registerScreen"
            component={RegisterScreen}
            options={{
              title: "Register", //Set Header Title
              headerStyle: {
                backgroundColor: "tomato", //Set Header color
              },
              headerTintColor: "#fff", //Set Header text color
              headerTitleStyle: {
                fontWeight: "bold", //Set Header text style
              },
            }}
          />
          <Stack.Screen
            name="listVideoPlaylist"
            component={ListVideoPlaylist}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <ModalPortal />
    </Provider>
  );
}
