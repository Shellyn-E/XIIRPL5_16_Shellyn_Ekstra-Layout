import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Styles from "./styles";
import data from "./data";
import Header from "../src/components/CustomHeader";

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Header />
          {data.map((item) => {})}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
