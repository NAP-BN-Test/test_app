// import React, { useState } from "react";
import { View, Image, FlatList, ScrollView } from "react-native";
import { COLORS, FONTS, SIZES } from "./InfoAdminUser.css";
import { Avatar, Button, Switch, Text } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootState } from "../../redux/reducers/index.reducer";
import Swipeout from 'react-native-swipeout';
import styles from "../InfoUser/InfoUser.css";
import React, { useEffect, useState } from "react";
import { Action } from "../../redux/actions/index.actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { URL } from "../../assets/data/data";
const InfoAdminUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [idAccount, setIDAccount] = useState(0);
  const dispatch = useDispatch();
  const arrayAccount: any = useSelector((state: RootState) => state.account);

  useEffect(() => {
    toggleGetListTBLAccount();
  }, []);
  async function deleteTblAccount(id: any) {
    return axios
      .post(`${URL}/delete_tbl_account`, {id: id})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      })
    }
  console.log(arrayAccount);
  
  async function toggleGetListTBLAccount() {
    setIsLoading(true);
    await dispatch(
      Action.act_getListtblAccount()
    );
    setIsLoading(false);
  }

  function renderCategoryData() {
    const renderItem = ({ item }: any) => {
      return (
        <View style={{ marginVertical: SIZES.base }}>
          <ScrollView>
            <Swipeout right={swipeoutBtns}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Image
                  source={{
                    uri: item.urlImg,
                  }}
                  resizeMode="cover"
                  style={{ width: 100, height: 150, borderRadius: 10 }}
                />

                <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                    <Button icon="account-check-outline" color="tomato" style={{ paddingLeft: "1%"}}>
                        <Text style={styles.textColor}>{item.name}</Text>
                    </Button>
                    <Button icon="email-multiple-outline" color="tomato">
                        <Text style={styles.textColor}>{item.email}</Text>
                    </Button>
                    <Button icon="account-convert-outline" color="tomato">
                      <Text style={styles.textColor}>Đang hoạt động</Text>
                  </Button>
                </View>
              </View>
              <TouchableOpacity
                style={{ position: 'absolute', top: 5, right: 15 }}
                onPress={() => console.log("Bookmark")}
              >
                <Image
                  source={{
                    uri:
                      'https://media.travelmag.vn/files/thuannguyen/2020/04/25/cach-chup-anh-dep-tai-da-lat-1-2306.jpeg',
                  }}
                  resizeMode="contain"

                  style={{
                    width: 25,
                    height: 25,
                    tintColor: COLORS.lightGray
                  }}
                />
              </TouchableOpacity>
            </Swipeout>
          </ScrollView>

        </View>
      )
    }
    var books = Array()
    books = arrayAccount
    return (
      <View style={{ flex: 1, paddingLeft: '2%', paddingRight: '2%' }}>
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    )
  }
  var swipeoutBtns = [
    // {
    //   text: 'Sửa',
    //   backgroundColor: '#F7D358',
    //   // underlayColor: '#000000',

    //   onPress: () => { _handlePD() },
    //   autoClose: true,
    //   // color: '#000000'
    //   // disabled: true, // vô hiệu hóa nút
    // },
    {
      text: 'Xóa',
      backgroundColor: '#FA5858',
      // underlayColor: '#000000',

      onPress: () => { 
        console.log();
        
        deleteTblAccount(1) 
      },
      autoClose: true,
      color: '#000000'
    }

  ]
  return (
    <ScrollView>
      <View style={{ marginTop: '10%' }}>
        <View>
          {renderCategoryData()}
        </View>
      </View>
    </ScrollView>
  );
};

export default InfoAdminUser;
