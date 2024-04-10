import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { MainTabNavigator } from "../Route/MainTabNavigator";
import { NavigationContainer } from '@react-navigation/native';


export function MainScreen({ navigation }) {
    return (

      
            <MainTabNavigator navigation={navigation}/>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20

    },
    logo: {
        height: 200,
        resizeMode: 'contain',
        marginTop: 150


    },
    text: {
        fontSize: 30,
        fontWeight: "bold"
    },
    textEat: {
        color: "green"
    }
});

