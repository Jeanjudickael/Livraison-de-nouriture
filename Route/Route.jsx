
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Home} from "../Screens/HomeScreen"; 
import {LoginScreen} from "../Screens/LoginScreen"; 
import {SingUpScreen} from "../Screens/SingUpScreen"; 
import { MainScreen } from "../Screens/MainScreen";
import { OrderScreen } from "../Screens/restaurant/OrderScreen";
export function Route() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="SingUp" component={SingUpScreen}/> 
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="MainScreen" component={MainScreen}/>
        <Stack.Screen name="Order" component={OrderScreen}/>

      </Stack.Navigator>
      </NavigationContainer>
  );
};
