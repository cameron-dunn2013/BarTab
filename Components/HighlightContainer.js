import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const HighlightContainer = (props) => {
    return (
        <View style={styles.constainer}>
            <TouchableOpacity>
                <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(255,255,255,0.5)']} style={styles.containerBG}>
                    <Image source={props.imageSource} style={{ resizeMode: 'contain', height: 175, width: 150 }} />
                    <Text style={styles.drinkNameStyle}>{props.drinkName}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}
export default HighlightContainer;

const styles = StyleSheet.create({
    constainer: {
        paddingHorizontal: 8
    },
    containerBG: {
        borderRadius: 15,
        alignItems: 'center',
        paddingHorizontal: 90
    },
    drinkNameStyle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 20
    }
})