import { StyleSheet } from "react-native";
import { windowWidth } from "../../utils/Dimention";

type Style = {
  container: any;
  img: any;
  title: any;
  description: any;
  textDetail: any;
  panel: any;
  channel: any;
  numberVideo: any;
};

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    // marginBottom: 10,
  },

  channel: {
    width: "48%",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },

  img: {
    width: "100%",
    height: 100,
    // margin: 10,
  },

  panel: {
    width: 92,
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    // line-height: var(--ytd-subheadline_-_line-height);
    // letter-spacing: var(--ytd-subheadline_-_letter-spacing);
    // display: -ms-flexbox;
    // display: -webkit-flex;
    // display: flex;
    // -ms-flex-direction: column;
    // -webkit-flex-direction: column;
    // flex-direction: column;
    // -ms-flex-align: center;
    // -webkit-align-items: center;
    alignItems: "center",
    justifyContent: "center",
  },

  numberVideo: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },

  textDetail: {
    paddingHorizontal: 10,
    // paddingTop: 10,
    // marginRight: 15,
  },

  title: {
    fontSize: 16,
    color: "black",
    width: windowWidth / 2 - 20,
  },

  description: {},
});
