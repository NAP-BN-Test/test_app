import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "./VideoPlayer.css";
import { WebView } from "react-native-webview";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/core";

const VideoPlayer = (props: any) => {
  const videoId = props.route.params.videoID;
  const title = props.route.params.title;

  const navigation = useNavigation();
  return (
    <View style={styles._container}>
      <View style={styles.body}>
        <View style={styles.back}>
          <Ionicons
            name="md-arrow-back"
            size={32}
            color="tomato"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.title}>
          <Text style={styles.textTitle} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <WebView
          javaScriptEnabled={true}
          scrollEnabled={false}
          allowsFullscreenVideo={true}
          // userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 
          // (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
          source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
        />
      </View>
      <Text style={styles.text} numberOfLines={2} ellipsizeMode="tail">
        {title}
      </Text>
      <View style={styles.boderBottom}></View>
    </View>
  );
};

export default VideoPlayer;
