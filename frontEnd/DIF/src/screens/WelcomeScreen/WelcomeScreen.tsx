import React from "react";
import {View, Text, StyleSheet} from "react-native";
import WelcomeHeader from "./WelcomeHeader";
import TextArea from "./TextArea";
import ButtonArea from "./ButtonArea";

export default function WelcomeScreen(){
    return(
        <View style={styles.container}>
            <WelcomeHeader/>
            <TextArea/>
            <ButtonArea/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})