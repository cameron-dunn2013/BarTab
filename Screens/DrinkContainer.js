import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const DrinkContainer = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.3)']} style={styles.containerBG}>
                    <Image source={props.imageSource} style={{ resizeMode: 'contain', height: 175, width: 150 }} />
                    <Text style={styles.drinkNameStyle}>{props.drinkName}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}

export default DrinkContainer;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8
    },
    containerBG: {
        borderRadius: 15,
        alignItems: 'center',
        paddingHorizontal: 10
    },
    drinkNameStyle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 20
    }

})