import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./FormField.css";

const FormField = ({
  handleChange,
  handleBlur,
  values,
  label,
  title,
  touched,
  errors,
}: any) => {
  return (
    <View style={styles.input}>
      <Text style={styles.title_input}>{title}</Text>
      <TextInput
        style={styles.textinput}
        onChangeText={handleChange(label)}
        onBlur={handleBlur(label)}
        value={values[label]}
      ></TextInput>
      {touched[label] && errors[label] ? (
        <Text style={styles.textYup}>{errors[label]}</Text>
      ) : null}
    </View>
  );
};

export default FormField;
