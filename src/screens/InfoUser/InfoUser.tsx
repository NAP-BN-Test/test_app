import React, { useEffect, useState } from "react";
import { CameraRoll, View, Image } from "react-native";
import styles from "./InfoUser.css";
import { Avatar, Button, Switch, Text } from "react-native-paper";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "../../redux/actions/index.actions";
import axios from "axios";
import { URL } from "../../assets/data/data";
import LocalizedStrings from "react-native-localization";
import { RootState } from "../../redux/reducers/index.reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { GoogleSignin } from "react-native-google-signin";
import Modal, {
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
} from "react-native-modals";
import { useNavigation } from "@react-navigation/core";

let strings = new LocalizedStrings({
  vi: {
    how: "Bạn muốn quả trứng của mình hôm nay như thế nào?",
    boiledEgg: "Boiled egg",
    softBoiledEgg: "Soft-boiled egg",
    choice: "How to choose the egg",
  },
  en: {
    how: "How do you want your egg today?",
    boiledEgg: "Boiled egg",
    softBoiledEgg: "Soft-boiled egg",
    choice: "How to choose the egg",
  },
  it: {
    how: "Come vuoi il tuo uovo oggi?",
    boiledEgg: "Uovo sodo",
    softBoiledEgg: "Uovo alla coque",
    choice: "Come scegliere l'uovo",
  },
});
const InfoUser = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [infoUser, setInfoUser] = useState({
    photo: "",
    name: "",
    email: "",
  });

  const getDataInfoUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("infoUser");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  function getInfoUser() {
    getDataInfoUser().then((data) => {
      setInfoUser(data);
    });
  }

  useEffect(() => {
    getInfoUser();
  }, []);

  console.log(infoUser);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  // strings.setContent({
  //   it: {
  //     how: "Come vuoi il tuo uovo oggi?",
  //     boiledEgg: "Uovo sodo",
  //     softBoiledEgg: "Uovo alla coque",
  //     choice: "Come scegliere l'uovo"
  //   }
  // })
  strings.setLanguage("en");

  const _signOut = async () => {
    // setGettingLoginStatus(true);
    // Remove user session from the device.
    try {
      console.log(1);

      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      // Removing user Info
      // setUserInfo(null);
    } catch (error) {
      console.error(error);
    }
  };

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.drawerContent}>
        <StatusBar backgroundColor="tomato" style="light"></StatusBar>
        <View style={styles.container}>
          <Modal
            visible={visible}
            footer={
              <ModalFooter>
                <ModalButton
                  text="Cancel"
                  onPress={() => {
                    setVisible(false);
                  }}
                />
                <ModalButton
                  text="Ok"
                  onPress={() => {
                    console.log("hi");

                    _signOut;
                    // navigation.navigate("login");
                  }}
                />
              </ModalFooter>
            }
          >
            <ModalTitle title="Do you want to log out?" />
            <ModalContent>
              <View style={styles.modalContent}>
                <Image
                  source={require("../../assets/img/AnimeKawaiiGIF-AnimeKawaiiLove-Discover&ShareGIFs.gif")}
                  style={styles.imgGif}
                />
              </View>
            </ModalContent>
          </Modal>
        </View>
        <View
          style={{
            alignItems: "center",
            paddingTop: 30,
            paddingBottom: 30,
            backgroundColor: "tomato",
          }}
        >
          <Avatar.Image
            size={100}
            source={{
              uri: infoUser.photo,
            }}
          />
        </View>
        <View style={styles.userInfoSection}>
          <View style={{ marginTop: 20 }}>
            <View style={styles.section}>
              <Button icon="account-check-outline" color="tomato">
                <Text style={styles.textColor}>{infoUser.name}</Text>
              </Button>
            </View>
            <View style={styles.section}>
              <Button icon="email-multiple-outline" color="tomato">
                <Text style={styles.textColor}>{infoUser.email}</Text>
              </Button>
            </View>

            <View style={styles.section}>
              <Button icon="account-convert-outline" color="tomato">
                <Text style={styles.textColor}>Đang hoạt động</Text>
              </Button>
              <Switch
                style={{ marginLeft: 100 }}
                value={isSwitchOn}
                onValueChange={onToggleSwitch}
              />
            </View>
            <View style={styles.logout}>
              <TouchableOpacity onPress={() => setVisible(true)}>
                <Text style={styles.login_text}>Đăng xuất</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default InfoUser;
