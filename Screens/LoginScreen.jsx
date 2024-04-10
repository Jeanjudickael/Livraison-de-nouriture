import React , {useState} from 'react';
import { TouchableOpacity, Text, StyleSheet ,View , Image, TextInput} from 'react-native';
import {CustomInput  } from "../components/CustomInput";
import {CustomButton  } from "../components/CustomButton";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export function LoginScreen ({navigation}){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');

  const handleLogin = async () => {
    console.log(email, password);
    try {
      const response = await fetch(
        "http://192.168.202.240:3000/api/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            motDePasse: password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Connexion réussie, redirigez l'utilisateur vers l'écran suivant
        navigation.navigate("MainScreen");
      } else {
        // Afficher un message d'erreur si la connexion a échoué
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
  
        <Text style={styles.text}>Login  <Text  style={styles.textEat} >to</Text> Fast <Text  style={styles.textEat} >Eat</Text></Text>
       
       <View style={styles.containeri}>
    <TextInput  type="text"
        placeholder={'Your email'}
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={ styles.input}
        />
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
      <CustomButton title="Login" onPress={handleLogin} />
        <Text>Don't have an account ?   <Text  style={styles.textEat}  onPress={()=>{navigation.navigate("SingUp")}}>Sing Up</Text></Text>
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

