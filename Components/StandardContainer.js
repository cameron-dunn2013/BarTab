import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const StandardContainer = (props) => {
    function IsHomeScreen() {
        if (!props.isColoredBG) {
            return (
                <View style={{
                    borderRadius: 15,
                    alignItems: 'center',
                    paddingHorizontal: 8,
                    backgroundColor: 'white'
                }}>
                    <Image source={props.imageSource} style={{ resizeMode: 'contain', height: 175, width: 150 }} />
                    <TouchableOpacity style={{ backgroundColor }}>
                    </TouchableOpacity>
                </View>)
        } else {
            return (
                <LinearGradient colors={['rgba(255,27,107,0.5)', 'rgba(69, 202, 255, 0.5)']} style={{
                    borderRadius: 15,
                    alignItems: 'center',
                    paddingHorizontal: 2
                }}>
                    <Image source={props.imageSource} style={{ resizeMode: 'contain', height: 175, width: 150 }} />
                    <Text style={styles.drinkNameStyle}>{props.drinkName}</Text>
                </LinearGradient>)
        }
    }

    //render
    return (
        <View style={{
            paddingHorizontal: props.containerPadding
        }}>
            <TouchableOpacity>
                <IsHomeScreen />
            </TouchableOpacity>
        </View>
    );
}

export default StandardContainer;

const styles = StyleSheet.create({
    drinkNameStyle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 20
    }

})