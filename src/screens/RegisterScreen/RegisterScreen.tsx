import React, { createRef, useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./RegisterScreen.css";
import { Root, Popup } from "popup-ui";
import { StatusBar } from "expo-status-bar";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //   const handleSubmitButton = () => {
  //     if (!userName) return alert("Please fill Name");
  //     if (!userEmail) return alert("Please fill Email");
  //     if (!userPassword) return alert("Please fill Address");

  //     auth()
  //       .createUserWithEmailAndPassword(userEmail, userPassword)
  //       .then((user) => {
  //         console.log("Registration Successful. Please Login to proceed");
  //         console.log(user);
  //         if (user) {
  //           auth()
  //             .currentUser.updateProfile({
  //               displayName: userName,
  //               photoURL: "https://aboutreact.com/profile.png",
  //             })
  //             .then(() => navigation.replace("HomeScreen"))
  //             .catch((error) => {
  //               alert(error);
  //               console.error(error);
  //             });
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         if (error.code === "auth/email-already-in-use") {
  //           setErrortext("That email address is already in use!");
  //         } else {
  //           setErrortext(error.message);
  //         }
  //       });
  //   };

  return (
    <>
      <Root>
        {/* Thêm dòng Root này để hiện được popup */}
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style="dark"></StatusBar>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <View style={styles.container}>
              <View style={styles.content_top}>
                <View style={styles.img}>
                  <Image source={require("../../assets/img/logo.png")} />
                </View>
                <KeyboardAvoidingView
                  enabled
                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                  <View style={styles.func}>
                    <View style={styles.input}>
                      <TextInput
                        placeholder="Enter Email"
                        placeholderTextColor="#424E68"
                        keyboardType="email-address"
                        returnKeyType="next"
                        autoCapitalize="none"
                        underlineColorAndroid="#f000"
                        blurOnSubmit={false}
                        onChangeText={(email) => setEmail(email)}
                      ></TextInput>
                    </View>
                    <View style={styles.input}>
                      <TextInput
                        placeholder="Enter Password"
                        keyboardType="default"
                        blurOnSubmit={false}
                        secureTextEntry={true}
                        underlineColorAndroid="#f000"
                        returnKeyType="next"
                        onSubmitEditing={Keyboard.dismiss}
                        onChangeText={(password) => setPassword(password)}
                      ></TextInput>
                    </View>
                    <View style={styles.input}>
                      <TextInput
                        placeholder="Confirm Password"
                        keyboardType="default"
                        blurOnSubmit={false}
                        secureTextEntry={true}
                        underlineColorAndroid="#f000"
                        returnKeyType="next"
                        onChangeText={(confirmPassword) =>
                          setConfirmPassword(confirmPassword)
                        }
                      ></TextInput>
                    </View>
                    <View style={styles.login}>
                      <TouchableOpacity
                        style={styles.login_button}
                        // onPress={handleSubmitButton}
                      >
                        <Text style={styles.login_text}>Đăng ký</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </KeyboardAvoidingView>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Root>
    </>
  );
};

export default RegisterScreen;
