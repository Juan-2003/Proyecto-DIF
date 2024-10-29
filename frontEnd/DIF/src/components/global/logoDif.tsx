import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";

export default function LogoDif(){
    return(
        <View style={styles.container}>
           <Image source={require("@/assets/images/logoDifIcon.png")} style={styles.image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        position: "absolute",
        //backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    },

    image:{
        width: 40,
        height: 40
    }
})