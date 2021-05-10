import {
  GET_LIST_VIDEO_FROM_CHANNEL,
  GET_LIST_VIDEO_FROM_PLAYLIST,
} from "../constant/index.constant";
import { Video } from "../types/index.type";

// Reducers là function đảm nhiệm việc lấy trạng thái cũ của state,
// một action và trả về một state mới.

const initialState: Array<Video> = [
  {
    videoID: "",
    title: "",
    desciption: "",
  },
];

const rdc_video = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_LIST_VIDEO_FROM_CHANNEL:
      let arr_state: Array<Video> = [];
      action.payload.array.map((value: any) => {
        arr_state.push({
          videoID: value.videoID,
          title: value.title,
          desciption: value.description,
        });
      });
      return {
        array: arr_state,
        nextPageToken: action.payload.nextPageToken,
        prevPageToken: action.payload.prevPageToken,
      };

    case GET_LIST_VIDEO_FROM_PLAYLIST:
      let videoPlaylist: Array<Video> = [];
      action.payload.array.map((value: any) => {
        videoPlaylist.push({
          videoID: value.videoID,
          title: value.title,
          desciption: value.description,
        });
      });
      return {
        array: videoPlaylist,
        nextPageToken: action.payload.nextPageToken,
        prevPageToken: action.payload.prevPageToken,
      };
    default:
      return state;
  }
};

export default rdc_video;
