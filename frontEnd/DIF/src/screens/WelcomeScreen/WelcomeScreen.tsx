import React from "react";
import {View, Text, StyleSheet} from "react-native";
import WelcomeHeader from "./WelcomeHeader";
import TextArea from "./TextArea";
import ButtonArea from "./ButtonArea";
import { StackNavigationProp } from "@react-navigation/stack";

interface Props {
    navigation: StackNavigationProp<any>;
}

export default function WelcomeScreen({ navigation }: Props){
    return(
        <View style={styles.container}>
            <WelcomeHeader/>
            <TextArea/>
            <ButtonArea navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})