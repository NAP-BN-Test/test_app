import { StyleSheet } from "react-native";
import { windowWidth } from "../../utils/Dimention";
import Constants from "expo-constants";

type Style = {
  container: any;
  text: any;
  boderBottom: any;
  _container: any;
  body: any;
  title: any;
  back: any;
  // loading: any;
  textTitle: any;
};

export default StyleSheet.create<Style>({
  _container: {
    flex: 1,
    // padding top bằng chiều cao của thanh status bar
    paddingTop: Constants.statusBarHeight,
  },
  container: {
    width: "100%",
    height: 200,
  },

  text: {
    fontSize: 20,
    width: windowWidth - 50,
    margin: 9,
    color: "#FF6633",
  },

  boderBottom: {
    borderBottomWidth: 1,
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
});
