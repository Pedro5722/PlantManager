import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,

} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import {Button} from '../components/Button';

export function UserIdentification(){

    const navigation = useNavigation();
    function handleSubmit(){
        navigation.navigate('Confirmation')
    }

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!name);
        
    }
    function handleInputFocus(){
        setIsFocused(true);
    }
    function handleInputChange(value: string){
        setIsFilled(!!value);
        setName(value);

    }

    return(
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == 'ios' ? 'padding' : 'heigth'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.content}>

                    <View style={styles.form}>
                        <Text style={styles.emoji}>
                        {isFilled ? '😄' : '😃'}
                        </Text>

                        <Text style={styles.title}>
                        Como podemos {'\n'}
                        chamar você? {'\n'}
                        </Text>

                        
                            <TextInput style={[
                                styles.input,
                                (isFocused || isFilled) && {borderColor: colors.green}
                            ]}
                            placeholder='Digite seu nome aqui'
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                            />
                        
                        
                            <Button
                            content="Confirmar"
                            onPress={handleSubmit}
                            />                       

                    </View> 

                </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content:{
        flex: 1,
        width: '100%',
        alignContent: 'center',
    },
    form:{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal:54,
        alignItems: 'center',
    },
    emoji:{
        fontSize: 44
    },
    title:{
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop:20,
    },    
    input:{
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize:18,
        marginTop: 50,
        marginBottom: 50,
        padding:10,
        textAlign: 'center',
    },
    
})