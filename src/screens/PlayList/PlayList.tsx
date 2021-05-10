import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import styles from "./PlayList.css";
import Ionicons from "react-native-vector-icons/Ionicons";
import MiniCard from "../../components/MiniCard/MiniCard";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/index.reducer";
import { Action } from "../../redux/actions/index.actions";
import PlaylistCard from "../../components/PlayListCard/PlayListCard";

const PlayList = (props: any) => {
  const params = props.route.params;
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const PlaylistCardData: any = useSelector(
    (state: RootState) => state.playlist
  );

  useEffect(() => {
    toggleGetListVideoFromChannel();
  }, []);

  async function toggleGetListVideoFromChannel() {
    await dispatch(Action.act_getListPlaylistFromChannel(params.channelID));
    setIsLoading(false);
  }

  console.log(PlaylistCardData);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
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
            {params.channelTitle}
          </Text>
        </View>
      </View>

      {isLoading ? (
        <ActivityIndicator style={styles.loading} size="large" color="tomato" />
      ) : (
        <FlatList
          data={PlaylistCardData}
          renderItem={({ item }: any) => {
            return (
              <PlaylistCard
                playlistID={item.playlistID}
                title={item.title}
                urlImg={item.urlImg}
                channelTitle={item.channelTitle}
                countVideo={item.countVideo}
              />
            );
          }}
          keyExtractor={(item: any) => item.playlistID}
        ></FlatList>
      )}
    </View>
  );
};

export default PlayList;
