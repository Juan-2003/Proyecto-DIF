import { View,StyleSheet } from "react-native";
import HeaderHome from "./HeaderHome";

import Header from "@/src/components/global/header";

export default function Reporte() {
    return (
    <View style={styles.container}>
        <View style={{flex:0.3}}>
            <HeaderHome title="Reporte"/>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FBEBAC",
    }
  });