import { Dispatch } from "react";
import { Services } from "../../services/index.services";
import * as constants from "../constant/index.constant";
// Action là các sự kiện, Action gửi dữ liệu từ ứng dụng tới store.
// Store sẽ đảm nhiệm việc lấy thông tin từ actions

export const Action = {
  act_getListChannel,
  act_getListVideoFromChannel,
  act_getListPlaylistFromChannel,
  act_getListVideoFromPlaylist,
  act_getListtblAccount,
};

function getListChannel(channels: any) {
  return { type: constants.GET_LIST_CHANNEL, payload: channels };
}

function act_getListChannel() {
  return async (dispatch: any) => {
    await Services.getListChannel().then(async (res: any) => {
      dispatch(getListChannel(res));
    });
  };
}

function getListVideoFromChannel(videos: any) {
  return { type: constants.GET_LIST_VIDEO_FROM_CHANNEL, payload: videos };
}

function act_getListVideoFromChannel(
  chanelID: string,
  papeToken: string,
  searchKey: string
) {
  return async (dispatch: any) => {
    await Services.getListVideoFromChannel(chanelID, papeToken, searchKey).then(
      async (res: any) => {
        console.log(res);
        
        await dispatch(getListVideoFromChannel(res));
      }
    );
  };
}
function getListtblAccount(accounts: any) {
  return { type: constants.GET_LIST_TBL_ACCOUNT, payload: accounts };
}
function act_getListtblAccount() {
  return async (dispatch: any) => {
    await Services.getListtblAccount().then(
      async (res: any) => {
        await dispatch(getListtblAccount(res));
      }
    );
  };
}

function getListPlaylistFromChannel(playlist: any) {
  return { type: constants.GET_LIST_PLAYLIST_FROM_CHANNEL, payload: playlist };
}

function act_getListPlaylistFromChannel(chanelID: string) {
  return async (dispatch: any) => {
    await Services.getListPlaylistFromChannel(chanelID).then(
      async (res: any) => {
        await dispatch(getListPlaylistFromChannel(res));
      }
    );
  };
}

function getListVideoFromPlaylist(video: any) {
  return { type: constants.GET_LIST_VIDEO_FROM_PLAYLIST, payload: video };
}

function act_getListVideoFromPlaylist(
  playlistID: string,
  papeToken: string,
  searchKey: string
) {
  return async (dispatch: any) => {
    await Services.getListVideoFromPlaylist(
      playlistID,
      papeToken,
      searchKey
    ).then(async (res: any) => {
      await dispatch(getListVideoFromPlaylist(res));
    });
  };
}
