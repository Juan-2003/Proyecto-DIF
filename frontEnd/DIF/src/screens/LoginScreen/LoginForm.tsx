import React, { useState } from "react";
import { ScrollView, View, StyleSheet, TouchableOpacity, Text } from "react-native";

import Input from "@/src/components/global/input";
import Button from "@/src/components/global/button";

import LoginInputFields from "./LoginInputFields.json"

export default function LoginForm(){
    const [formData, setFormData] = useState({
        mail: "",
        password: ""
    })

    const handleInputChange = (name:string, value:string) => {
        setFormData({
            ...formData,
            [name]: value
        })
        console.log("Name: " + name);
        console.log("Value: " + value);
    }
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.formContainer}>
                    {LoginInputFields.LoginInputFields.map((field) => (
                        <Input 
                            key={field.id} 
                            title={field.title}
                            onChange={handleInputChange}
                            /> 
                    ))}
                </View>
                <View style={{alignItems: "center"}}>
                
                <View style={styles.forgotPasswordContainer}>
                    <TouchableOpacity>
                        <Text style={styles.forgotPasswordText}>¿Olvidaste la contraseña?</Text>
                    </TouchableOpacity>
                </View>

                <Button title="Iniciar Sesión"/>
                </View>
           </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:2.5,
        //backgroundColor: "blue",
    },

    formContainer:{
        alignItems: "center"
    },

    forgotPasswordContainer: {
        marginVertical: 20,
    },

    forgotPasswordText:{
        color: "#007BFF"
    }
})