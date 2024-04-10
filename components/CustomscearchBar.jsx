import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, TextInput, View } from 'react-native';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import tw from "tailwind-react-native-classnames";


const watch = require('../assets/icons/watch-removebg-preview.png')
const location = require('../assets/icons/local-removebg-preview.png')

export function CustomSearch({ }) {
    return (
        <View style={tw`mt-16 flex-row px-4 pb-2 border-gray-100 border-b-2`}>
            < GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data, detail = null) => console.log(data, detail)}

                query={{
                    key: 'API ',
                    language: 'en'
                }}
                minLength={2}
                autoFocus={false}
                returnKeyType={'default'}
                fetchDetails={true}
                styles={{
                    textInputContainer: {
                        backgroundColor: '#F3F4F6',
                        borderRadius: 45,
                        justifyContent: 'center'

                    },
                    textInput: {
                        fontSize: 15,
                        fontWeight: "500",
                        backgroundColor: '#F3F4F6',
                        borderRadius: 50,
                        marginTop: 4
                    },
                    predefinedPlacesDescription: {
                        couleur: '#1faadb',
                    },
                }}


                renderLeftButton={() => (
                    <TouchableOpacity style={tw`self-center ml-3`}>
                        <Image source={location} style={{ width: 25, height: 25 }} />
                    </TouchableOpacity>
                )}
                renderRightButton={() => (
                    <TouchableOpacity style={tw`self-center ml-3 flex-row items-center mr-3`}>
                        <Image source={watch} style={{ width: 25, height: 25, marginRight: 10 }} />
                        <Text>Search</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: "center",
        padding: 5,
        position: "relative"
    },
    input: {

        borderColor: "black",
        borderWidth: 1,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 20,
        backgroundColor: "white"
    }
});

