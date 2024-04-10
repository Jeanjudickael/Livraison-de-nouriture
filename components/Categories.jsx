import React from 'react';
import { ScrollView, StyleShee, Text ,Image , TextInput , TouchableOpacity, View , StyleSheet} from 'react-native';
import { BannerData } from "../data/Bannerdata";
import tw from 'tailwind-react-native-classnames';
export function Categories ({}){
  return (
   <View >
   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {
        BannerData.map((item , idx) =>{
            return (
                <TouchableOpacity style={styles.itemContainer} key={idx}>
                    <Image 
                    key={idx.toString}
                    source={item.image}
                    style={tw`w-8 h-8`}
                    />
                    <Text>{item.text}</Text>
                </TouchableOpacity>
            )
        })
    }

   </ScrollView>
   </View>

  );
};



const styles = StyleSheet.create({
    itemContainer: {
        marginHorizontal: 8,
        marginVertical: 4,
        alignItems: 'center',
        backgroundColor: '#F3F4F6',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    image: {
        width: 40,
        height: 40,
    },
    text: {
        fontSize: 16,
        marginTop: 5,
        textAlign: 'center',
    },
});



