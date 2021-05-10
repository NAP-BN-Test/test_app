import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./ChannelCard.css";
import { Card, Title } from "react-native-paper";
const ChannelCard = (props: any) => {
  const navigate = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigate.navigate("channelScreen", {
          channelID: props.channelId,
          channelTitle: props.channelTitle,
        })
      }
    >
      <Card>
        <Card.Cover source={{ uri: props.uriImg }} />
      </Card>
      <Card>
        <Card.Content>
          <Title>
            <Text style={styles.title} ellipsizeMode="tail" numberOfLines={2}>
              {props.channelTitle}
            </Text>
          </Title>
          <Text
            style={styles.description}
            ellipsizeMode="tail"
            numberOfLines={2}
          >
            {props.description}
          </Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

export default ChannelCard;
