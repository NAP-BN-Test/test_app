import axios from "axios";
import { URL } from "../assets/data/data";

export const Services = {
  getListChannel,
  getListVideoFromChannel,
  getListPlaylistFromChannel,
  getListVideoFromPlaylist,
  getListtblAccount,
};

function getListChannel() {
  return axios
    .post(`${URL}/get_list_tbl_channel_manager`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

function getListVideoFromChannel(
  channelID: string,
  nextPageToken: string,
  searchKey: string
) {
  return axios
    .post(`${URL}/get_list_video_from_channel`, {
      channelID: channelID,
      nextPageToken: nextPageToken,
      searchKey: searchKey,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
function getListtblAccount() {
  return axios
    .post(`${URL}/get_list_tbl_account`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

function getListPlaylistFromChannel(channelID: string) {
  return axios
    .post(`${URL}/get_list_playlist_from_channel`, {
      channelID: channelID,
    })
    .then((res) => {
      console.log(res);

      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

function getListVideoFromPlaylist(
  playlistID: string,
  nextPageToken: string,
  searchKey: string
) {
  return axios
    .post(`${URL}/get_list_video_from_playlist`, {
      playlistID: playlistID,
      nextPageToken: nextPageToken,
      searchKey: searchKey,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
