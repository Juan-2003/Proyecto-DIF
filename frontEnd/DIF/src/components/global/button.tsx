import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

interface ButtonProps{
    title : string;
}

export default function Button({title}:ButtonProps){
    return(
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTitle}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#FF3D9E",
        backgroundColor: "#FF3D9E",
        alignSelf: "flex-start"
    },

    buttonTitle:{
        padding: 5,
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 20
    }
})

