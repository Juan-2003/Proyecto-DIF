import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "react-native";
import Reporte from "../HomeScreens/Reports";
import HomeScreen from "../HomeScreens/HomeScreen";
import Help from "../HomeScreens/Help";
import Information from "../HomeScreens/Information";
import Estadisticas from "../HomeScreens/Estadistics";
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
        <Drawer.Screen
          name="Realizar Reporte"
          component={Reporte}
          options={{
            headerShown: false // Cambia el título si lo deseas
          }}
        />
        <Drawer.Screen
          name="Ver informacion"
          component={Information}
          options={{
            headerShown: false // Cambia el título si lo deseas
          }}
        />
        <Drawer.Screen
          name="Ver estadisticas"
          component={Estadisticas}
          options={{
            headerShown: false // Cambia el título si lo deseas
          }}
        />
        <Drawer.Screen
          name="Ayuda"
          component={Help}
          options={{
            headerShown: false // Cambia el título si lo deseas
          }}
        />
      </Drawer.Navigator>
    </>
  );
}
