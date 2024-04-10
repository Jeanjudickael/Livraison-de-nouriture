import React from 'react';
import { StyleSheet , TextInput , View} from 'react-native';

export function CustomInput ({type , placeholder , showPassword}){
  return (
   <View style={styles.container}>
    <TextInput type={type} placeholder={placeholder} style={ styles.input} secureTextEntry={showPassword}/>
   </View>
  );
};

const styles = StyleSheet.create({
    container:{
        width: '100%',
        justifyContent:"center",
        padding:5,
        position:"relative"
    },
input:{
    
borderColor:"black",
borderWidth:1,
marginTop: 10,
paddingHorizontal:10,
paddingVertical: 15,
borderRadius: 20,
backgroundColor: "white"
}
});

