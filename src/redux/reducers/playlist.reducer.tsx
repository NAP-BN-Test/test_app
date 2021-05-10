import { GET_LIST_PLAYLIST_FROM_CHANNEL } from "../constant/index.constant";
import { Playlist } from "../types/index.type";

// Reducers là function đảm nhiệm việc lấy trạng thái cũ của state,
// một action và trả về một state mới.

const initialState: Array<Playlist> = [];

const rdc_playlist = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_LIST_PLAYLIST_FROM_CHANNEL:
      let arr_state: Array<Playlist> = [];
      action.payload.array.map((value: any) => {
        arr_state.push({
          channelTitle: value.name.channelTitle,
          title: value.name.title,
          urlImg: value.name.thumbnails.default.url,
          playlistID: value.id,
          countVideo: value.countVideo,
        });
      });
      return arr_state;
    default:
      return state;
  }
};

export default rdc_playlist;
