import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import CustomButton from "../src/components/CustomButton";
import CustomInput from "../src/components/CustomInput";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "shellyneuriska@gmail.com" && password === "12345") {
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo}></Image>
      <Text style={styles.login}>Login</Text>
      <Text style={styles.desc}>masuk untuk melanjutkan</Text>
      <View style={{ alignItems: "center" }}>
        <CustomInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <CustomInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Text style={styles.forgot}>Lupa Password?</Text>
      </View>
      <View style={{ width: 300, marginLeft: 40 }}>
        <Button title="Masuk" onPress={() => navigation.navigate("Home")} />
        <Text style={styles.text}>atau dengan</Text>
        <CustomButton
          title="Google"
          color={"red"}
          onPress={() => alert("login use google")}
        />
      </View>
      <View style={styles.viewDaftar}>
        <Text style={styles.textDaftar}>Belum punya akun?</Text>
        <TouchableOpacity
          style={{ width: 50 }}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.daftar}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
