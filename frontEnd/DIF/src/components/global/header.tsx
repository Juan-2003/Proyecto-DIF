import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import Title from "./title";
import Arrow from "./arrow-left";
import LogoDif from "./logoDif";

interface HeaderProps{
    title : string;
    arrowColor : string;
}

export default function Header({title, arrowColor}:HeaderProps){
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require("@/assets/images/logoDifIcon.png")} style={{width: 100, height:100}}/>
            </View>
            <Title title={title} fontSize={45}/>
        </View>
    );
}

/*
<View style={styles.container}>
            <View style={styles.headerContent}>
                <View>
                    <Arrow color={arrowColor}/>
                </View>
                <Title title={title} fontSize ={30}/>
                <View style={styles.logoDifContainer}>
                    <LogoDif/>
                </View>
            </View>
        </View>
*/

/*
 container:{
        flex: 0.5,
        justifyContent: "center",
        //backgroundColor: "green"
    },

    headerContent:{
        flexDirection: "row",
    },

    logoDifContainer:{
        alignItems: "flex-end",
    }
*/

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