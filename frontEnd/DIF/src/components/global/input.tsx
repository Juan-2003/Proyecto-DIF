import React from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";

interface InputProps{
    title : string;
    onChange: (name:string, value:string) => void;
}

export default function Input({title, onChange}:InputProps){
    const handleOnChange = (value:string) => {
        onChange(title, value);
    }

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View>
                <TextInput style={styles.textInput} onChangeText={handleOnChange}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        //backgroundColor: "red",
        width: "80%",
        marginVertical: 20,
    },

    title:{
        fontWeight: "bold",
    },

    textInput:{
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#EAE6B0",
        borderRadius: 5

    }
})