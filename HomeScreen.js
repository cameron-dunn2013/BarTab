import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import DrinkContainer from './DrinkContainer'
const HomeScreen = () => {
    try {
        const response = changeNavigationBarColor('transparent');
        console.log(response)// {success: true}
    } catch (e) {
        console.log(e)// {success: false}
    }
    return (
        <View style={styles.container}>
            <LinearGradient style={styles.backgroundGradient} colors={['#ff1b6b', '#45caff']} />
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>BarTab</Text>
                <Text style={styles.subHeaderText}>Welcome back, Cameron!</Text>

            </View>
            <View style={{ marginTop: 40, position: 'absolute', top: 70, left: 0, right: 0 }}>
                <View style={{ paddingLeft: 20, alignSelf: 'stretch' }}>
                    <Text style={{ textAlign: 'left', color: 'white', fontWeight: 'bold', fontSize: 16 }}>Recently Ordered:</Text>
                    <ScrollView horizontal>
                        <DrinkContainer imageSource={require('./Assets/Drinks/Daiquiri.png')} />

                    </ScrollView>
                </View>

            </View>

        </View >
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    backgroundGradient: {
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        position: 'absolute'
    },
    headerText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },
    subHeaderText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
    headerContainer: {
        top: 40,
        position: 'absolute'
    },
    subText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 25,
        alignContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        textAlign: 'center'
    }
})