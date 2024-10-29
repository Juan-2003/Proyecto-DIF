import { Text, View, StyleSheet } from "react-native";

import Title from "@/src/components/global/title";
import Button from "@/src/components/global/button";
import Input from "@/src/components/global/input";
import LoginScreen from "@/src/screens/LoginScreen/LoginScreen";
import SignUpScreen from "@/src/screens/SignUpScreen/SignUpScreen";
import Header from "@/src/components/global/header";
import WelcomeScreen from "@/src/screens/WelcomeScreen/WelcomeScreen";
import WelcomeHeader from "@/src/screens/WelcomeScreen/WelcomeHeader";

export default function Index() {
  return (
    <WelcomeScreen/>
  );
}
/*<View style={styles.container}>
  <Title title="Iniciar Sesion"/>
  <Button title="Iniciar Sesion"/>
  <Input title="Nombre"/>
  <SignUpScreen/>
</View>*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
