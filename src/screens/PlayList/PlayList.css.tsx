import { StyleSheet } from "react-native";
import Constants from "expo-constants";

type Style = {
  container: any;
  body: any;
  title: any;
  back: any;
  loading: any;
  textTitle: any;
};

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    // backgroundColor: "tomato",
  },
  body: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-around",
    alignContent: "center",
    elevation: 5,
    backgroundColor: "white",
    // height: 40,
  },
  back: {
    paddingTop: 5,
  },
  title: {
    width: "70%",
    justifyContent: "center",
  },

  textTitle: {
    fontSize: 22,
    color: "tomato",
  },

  loading: {
    marginTop: 10,
  },
});
