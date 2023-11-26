import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import data from "../data";

const EditScreen = ({ route }) => {
  const { itemId } = route.params;
  const selectedItem = data.find((item) => item.id === itemId);

  if (!selectedItem) {
    return (
      <View style={styles.container}>
        <Text>Item not found!</Text>
      </View>
    );
  }

  const { name, mentor, schedule, quota, room } = selectedItem;

  const onSaveChanges = () => {
    alert("Data Saved");
  };

  return (
    <View style={styles.container}>
      <Text>Edit: {name}</Text>
      <TextInput style={styles.input} placeholder="Name" value={name} />
      <TextInput style={styles.input} placeholder="Mentor" value={mentor} />
      <TextInput
        style={styles.input}
        placeholder="Schedule"
        value={new Date(schedule).toLocaleDateString()}
      />
      <TextInput
        style={styles.input}
        placeholder="Quota"
        value={quota.toString()}
      />
      <TextInput style={styles.input} placeholder="Room" value={room} />
      <TouchableOpacity onPress={onSaveChanges} style={styles.button}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 5,
    width: 200,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default EditScreen;
