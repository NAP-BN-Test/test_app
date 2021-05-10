import { StyleSheet } from "react-native";
import Constants from "expo-constants";

type Style = {
  container: any;
  input: any;
  login: any;
  login_button: any;
  login_text: any;
  create: any;
  create_button: any;
  create_text: any;
  horizontal: any;
  or: any;
  text_or: any;
  img: any;
  text_button: any;
  text_text: any;
  func: any;
  content_top: any;
  body: any;
};

const WIDTH_CENTER = {
  borderRadius: 5,
  height: 40,
  justifyContent: "center",
};

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    // padding top bằng chiều cao của thanh status bar
    // paddingTop: Constants.statusBarHeight,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },

  input: {
    ...WIDTH_CENTER,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: "#D4D5D8",
    marginTop: 10,
    color: "#000",
  },
  login: {
    ...WIDTH_CENTER,
    backgroundColor: "tomato",
    marginTop: 15,
  },
  login_button: {},
  login_text: {
    color: "#fff",
    textAlign: "center",
  },
  create: {
    ...WIDTH_CENTER,
    backgroundColor: "#E7F4FF",
  },
  create_button: {},
  create_text: {
    color: "#0077F6",
    textAlign: "center",
  },
  horizontal: {
    flex: 1,
    borderColor: "#D4D5D8",
  },
  or: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 30,
  },
  text_or: {
    width: 50,
    textAlign: "center",
  },
  img: {
    alignItems: "center",
  },
  text_button: {
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 20,
  },
  text_text: {
    fontSize: 16,
    color: "#0077F6",
    fontWeight: "bold",
  },
  content_top: {
    paddingTop: "5%",
  },
  func: {
    paddingTop: "10%",
    // flex: 1,
  },
  body: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
});
