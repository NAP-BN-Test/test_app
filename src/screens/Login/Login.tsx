import { StatusBar } from "expo-status-bar";
import React, { createRef, useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./Login.css";

import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/core";
import { Services } from "../../services/index.services";
import { Root, Popup } from "popup-ui";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "react-native-google-signin";
import { useDispatch } from "react-redux";
import { Action } from "../../redux/actions/index.actions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [gettingLoginStatus, setGettingLoginStatus] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    // Initial configuration
    GoogleSignin.configure({
      // Mandatory method to call before calling signIn()
      scopes: ["https://www.googleapis.com/auth/drive.readonly"],
      // Repleace with your webClientId
      // Generated from Firebase console
      webClientId:
        "722126406773-b3eae63oimdeuql8pd24cdcpmm495qmo.apps.googleusercontent.com",
    });
    // Check if user is already signed in
    _isSignedIn();
  }, []);

  const _isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      // Set User Info if user is already signed in
      _getCurrentUserInfo();
    } else {
      console.log("Please Login");
    }
    setGettingLoginStatus(false);
  };

  const _signIn = async () => {
    // It will prompt google Signin Widget
    try {
      await GoogleSignin.hasPlayServices({
        // Check if device has Google Play Services installed
        // Always resolves to true on iOS
        showPlayServicesUpdateDialog: true,
      });
      const info = await GoogleSignin.signIn();
      console.log("User Info --> ", info);
      await setUserInfo(info);
      const infoUser = JSON.stringify(info.user);
      await AsyncStorage.setItem("infoUser", infoUser);
      Popup.show({
        type: "Success",
        title: "User is already signed in",
        button: true,
        textBody: "Hello, " + info.user.name + "!",
        buttonText: "Ok",
        callback: () => {
          Popup.hide();
          navigation.navigate("rootHome");
        },
      });
    } catch (error) {
      console.log("Message", JSON.stringify(error));
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // alert('User Cancelled the Login Flow');
        Popup.show({
          type: "Warning",
          title: "Warning",
          button: true,
          textBody: "User Cancelled the Login Flow",
          buttonText: "Ok",
          callback: () => Popup.hide(),
        });
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // alert("Signing In");
        Popup.show({
          type: "Warning",
          title: "Warning",
          button: true,
          textBody: "Signing In",
          buttonText: "Ok",
          callback: () => Popup.hide(),
        });
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // alert("Play Services Not Available or Outdated");
        Popup.show({
          type: "Warning",
          title: "Warning",
          button: true,
          textBody: "Play Services Not Available or Outdated",
          buttonText: "Ok",
          callback: () => Popup.hide(),
        });
      } else {
        // alert(error.message);
        Popup.show({
          type: "Warning",
          title: "Warning",
          button: true,
          textBody: error.message,
          buttonText: "Ok",
          callback: () => Popup.hide(),
        });
      }
    }
  };

  const _getCurrentUserInfo = async () => {
    try {
      let info = await GoogleSignin.signInSilently();
      console.log("User Info --> ", info);
      setUserInfo(info);
      const infoUser = JSON.stringify(info.user);
      await AsyncStorage.setItem("infoUser", infoUser);
      Popup.show({
        type: "Success",
        title: "User is already signed in",
        button: true,
        textBody: "Hello, " + info.user.name + "!",
        buttonText: "Ok",
        callback: () => {
          Popup.hide();
          navigation.navigate("rootHome");
        },
      });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        Popup.show({
          type: "Warning",
          title: "Warning",
          button: true,
          textBody: "User has not signed in yet",
          buttonText: "Ok",
          callback: () => Popup.hide(),
        });
        console.log("User has not signed in yet");
      } else {
        Popup.show({
          type: "Warning",
          title: "Warning",
          button: true,
          textBody: "Unable to get user's info",
          buttonText: "Ok",
          callback: () => Popup.hide(),
        });
        console.log("Unable to get user's info");
      }
    }
  };

  const handleSubmitPress = () => {
    if (!userEmail) {
      Popup.show({
        type: "Warning",
        title: "Warning",
        button: true,
        textBody: "Please fill Email",
        buttonText: "Ok",
        callback: () => Popup.hide(),
      });
      return;
    }
    if (!userPassword) {
      Popup.show({
        type: "Danger",
        title: "Error",
        button: true,
        textBody: "Please fill Password",
        buttonText: "Ok",
        callback: () => Popup.hide(),
      });
      return;
    }

    auth()
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then((user) => {
        console.log(user);
        // If server response message same as Data Matched
        if (user) navigation.navigate("rootHome");
      })
      .catch((error) => {
        let errortext = "";
        if (error.code == "auth/invalid-email")
          errortext = "The email address is badly formatted.";
        else if (error.code == "auth/user-not-found")
          errortext = "No User Found";
        else {
          errortext = "Please check your email id or password";
        }
        Popup.show({
          type: "Warning",
          title: "Warning",
          button: true,
          textBody: errortext,
          buttonText: "Ok",
          callback: () => Popup.hide(),
        });
      });
  };

  return (
    <>
      <Root>
        {/* Thêm dòng Root này để hiện được popup */}
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar backgroundColor="tomato" style="light"></StatusBar>
          <View style={styles.container}>
            <View style={styles.content_top}>
              <View style={styles.img}>
                <Image source={require("../../assets/img/logo.png")} />
              </View>
              <KeyboardAvoidingView enabled style={styles.func}>
                <View style={styles.input}>
                  <TextInput
                    placeholder="Số điện thoại hoặc Email"
                    placeholderTextColor="#424E68"
                    keyboardType="email-address"
                    returnKeyType="next"
                    autoCapitalize="none"
                    underlineColorAndroid="#f000"
                    blurOnSubmit={false}
                    onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                  ></TextInput>
                </View>
                <View style={styles.input}>
                  <TextInput
                    placeholder="Mật khẩu"
                    onChangeText={(UserPassword) =>
                      setUserPassword(UserPassword)
                    }
                    keyboardType="default"
                    blurOnSubmit={false}
                    secureTextEntry={true}
                    underlineColorAndroid="#f000"
                    returnKeyType="next"
                  ></TextInput>
                </View>
                <View style={styles.login}>
                  <TouchableOpacity
                    style={styles.login_button}
                    onPress={handleSubmitPress}
                  >
                    <Text style={styles.login_text}>Đăng nhập</Text>
                  </TouchableOpacity>
                </View>
              </KeyboardAvoidingView>
            </View>

            <View>
              <View style={styles.or}>
                <View style={styles.horizontal}></View>
                <Text style={styles.text_or}>HOẶC</Text>
                <View style={styles.horizontal}></View>
              </View>
              <GoogleSigninButton
                style={styles.googleSignin}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Light}
                onPress={_signIn}
              />
              {/* <View style={styles.create}>
                <TouchableOpacity
                  style={styles.create_button}
                  onPress={() => navigation.navigate("registerScreen")}
                >
                  <Text style={styles.create_text}>Tạo tài khoản mới</Text>
                </TouchableOpacity>
              </View> */}
            </View>
          </View>
        </SafeAreaView>
      </Root>
    </>
  );
};

export default Login;
