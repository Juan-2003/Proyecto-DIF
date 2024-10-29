import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import Input from "@/src/components/global/input";
import Button from "@/src/components/global/button";

import InputFields from "@/src/screens/SignUpScreen/InputFileds.json";

export default function SignUpForm(){
    const [formData, setFormData] = useState({
        name: "",
        fatherLastName:"",
        motherLastName:"",
        birthDay:"",
        gender: "",
        state: "",
        city: "",
        address: "",
        postalCode: "",
        phoneNumber: "",
        mail:"",
        password: "",
        passwordConfirmation: ""
    })

    const handleInputChange = (name:string, value:string) => {
        setFormData({
            ...formData,
            [name]:value
        })
        console.log("Name: " + name);
        console.log("Value: " + value);
    }

    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.formContainer}>
                    {InputFields.inputFileds.map((field) => (
                        <Input 
                            key={field.id} 
                            title={field.title}
                            onChange={handleInputChange}
                            /> 
                    ))}
                </View>
                <View style={{alignItems: "center"}}>
                <Button title="Registrarse"/>
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
    }
})