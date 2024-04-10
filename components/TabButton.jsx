import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import colors from '../tools/colors';
const order = require('../assets/icons/order-removebg-preview (1).png')

export function Tabbutton({navigation }) {
    return (
        <TouchableOpacity  onPress={ () => navigation.navigate('Order')}>
            <View style={styles.container}>
                <Image source={order} style={{ width: 30, height: 30 }} />
            </View>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container:{
            borderRadius : 50,
            borderWidth: 2 ,
            borderColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            height: 60,
            width:60,
            bottom: 30
    },
   
});

