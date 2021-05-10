import React, { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import styles from "./Channel.css";

const Channel = () => {
  return (
    <View>
      <Header />
      <FlatList
        data={cardData}
        renderItem={({ item }: any) => {
          return (
            <Card
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={(item: any) => item.id.videoId}
      ></FlatList>
    </View>
  );
};

export default Channel;
