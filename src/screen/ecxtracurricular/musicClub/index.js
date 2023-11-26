import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import data from "./data";

export default function DetailScreen({ navigation }) {
  const handleEdit = () => {
    navigation.navigate("Edit");
  };

  return (
    <View style={styles.container}>
      {data.map((item) => (
        <View style={styles.card} key={item.id}>
          <Image
            source={item.img}
            style={[styles.image, styles.center]}
            resizeMode="cover"
          />
          <Text style={[styles.title, styles.center]}>{item.name}</Text>
          <Text>Mentor: {item.mentor}</Text>
          <Text>Schedule: {item.schedule.toLocaleDateString()}</Text>
          <Text>Quota: {item.quota}</Text>
          <Text>Room: {item.room}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => handleEdit(item.id)}>
              <Text style={styles.buttonEdit}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("Data Deleted")}>
              <Text style={styles.buttonDelete}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  center: {
    alignSelf: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  buttonEdit: {
    color: "#007AFF",
    fontSize: 16,
  },
  buttonDelete: {
    color: "#FF0000",
    fontSize: 16,
  },
});
