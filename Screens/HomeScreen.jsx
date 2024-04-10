import React from 'react';
import { TouchableOpacity, Text, StyleSheet,Image, View } from 'react-native';
import { CustomButton  } from "../components/CustomButton";

export function Home ({navigation}){
  return (
    <View style={styles.container}>
    <Image source={require('../assets/logo.jpg')} style={styles.logo}/>

    <View style={styles.content}>
      <Text style={styles.title}>Delight delivered</Text>
      <Text style={styles.subtitle}> Experience the convenience of having  your favorite meals from top restaurants delivered straight to your doorstep, with our easy-to-use app making ordering a breeze </Text>
      <CustomButton title='Commencer' onPress={()=>{navigation.navigate("Login")}}/>
    </View>

  </View>
  );
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'black',
      justifyContent:"flex-end"
    },
    logo:{
      height: 200,
      resizeMode: 'contain',
      position: 'absolute',
      top: '20%',
      
    },
    content:{
      backgroundColor:'white',
      borderTopLeftRadius:30,
      paddingHorizontal:50,
      borderTopRightRadius:30,
      width: '100%',
      paddingTop:25,
    }, 
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    subtitle:{
      fontSize:16,
      color:'gray',
      marginBottom:10,
    }
  
  });
  