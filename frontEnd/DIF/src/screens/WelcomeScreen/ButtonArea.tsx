import Button from "@/src/components/global/button";
import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function ButtonArea(){
    return(
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button title="Regístrarse"/>
                <Text style={styles.text}>¿Nuevo por aquí?</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Iniciar Sesión"/>
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