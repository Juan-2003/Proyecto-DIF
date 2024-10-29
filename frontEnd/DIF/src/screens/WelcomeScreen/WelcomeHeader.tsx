import Title from "@/src/components/global/title";
import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";

export default function WelcomeHeader(){
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require("@/assets/images/logoDifIcon.png")} style={{width: 100, height:100}}/>
            </View>
            <Title title="Bienvenido" fontSize={45}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },

    imageContainer:{
        alignItems: "center"
    },

    image: {
        width: 100,
        height: 100,
    }
})