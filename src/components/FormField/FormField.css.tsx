import { StyleSheet } from "react-native";

type Style = {
  input: any;
  title_input: any;
  textinput: any;
  textYup: any;
};

export default StyleSheet.create<Style>({
  input: {
    paddingBottom: 15,
  },
  title_input: {
    paddingBottom: 5,
  },
  textinput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
  },
  textYup: {
    color: "red",
  },
});
