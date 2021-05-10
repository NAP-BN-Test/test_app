import { StyleSheet } from "react-native";
import { windowWidth } from "../../utils/Dimention";

type Style = {
  container: any;
  img: any;
  detail: any;
  textDetail: any;
  title: any;
  description: any;
};

export default StyleSheet.create<Style>({
  container: {
    // flex: 1,
    elevation: 4,
    marginBottom: 10,
  },

  img: {
    width: "100%",
    height: 200,
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
    color: "black",
    width: windowWidth - 50,
  },

  description: {},
});
