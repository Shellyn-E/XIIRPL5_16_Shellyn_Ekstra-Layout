import React from "react";
import { TextInput } from "react-native";

const CustomInput = (props) => {
  const { placeholder, style, secureTextEntry, onChangeText, value } = props;

  return (
    <TextInput
      placeholder={placeholder}
      style={style}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default CustomInput;
