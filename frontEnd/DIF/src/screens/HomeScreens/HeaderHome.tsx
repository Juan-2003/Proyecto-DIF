import { StyleSheet, Text, View, Pressable, SafeAreaView, Image } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { DrawerActions, useNavigation } from '@react-navigation/native';
import LogoDif from "@/src/components/global/logoDif";
interface Props {
  title: string;
}

export default function HeaderHome({ title }: Props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemContainer}>
        <Pressable style={styles.iconContainer} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <MaterialCommunityIcons name="menu" size={50} color="black" />
        </Pressable>
        <View style={styles.headerContainer}>
            <View style={styles.logoContainer}>
                <Image source={require("@/assets/images/logoDifIcon.png")} style={styles.image}/>
            </View>
            <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.65,
    backgroundColor: "#FBEBAC",
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    //backgroundColor: 'purple'
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: "#FF3D9E",
    fontSize: 30,
    fontWeight: "bold",
    //backgroundColor: 'red',
    width:"80%",
    alignItems:"center"
  },
  iconContainer: {
    paddingHorizontal: 10,
    //backgroundColor: 'green',
    
  },
  logoContainer:{
    flex:2,
    width:"80%",
    alignItems:"center",
    //backgroundColor: 'green',
    justifyContent:"center"
  },
  headerContainer:{
    flexDirection:"column",
    //backgroundColor:"blue",
    width:"90%",
    paddingRight:60,
    alignItems:"center",
    justifyContent:"center",
    
  },
  image:{
    height:"70%",
    width:"70%"
  }
});