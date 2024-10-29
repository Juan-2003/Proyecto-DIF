import React from "react";
import {View, Text, StyleSheet} from "react-native";
import TextInfo from "./TextInfo.json"

export default function TextArea(){
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {TextInfo.TextInfo.info}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        //backgroundColor: "red"
    },

    textContainer:{
        alignSelf: "center",
        width: "80%",
        //backgroundColor: "blue"
    },

    text:{
        fontSize: 20,
        textAlign: "justify"
    }
})