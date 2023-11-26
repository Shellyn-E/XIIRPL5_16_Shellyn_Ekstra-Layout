import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const CreateScreen = () => {
  const [name, setName] = useState("");
  const [mentor, setMentor] = useState("");
  const [schedule, setSchedule] = useState("");
  const [quota, setQuota] = useState("");
  const [room, setRoom] = useState("");

  return (
    <View style={styles.container}>
      <Text>Create Extracurricular</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mentor"
        value={mentor}
        onChangeText={(text) => setMentor(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Schedule (YYYY-MM-DD)"
        value={schedule}
        onChangeText={(text) => setSchedule(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Quota"
        value={quota}
        onChangeText={(text) => setQuota(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Room"
        value={room}
        onChangeText={(text) => setRoom(text)}
      />
      <Button title="Create" onPress={() => alert("Data Created")} />
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
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    margin: 10,
    width: "80%",
  },
});

export default CreateScreen;
