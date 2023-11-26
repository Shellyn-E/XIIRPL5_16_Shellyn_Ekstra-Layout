import React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import HomeList from "../../components/HomeList";
import data from "./data";

export default function Home({ navigation }) {
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {data.map((item) => (
            <HomeList
              key={item.id}
              imgSource={item.img}
              title={item.title}
              onPress={() => handleNavigation(item.onPress)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
