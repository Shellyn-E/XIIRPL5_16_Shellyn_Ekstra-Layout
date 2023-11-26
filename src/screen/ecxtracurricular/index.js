import React from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import ExtracurricularList from "../../components/ExtracurricularList";
import data from "./data";

export default function Home({ navigation }) {
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  const handleCreate = () => {
    navigation.navigate("Create");
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ marginBottom: 20 }}>
          {data.map((item) => (
            <ExtracurricularList
              key={item.id}
              imgSource={item.img}
              title={item.name}
              additionalInfo={item.mentor}
              onPress={() => handleNavigation(item.onPress)}
            />
          ))}
          <TouchableOpacity onPress={handleCreate} style={styles.button}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 10,
    paddingHorizontal: 20,
    // borderRadius: 25,
    marginTop: 20,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
