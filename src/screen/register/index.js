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

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo}></Image>
      <Text style={styles.signup}>Sign Up</Text>
      <Text style={styles.desc}>masuk untuk melanjutkan</Text>
      <View style={{ alignItems: "center" }}>
        <CustomInput style={styles.input} placeholder="Nama Lengkap" />
        <CustomInput style={styles.input} placeholder="Username / Email" />
        <CustomInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <CustomInput
          style={styles.input}
          placeholder="Ulang Password"
          secureTextEntry={true}
        />
        <Text style={styles.forgot}>Lupa Password?</Text>
      </View>
      <View style={{ width: 300, marginLeft: 40 }}>
        <Button title="Daftar" onPress={() => navigation.navigate("Home")} />
        <Text style={styles.text}>atau dengan</Text>
        <CustomButton
          title="Google"
          color={"red"}
          onPress={() => alert("Signed In Use Google")}
        />
      </View>
      <View style={styles.viewMasuk}>
        <Text style={styles.textMasuk}>Sudah punya akun?</Text>
        <TouchableOpacity
          style={{ width: 50 }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.masuk}>Masuk</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
