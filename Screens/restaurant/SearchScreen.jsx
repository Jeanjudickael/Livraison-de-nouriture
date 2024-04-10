import React from 'react';
import { ScrollView, Text, StyleSheet, View ,ImageBackground} from 'react-native';
import { CustomSearch } from "../../components/CustomscearchBar";
import tw from 'tailwind-react-native-classnames';

export function SearchScreen({ }) {
    return (
        <View style={tw`flex-1 bg-white`}>
            <CustomSearch />
            <Text style={styles.Top}>Top Meals</Text>
            <View>
                <ScrollView vertical showsVerticalScrollIndicator={false}>
                    <View style={styles.containerImage}>
                        <View style={styles.cardImage}>
                            <ImageBackground source={require('../../assets/icons/Hamburger.png')} style={styles.img_bg} >
                                <Text style={styles.ImageName}>Hamburger</Text>
                            </ImageBackground>
                        </View>
                        <View style={styles.cardImage}>
                            <ImageBackground source={require('../../assets/icons/Spaghetti bolognaise.png')} style={styles.img_bg} >
                                <Text style={styles.ImageName}>Spaghetti bolognaise</Text>
                            </ImageBackground>
                        </View>
                    </View>
                    <View style={styles.containerImage}>
                        <View style={styles.cardImage}>
                            <ImageBackground source={require('../../assets/icons/Sushi.png')} style={styles.img_bg} >
                                <Text style={styles.ImageName}>Sushi</Text>
                            </ImageBackground>
                        </View>
                        <View style={styles.cardImage}>
                            <ImageBackground source={require('../../assets/icons/Family Meals1.png')} style={styles.img_bg} >
                                <Text style={styles.ImageName}>bolognaise</Text>
                            </ImageBackground>
                        </View>
                    </View>
                    <View style={styles.containerImage}>
                        <View style={styles.cardImage}>
                            <ImageBackground source={require('../../assets/icons/Family Meals2.png')} style={styles.img_bg} >
                                <Text style={styles.ImageName}>Sushi</Text>
                            </ImageBackground>
                        </View>
                        <View style={styles.cardImage}>
                            <ImageBackground source={require('../../assets/icons/Family Meals3.png')} style={styles.img_bg} >
                                <Text style={styles.ImageName}>Family Meals</Text>
                            </ImageBackground>
                        </View>
                    </View>
                    <View style={styles.containerImage}>
                        <View style={styles.cardImage}>
                            <ImageBackground source={require('../../assets/icons/Family Meals4.png')} style={styles.img_bg} >
                                <Text style={styles.ImageName}>Hamburger</Text>
                            </ImageBackground>
                        </View>
                        <View style={styles.cardImage}>
                            <ImageBackground source={require('../../assets/icons/Family Meals5.png')} style={styles.img_bg} >
                                <Text style={styles.ImageName}>Sushi</Text>
                            </ImageBackground>
                        </View>
                    </View>
                    <View style={styles.containerImage}>
                        <View style={styles.cardImage}>
                            <ImageBackground source={require('../../assets/icons/Family Meals6.png')} style={styles.img_bg} >
                                <Text style={styles.ImageName}>Family Meals</Text>
                            </ImageBackground>
                        </View>
                        <View style={styles.cardImage}>
                            <ImageBackground source={require('../../assets/icons/Family Meals7.png')} style={styles.img_bg} >
                                <Text style={styles.ImageName}>Sushi</Text>
                            </ImageBackground>
                        </View>
                    </View>
                </ScrollView>
            </View>

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
        justifyContent: "flex-end"
    },
    img_bg:{
        width: '100%',
        height: '100%',
        justifyContent:'center',
        alignItems:'center',
    },
    containerImage:{
        flexDirection: 'row',
        justifyContent:'space-between',
        margin:5

    },
    Top:{
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    cardImage:{
        width: '48%',
        height: 200,
        margin:5,
        justifyContent:'center',
        alignItems:'center',
    },
    ImageName:{
        justifyContent:'center',
        alignItems:'center',
        color: '#fff',
        fontWeight:'500',
        fontSize: 20

    }

});
