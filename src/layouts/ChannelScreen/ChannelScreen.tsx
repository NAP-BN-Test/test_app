import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import ListVideo from "../../screens/ListVideo/ListVideo";
import PlayList from "../../screens/PlayList/PlayList";

const Tabs = createBottomTabNavigator();
const ChannelScreen = (props: any) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName = "ios-help";

          if (route.name === "List Video") {
            iconName = focused ? "list-circle" : "list-circle-outline";
          } else if (route.name === "Playlist") {
            iconName = focused ? "play-circle" : "play-circle-outline";
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
      <Tabs.Screen name="List Video">
        {() => <ListVideo {...props} />}
      </Tabs.Screen>
      <Tabs.Screen name="Playlist">{() => <PlayList {...props} />}</Tabs.Screen>
    </Tabs.Navigator>
  );
};

export default ChannelScreen;
