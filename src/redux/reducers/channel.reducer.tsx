import { GET_LIST_CHANNEL } from "../constant/index.constant";
import { Channel } from "../types/index.type";

// Reducers là function đảm nhiệm việc lấy trạng thái cũ của state,
// một action và trả về một state mới.

const initialState: Array<Channel> = [];

const rdc_channel = (state = initialState, action: any) => {
  console.log(action);
  switch (action.type) {
    case GET_LIST_CHANNEL:
      let arr_state: Array<Channel> = [];
      action.payload.array.map((value: any) => {
        arr_state.push({
          uriImg: value.uriImg,
          channelTitle: value.channelTitle,
          channelID: value.channelId,
          description: value.description,
        });
      });
      return arr_state;
    default:
      return state;
  }
};

export default rdc_channel;
