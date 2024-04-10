
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { UserHomeScreen } from "../Screens/restaurant/UserHomeScreen";
import { SearchScreen } from "../Screens/restaurant/SearchScreen";
import { OrderScreen } from "../Screens/restaurant/OrderScreen";
import { UserScreen } from "../Screens/restaurant/UserScreen";
import { GroceryScreen } from "../Screens/restaurant/GroceryScreen";
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import  color   from "../tools/colors";
import { Tabbutton } from "../components/TabButton";

import { MaterialCommunityIcons } from "react-native-vector-icons/MaterialCommunityIcons";
const homeIcon = require('../assets/icons/home.png');
const search = require('../assets/icons/search-removebg-preview.png')
const user = require('../assets/icons/User-removebg-preview.png')
const grocery = require('../assets/icons/Grocery-removebg-preview.png')
const Tab = createBottomTabNavigator();


export function MainTabNavigator({navigation}) {

    return (
        <Tab.Navigator
            screenOptions={
                {
                    tabBarActiveTintColor: color.primary,
                    tabBarInactiveTintColor: color.inActiveTintColor,
                    headerShown:false,
                    tabBarStyle: {
                        paddingTop:4 ,
                        paddingBottom: 15,
                        height:80
                    },
                    // tabBarActiveBackgroundColor: 'red'

                }
            }   
        >
            <Tab.Screen name="HomeUser" component={UserHomeScreen}
                options={
                    {
                        tabBarIcon: ({ color, size }) => (<Image source={homeIcon} style={{ width: 40, height: 40 }} />)

                    }
                } />
            <Tab.Screen name="Search" component={SearchScreen}
              options={
                {
                    tabBarIcon: ({ color, size }) => (<Image source={search} style={{ width: 30, height: 30 }} />)

                }
            }  />
            <Tab.Screen name="Order" component={OrderScreen}
             options={
                {
                    tabBarIcon: ({ color, size }) => ( 
                        <Tabbutton navigation={navigation}/>),
                        tabBarLabel:" "

                }
            }
             />
            <Tab.Screen name="User" component={UserScreen} 
             options={
                {
                    tabBarIcon: ({ color, size }) => (<Image source={user} style={{ width: 30, height: 30 }} />)

                }
            } 
            />
            <Tab.Screen name="Grocery" component={GroceryScreen} 
             options={
                {
                    tabBarIcon: ({ color, size }) => (<Image source={grocery} style={{ width: 50, height: 50 }} />)

                }
            } 
            />
        </Tab.Navigator>

    );
};
