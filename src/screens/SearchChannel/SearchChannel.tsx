import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./SearchChannel.css";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import ChannelCard from "../../components/ChannelCard/ChannelCard";
import { Channel } from "../../redux/types/index.type";
import { RootState } from "../../redux/reducers/index.reducer";
import { Action } from "../../redux/actions/index.actions";

const SearchChannel = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const cardData: Array<Channel> = useSelector(
    (state: RootState) => state.channel
  );

  useEffect(() => {
    toggleGetListChannel();
  }, []);

  function toggleGetListChannel() {
    dispatch(Action.act_getListChannel());
    setIsLoading(false);
  }

  console.log(cardData);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator style={styles.loading} size="large" color="tomato" />
      ) : (
        <FlatList
          data={cardData}
          renderItem={({ item }: any) => {
            return (
              <ChannelCard
                channelId={item.channelID}
                channelTitle={item.channelTitle}
                description={item.description}
                uriImg={item.uriImg}
              />
            );
          }}
          keyExtractor={(item: any) => item.channelID}
        ></FlatList>
      )}
    </View>
  );
};

export default SearchChannel;
