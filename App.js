import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screen/login";
import Register from "./src/screen/register";
import Home from "./src/screen/home";
import Extracurricular from "./src/screen/ecxtracurricular";
import Create from "./src/screen/ecxtracurricular/create";
import MusicClub from "./src/screen/ecxtracurricular/musicClub";
import EditScreen from "./src/screen/ecxtracurricular/musicClub/edit";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Extracurricular"
          component={Extracurricular}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Create"
          component={Create}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MusicClub"
          component={MusicClub}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Edit"
          component={EditScreen}
          initialParams={{ itemId: 1 }}
          // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
