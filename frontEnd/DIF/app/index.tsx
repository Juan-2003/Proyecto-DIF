import * as React from 'react';
import { Text, View, StyleSheet } from "react-native";


import Title from "@/src/components/global/title";
import Button from "@/src/components/global/button";
import Input from "@/src/components/global/input";
import LoginScreen from "@/src/screens/LoginScreen/LoginScreen";
import SignUpScreen from "@/src/screens/SignUpScreen/SignUpScreen";
import Header from "@/src/components/global/header";
import WelcomeScreen from "@/src/screens/WelcomeScreen/WelcomeScreen";
import WelcomeHeader from "@/src/screens/WelcomeScreen/WelcomeHeader";

import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from '@/src/screens/Navigation/DrawerNavigation';

const Stack = createStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{ headerShown: false }}
      >
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{ headerShown: false }}
      />


    </Stack.Navigator>
   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
