import { StyleSheet } from "react-native";
import { windowWidth } from "../../utils/Dimention";

type Style = {
  container: any;
  img: any;
  detail: any;
  textDetail: any;
  title: any;
  description: any;
  channel: any;
};

export default StyleSheet.create<Style>({
  container: {
    // flex: 1,
    elevation: 2,
    marginBottom: 10,
    flexDirection: "row",
    paddingTop: 10,
    height: 120,
    borderBottomWidth: 1,
  },

  channel: {
    width: "40%",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },

  img: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },

  detail: {
    flexDirection: "row",
    margin: 5,
  },

  textDetail: {
    paddingHorizontal: 10,
  },

  title: {
    fontSize: 20,
    color: "#FF6633",
    width: windowWidth / 2,
  },

  description: {
    width: windowWidth / 2,
    color: "#FF6633",
  },
});
