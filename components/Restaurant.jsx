import React from 'react';
import { ScrollView, StyleShee, Text, Image, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { BannerData } from "../data/Bannerdata";
import tw from 'tailwind-react-native-classnames';
import { RestaurantItem } from "../components/RestaurantItem";
export function Restaurant({ restaurants, navigation, name }) {
    return (
        <View >
            <View style={[styles.header, tw`mx-4 mb-3`]}>
                <Text style={tw`font-bold text-lg`}>{name}</Text>
                <TouchableOpacity>
                    <Text style={tw` text-xs`}>Voir tout</Text>

                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                restaurants?.map((item, idx) => (
                    
                    <RestaurantItem item={item} index={item.id}/>
                ))
            }
            </ScrollView>
        </View>

    );
};



const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    }
});



