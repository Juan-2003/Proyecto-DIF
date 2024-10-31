import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "react-native";
import HomeScreen from "../HomeScreen/HomeScreen";
import LogoDif from "@/src/components/global/logoDif";
import Header from "@/src/components/global/header";
const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true
        }}
      >
        <Drawer.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false // Cambia el título si lo deseas
          }}
        />
      </Drawer.Navigator>
    </>
  );
}
