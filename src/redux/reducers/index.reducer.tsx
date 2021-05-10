import { combineReducers } from "redux";
import rdc_account from "./account.reducer";
import rdc_channel from "./channel.reducer";
import rdc_playlist from "./playlist.reducer";
import rdc_video from "./video.reducer";

// Trong một ứng dụng phức tạp sử dụng hàm combineReducers()
// để combine tất cả các reducers trong application thành một single
// index reducer.
// Mỗi một reducers đại diện cho một phần của application state,
// và Mỗi một reducer thì có state parameter là khác nhau.
export const rootReducer = combineReducers({
  channel: rdc_channel,
  video: rdc_video,
  account: rdc_account,
  videoPlaylist: rdc_video,
  playlist: rdc_playlist,
});

export type RootState = ReturnType<typeof rootReducer>;
