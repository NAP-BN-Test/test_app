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
import styles from "./MiniCard.css";

const MiniCard = (props: any) => {
  const navigate = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigate.navigate("videoplayer", {
          videoID: props.videoID,
          title: props.title,
        })
      }
    >
      <View style={styles.container}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoID}/hqdefault.jpg`,
          }}
          style={styles.img}
        />
        <View style={styles.textDetail}>
          <Text style={styles.title} numberOfLines={3} ellipsizeMode="tail">
            {props.title}
          </Text>
          <Text style={styles.description}>{props.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MiniCard;
