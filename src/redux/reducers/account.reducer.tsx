import {
    GET_LIST_TBL_ACCOUNT
  } from "../constant/index.constant";
  import { Account } from "../types/index.type";
  
  // Reducers là function đảm nhiệm việc lấy trạng thái cũ của state,
  // một action và trả về một state mới.
  
  const initialState: Array<Account> = [
    {
      name: "",
      email: "",
      urlImg: "",
      userID: "",
    },
  ];
  
  const rdc_account = (state = initialState, action: any) => {
    switch (action.type) {
      case GET_LIST_TBL_ACCOUNT:
        let arr_account: Array<Account> = [];
        action.payload.array.map((value: any) => {
          arr_account.push({
            name: value.name,
            email: value.email,
            urlImg: value.urlImg,
            userID: value.userID
          });
        });
        return arr_account;
 
      default:
        return state;
    }
  };
  
  export default rdc_account;
  