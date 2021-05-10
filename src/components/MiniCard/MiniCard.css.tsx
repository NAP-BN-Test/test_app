import { StyleSheet } from "react-native";
import { windowWidth } from "../../utils/Dimention";

type Style = {
  container: any;
  img: any;
  title: any;
  description: any;
  textDetail: any;
};

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    // marginBottom: 10,
  },

  img: {
    width: "48%",
    height: 100,
    // margin: 10,
  },

  textDetail: {
    paddingHorizontal: 10,
    // paddingTop: 10,
    // marginRight: 15,
  },

  title: {
    fontSize: 16,
    color: "#FF6633",
    width: windowWidth / 2 - 20,
  },

  description: {
    color: "#FF6633",
  },
});
