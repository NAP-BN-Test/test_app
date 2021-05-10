import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, TextInput, FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ListVideoPlaylist.css";
import Ionicons from "react-native-vector-icons/Ionicons";
import MiniCard from "../../components/MiniCard/MiniCard";
import { RootState } from "../../redux/reducers/index.reducer";
import { Action } from "../../redux/actions/index.actions";
import { Services } from "../../services/index.services";

const ListVideoPlaylist = (props: any) => {
  const params = props.route.params.playlistID;
  const [value, setValue] = useState("");
  const [nextPageToken, setNextPageToken] = useState("");
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingBottom, setIsLoadingBottom] = useState(false);
  let onEndReachedCalledDuringMomentum: boolean;

  const miniCardData: any = useSelector(
    (state: RootState) => state.videoPlaylist
  );

  useEffect(() => {
    toggleGetListVideoPlaylistFromChannel();
  }, []);

  async function toggleGetListVideoPlaylistFromChannel() {
    await dispatch(
      Action.act_getListVideoFromPlaylist(params, nextPageToken, value)
    );
    setIsLoading(false);
  }

  // console.log(miniCardData);

  const navigation = useNavigation();

  const renderFooter = () => {
    return isLoadingBottom ? (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="tomato" />
      </View>
    ) : null;
  };

  const handleLoadMore = async () => {
    if (!onEndReachedCalledDuringMomentum) {
      console.log("load");
      setIsLoadingBottom(true);
      await Services.getListVideoFromPlaylist(
        params,
        miniCardData.nextPageToken,
        value
      ).then((res) => {
        // console.log(res);
        if (miniCardData.nextPageToken != res.nextPageToken) {
          miniCardData.nextPageToken = res.nextPageToken;
          Array.prototype.push.apply(miniCardData.array, res.array);
        }
        // console.log(miniCardData);
        setIsLoadingBottom(false);
      });
    }
    onEndReachedCalledDuringMomentum = true;
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.back}>
          <Ionicons
            name="md-arrow-back"
            size={32}
            onPress={() => navigation.goBack()}
          />
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setValue(text);
          }}
        />
        <View style={styles.back}>
          <Ionicons
            name="md-send"
            size={32}
            onPress={toggleGetListVideoPlaylistFromChannel}
          />
        </View>
      </View>

      {isLoading ? (
        <ActivityIndicator style={styles.loading} size="large" color="tomato" />
      ) : (
        <FlatList
          data={miniCardData.array}
          renderItem={({ item }: any) => {
            return (
              <MiniCard
                videoID={item.videoID}
                title={item.title}
                description={item.description}
              />
            );
          }}
          keyExtractor={(item: any) => item.videoID}
          ListFooterComponent={renderFooter}
          onEndReachedThreshold={0.01}
          onEndReached={({ distanceFromEnd }) => {
            if (distanceFromEnd >= 0) {
              console.log("calls");
              console.log(params, miniCardData.nextPageToken, value);
              setTimeout(() => {
                setIsLoadingBottom(true);
                handleLoadMore();
              }, 1500);
            }
          }}
          onMomentumScrollBegin={() => {
            onEndReachedCalledDuringMomentum = false;
          }}
        ></FlatList>
      )}
    </View>
  );
};

export default ListVideoPlaylist;
