import { StyleSheet } from "react-native";

type Style = {
  container: any;
  body: any;
  input: any;
  back: any;
  loading: any;
};

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
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
  input: {
    width: "70%",
    backgroundColor: "#e6e6e6",
  },
  loading: {
    marginTop: 10,
  },
});
