import React from 'react';
import { SafeAreaView,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
    View,
    Button
} from 'react-native';
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core';


import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';



export function Welcome(){

    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('UserIdentification')
    }


    return(
        <View style={styles.container} >
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas de {'\n'}
                forma fácil {'\n'}
                
                </Text>
                
                <Image
                    source={wateringImg}
                    style={styles.image}
                    resizeMode='contain'
                    
                />

                <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.
                </Text>

                
                    <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.8}                    
                    >
                        <Feather
                            name="chevron-right"
                            style={styles.buttonIcon}
                            onPress={handleStart}
                        />            
                    </TouchableOpacity>
                
            </View> 
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
             
    },
    wrapper: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
    },
    
    title: {
        fontSize: 38,        
        textAlign: 'center',        
        color: colors.heading,
        paddingTop: 40,
        fontFamily: fonts.heading,
        lineHeight: 45 ,
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text,
    },

    image:{
    height: Dimensions.get('window').width * 0.7,
     
    }, 
    
    button: {        
        backgroundColor: colors.green, 
        justifyContent: 'center',
        alignItems: 'center',       
        borderRadius: 16,
        marginBottom: 50,
        height:56,
        width:56,
                    
    },    
    buttonIcon:{
        fontSize: 32,
        color: colors.white,  
    }
})

