import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./PlayListCard.css";
import Fontisto from "react-native-vector-icons/Fontisto";

const PlaylistCard = (props: any) => {
  const navigate = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigate.navigate("listVideoPlaylist", {
          playlistID: props.playlistID,
          title: props.title,
        })
      }
    >
      <View style={styles.container}>
        <View style={styles.channel}>
          <Image
            source={{
              uri: props.urlImg,
            }}
            style={styles.img}
          />
          <View style={styles.panel}>
            <Text style={styles.numberVideo}>{props.countVideo}</Text>
            <Fontisto name="play-list" size={18} color="white" />
          </View>
        </View>
        <View style={styles.textDetail}>
          <Text style={styles.title} numberOfLines={3} ellipsizeMode="tail">
            {props.title}
          </Text>
          <Text style={styles.description}>{props.channelTitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlaylistCard;
