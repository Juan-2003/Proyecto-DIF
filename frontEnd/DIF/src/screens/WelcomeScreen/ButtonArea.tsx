import Button from "@/src/components/global/button";
import React from "react";
import {View, Text, StyleSheet,} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

interface Props {
    navigation: StackNavigationProp<any>;
  }

export default function ButtonArea({ navigation }: Props){
    return(
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button title="Regístrarse"  onPressNavigation={() => navigation.navigate("SignUpScreen")}/>
                <Text style={styles.text}>¿Nuevo por aquí?</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Iniciar Sesión" onPressNavigation={() => navigation.navigate("LoginScreen")}/>
                <Text style={styles.text}>¿Ya tienes cuenta?</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        //backgroundColor: "green"
    },

    buttonContainer:{
        marginBottom: "5%"
    },

    text:{
        textAlign: "center",
    }
})