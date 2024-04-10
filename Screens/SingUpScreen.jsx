
import React , { useState}from 'react';
import { Text, StyleSheet ,View , Image, TextInput} from 'react-native';
import {CustomInput  } from "../components/CustomInput";
import {CustomButton  } from "../components/CustomButton";

export function SingUpScreen ({navigation}){

  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');

  const handleLogin = async () => {
    console.log(email, password ,nom);
    try {
      const response = await fetch(
        "http://192.168.202.240:3000/api/auth/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nom: nom,
            email: email,
            motDePasse: password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
       
        navigation.navigate("Login");
      } else {
   
        setError(data.message);
        console.log(data.message);
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      setError('Une erreur s\'est produite lors de la connexion.');
    }
  };

  return (
  <View style={styles.container}>
      <Image source={require('../assets/logo.jpg')} style={styles.logo}/>
  
        <Text style={styles.text}>Join  <Text  style={styles.textEat} >to</Text> Fast <Text  style={styles.textEat} >Eat</Text></Text>
        
        <View style={styles.containeri}>
    <TextInput  type="text"
        placeholder={'Your name'}
        value={nom}
        onChangeText={(text) => setNom(text)}
        style={ styles.input}
        
        />
   </View>

        
        <View style={styles.containeri}>
    <TextInput  type="text"
        placeholder={'Your email'}
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={ styles.input}/>
   </View>

   <View style={styles.containeri}>
    <TextInput  
        type="password"
        placeholder={'Your password'}
        showPassword={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={ styles.input}
        />
   </View>
   {error ? <Text style={styles.errorText}>{error}</Text> : null}
        
        
        
{/*         
        <CustomInput type="text" placeholder={'Your Name'} />

        <CustomInput type="text" placeholder={'Your email'} />
        <CustomInput type="password" placeholder={'your password'} showPassword={true}/> */}
        <CustomButton title='Sing Up'onPress={handleLogin}/>
        <Text>Have you an account ?   <Text  style={styles.textEat}  onPress={()=>{navigation.navigate("Login")}}>Login</Text></Text>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
    
  },
  logo:{
    height: 200,
    resizeMode: 'contain',
    marginTop: 150

    
  },
  text:{
    fontSize: 30,
    fontWeight: "bold"
  },
  textEat:{
    color: "green"
  },
  containeri:{
    width: '100%',
    justifyContent:"center",
    padding:5,
    position:"relative"
},
input:{

marginTop: 10,
paddingHorizontal:10,
paddingVertical: 15,
borderRadius: 20,
backgroundColor: "#cccaca"
},
errorText: {
  color: 'red',
  marginBottom: 10,
},
});

