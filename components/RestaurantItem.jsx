import React, { useState } from 'react';
import { ScrollView, StyleShee, Text, Image, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { BannerData } from "../data/Bannerdata";
import tw from 'tailwind-react-native-classnames';
const watch = require('../assets/icons/watch-removebg-preview.png')
const love = require('../assets/icons/coeurvb-removebg-preview.png')
const unlove = require('../assets/icons/coeurvr-removebg-preview.png')

export function RestaurantItem({ item, index }) {
    const [loved, setLoved] = useState(false)


    console.log("////", item.image_url);
    return (
        <TouchableOpacity style={tw` mx-3 my-3`} index={index}>
            <Image source={item.image_url} style={tw`h-48 w-48`} />
            <TouchableOpacity style={tw` absolute top-1 right-2`} onPress={() => setLoved(!loved)}>

                {
                    loved ? (<Image source={love} style={[tw`h-6 w-6`, loved ? styles.love : styles.unlove]} />) : (<Image source={unlove} style={[tw`h-6 w-6`, loved ? styles.love : styles.unlove]} />)
                }


            </TouchableOpacity>
            <View style={tw`flex-row mt-3`}>
                <View style={tw`flex-grow`}>
                    <Text style={tw`font-bold text-lg`}>{item.name}</Text>
                    <View style={tw`flex-row items-center mt-1`}>
                        <Image source={watch} style={tw`h-5 w-5 mx-2`} />
                        <Text style={tw`text-xs text-gray-700`}>{item.time} min {item.price} $</Text>

                    </View>
                </View>

                <View style={tw`bg-gray-100 w-8 h-8 rounded-full justify-center `}>
                    <Text style={tw`text-gray-600 text-xs`}>{item.rating}</Text>
                </View>
            </View>






        </TouchableOpacity>


    );
};



const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    love: {
        // backgroundColor: "red",
        width: 40,
        height: 40,
       
    },
    unlove: {
        // backfaceVisibility: 'white',
        width: 40,
        height: 40,
      
    }
});



