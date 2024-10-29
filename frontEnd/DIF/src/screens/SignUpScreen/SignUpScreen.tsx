import React from "react";
import {View, StyleSheet} from "react-native";

import Header from "../../components/global/header";
import SignUpForm from "./SignUpForm";

export default function SignUpScreen(){
    return(
        <View style={styles.container}>
            <Header title={"Registrarse"} arrowColor="black"/>
            <SignUpForm/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#FBEBAC",
        flex:1,
    }
})