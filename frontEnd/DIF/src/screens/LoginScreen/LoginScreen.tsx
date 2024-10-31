import React from "react";
import {View, StyleSheet, TouchableOpacity, Text} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Header from "../../components/global/header";
import LoginForm from "./LoginForm";

interface Props {
    navigation: StackNavigationProp<any>;
}

export default function LoginScreen({ navigation }: Props){
    return(
        <View style={styles.container}>
            <Header title={"Iniciar Sesión"} arrowColor="black"/>
            <LoginForm navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#FBEBAC",
        flex:1,
    }
})