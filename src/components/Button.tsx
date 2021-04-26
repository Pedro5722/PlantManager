import React from 'react';
import { StyleSheet, TouchableOpacity,TouchableOpacityProps, Text } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface buttonProps extends TouchableOpacityProps {
    content: string,
}

export function Button({content, ...rest} : buttonProps){
    return(        
        <TouchableOpacity style={styles.container} {...rest}>
            <Text style={styles.text}>
                {content}
            </Text>
        </TouchableOpacity>        
    )
}

const styles = StyleSheet.create({
    container:{ 
        backgroundColor: colors.green,
        alignItems: 'center',
        justifyContent: 'center',
        width: 231,
        height: 56,
        borderRadius:16,
    },
    text:{
        fontSize: 17,
        color: colors.white,
    },
})