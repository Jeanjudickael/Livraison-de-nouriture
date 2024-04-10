import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function CustomButton ({ onPress, title, buttonStyle, textStyle }){
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    marginVertical: 18,
    width:'100%'
   
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold"
  },
});

