import React from "react";
import {View, TouchableOpacity, StyleSheet} from "react-native";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface ArrowProps{
    color : string
}

export default function Arrow({color}:ArrowProps){
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <MaterialCommunityIcons name="arrow-left" size={24} color={color} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        position: "absolute",
        //backgroundColor: "red",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    }
})