import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeList(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <View style={styles.row}>
        <Image source={props.imgSource} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});
