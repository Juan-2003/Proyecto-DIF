import React from "react";
import {View, StyleSheet, TouchableOpacity, Text} from "react-native";

import Header from "../../components/global/header";
import LoginForm from "./LoginForm";

export default function LoginScreen(){
    return(
        <View style={styles.container}>
            <Header title={"Iniciar Sesión"} arrowColor="black"/>
            <LoginForm/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#FBEBAC",
        flex:1,
    }
})