import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    height: 75, // Adjust the height as needed
  },
  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Header;
