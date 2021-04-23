import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, StatusBar } from 'react-native'
import DrinkVideo from '../Assets/DrinkMovie.mov'
import Video from 'react-native-video'
import LinearGradient from 'react-native-linear-gradient'
import changeNavigationBarColor from 'react-native-navigation-bar-color'



export default function LoginScreen({ navigation }) {
    try {
        const response = changeNavigationBarColor('transparent');
        console.log(response)// {success: true}
    } catch (e) {
        console.log(e)// {success: false}
    }

    return (
        <View style={styles.container} >
            <Video source={DrinkVideo} style={styles.backgroundVideo} resizeMode='cover' repeat={true} />
            <Text style={[styles.titleText, { position: 'absolute', top: 150 }]}>Welcome To BarTab!</Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate('HomeScreen')
            }}>

                <LinearGradient colors={['#8B008B', '#8B2354']} style={styles.RoundedButton}>
                    <Text style={styles.buttonText}>Log In</Text>
                </LinearGradient>

            </TouchableOpacity>
            <TouchableOpacity>

                <LinearGradient colors={['#8B008B', '#8B0054']} style={[styles.RoundedButton, { marginBottom: 40 }]}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </LinearGradient>

            </TouchableOpacity>


        </View>


    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundVideo: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        backgroundColor: '#000'
    },
    titleText: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    RoundedButton: {
        width: 200,
        height: 45,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        shadowRadius: 2,
        shadowOpacity: 0.8,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        elevation: 20
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }

});