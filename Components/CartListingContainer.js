import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const CartListingContainer = (props) => {

    //render
    return (
        <View style={{ flexDirection: 'row', paddingVertical: 10, backgroundColor: 'white', borderRadius: 20, marginHorizontal: 8, marginVertical: 6, elevation: 8 }}>
            <View style={{
                paddingHorizontal: 8
            }}>
                <TouchableOpacity>
                    {/* <LinearGradient colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0, 0.3)']} style={{
                        borderRadius: 15,
                        alignItems: 'center',
                        paddingHorizontal: 8,
                        marginBottom: 8
                    }}> */}
                    <Image source={props.imageSource} style={{ resizeMode: 'contain', height: 125, width: 90 }} />
                    {/* </LinearGradient> */}
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ marginTop: 8, color: 'black', fontWeight: 'bold', fontSize: 18 }}>Strawberry Daiquiri</Text>
                <Text style={{ color: 'black', fontSize: 16, width: 160, paddingTop: 8 }}>Strawberry Daiquiri with rum and strawberries</Text>
                <Text style={{ color: 'black', fontSize: 12, width: 160, paddingTop: 8 }}>$5.99</Text>
            </View>
            {/* <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 1, backgroundColor: 'black' }} /> */}
        </View>
    );
}

export default CartListingContainer;

const styles = StyleSheet.create({
    drinkNameStyle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }

})