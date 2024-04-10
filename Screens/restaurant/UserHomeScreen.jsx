import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { CustomSearch } from "../../components/CustomscearchBar";
import tw from 'tailwind-react-native-classnames';
import { Categories } from '../../components/Categories';
import { Restaurant } from '../../components/Restaurant';
import { localRestaurants , localRestaurantsCategories } from "../../data/localStorage";

export function UserHomeScreen({ navigation }) {
    return (
        <View style={tw`flex-1 bg-white`}>
            <CustomSearch />
            <Categories />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Restaurant restaurants={localRestaurants} navigation={navigation} name='Récents' />
                <Restaurant restaurants={localRestaurantsCategories} navigation={navigation} name='Catégories' />
                <Restaurant restaurants={localRestaurants} navigation={navigation} name='Récents' />
                <Restaurant restaurants={localRestaurantsCategories} navigation={navigation} name='Catégories' />
            </ScrollView>

        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
    },


});
