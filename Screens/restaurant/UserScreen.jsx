import React from 'react';
import {  Text, StyleSheet, View } from 'react-native';


export function UserScreen({ }) {
    return (
        <View style={styles.container}>
            <Text>UserScreen</Text>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },


});
