import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Constants from "expo-constants";
import { windowWidth } from "../../utils/Dimention";

const WIDTH_CENTER = {
  borderRadius: 5,
  height: 40,
  justifyContent: "center",
};

const stylesHome = StyleSheet.create({
  scrollView: {
    backgroundColor: "tomato",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  imgGif: {
    // resizeMode: "cover",
    // width: windowWidth - 100,
  },
  back: {
    paddingTop: 5,
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: "#D4D5D8",
    marginTop: 10,
    color: "#000",
  },
  engine: {
    position: "absolute",
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark,
  },
  highlight: {
    fontWeight: "700",
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right",
  },
  drawerContent: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  userInfoSection: {
    // paddingLeft: 20,
    // marginTop: 10,
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  title: {
    alignItems: "center",
    marginTop: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  caption: {
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
    color: "tomato",
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
    flexDirection: "column",
  },
  drawerSection: {
    marginTop: 30,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 2,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  color: {
    color: "tomato",
  },
  textColor: {
    color: "tomato",
    fontWeight: "bold",
  },
  logout: {
    backgroundColor: "tomato",
    marginTop: 15,
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
  },
  login_text: {
    color: "#fff",
    textAlign: "center",
  },
  container: {},
  modalContent: {
    width: windowWidth,
    // borderWidth: 2,
  },
});

export default stylesHome;
