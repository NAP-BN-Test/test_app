import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./Card.css";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/core";
const Card = (props: any) => {
  const navigate = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigate.navigate("videoplayer", {
          videoId: props.videoId,
          title: props.title,
        })
      }
    >
      <View style={styles.container}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
          }}
          style={styles.img}
        />
        <View style={styles.detail}>
          <MaterialIcons name="account-circle" size={40} color="black" />
          <View style={styles.textDetail}>
            <Text style={styles.title} ellipsizeMode="tail" numberOfLines={2}>
              {props.title}
            </Text>
            <Text style={styles.description}>{props.channel}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
