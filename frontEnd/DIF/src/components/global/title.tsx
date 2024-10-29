import React from "react";
import {View, Text,StyleSheet} from "react-native";

interface TitleProps{
    title : string;
    fontSize: number;
}

export default function Title({title, fontSize}:TitleProps){
    return (
        <View style={styles.container}>
            <Text style={[styles.text,{fontSize:fontSize}]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
    },

    text:{
        //fontSize: 30,
        color: "#FF3D9E",
        textTransform: "uppercase",
        fontWeight: "bold",
        //backgroundColor: "red",
    }
})