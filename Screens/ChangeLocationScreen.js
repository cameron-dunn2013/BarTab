import React from 'react'
import { View, Text, StyleSheet, TextInput, Image, Dimensions, ImageBackground } from 'react-native'
import MapView from 'react-native-maps'
import LinearGradient from 'react-native-linear-gradient'
import BackgroundDark from '../Assets/Background_dark.jpg'




const ChangeLocationScreen = () => {
    const window = Dimensions.get('window');
    return (
        <View style={styles.container}>
            <ImageBackground source={BackgroundDark} style={{ height: window.height, width: window.width * 0.9, bottom: 0, left: 0, right: 0, alignContent: 'center' }}>
                <View style={{ marginTop: 20, zIndex: 15, backgroundColor: 'transparent', alignContent: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'Poppins-Bold', backgroundColor: 'transparent', color: 'white' }}>{'Bars Near You'}</Text>
                    <View style={{ borderRadius: 20, overflow: 'hidden', marginHorizontal: 20, marginTop: 20 }}>

                        {/* Map */}
                        <MapView style={{ height: 300, alignSelf: 'stretch' }}
                            initialRegion={{
                                latitude: 38.253219,
                                longitude: -85.739161,
                                latitudeDelta: 0.011,
                                longitudeDelta: 0.011,
                            }}
                        />
                    </View>
                </View>

                {/* Location Listings */}
                <View style={{ marginTop: 20 }}>
                    <View style={{ alignSelf: 'stretch', backgroundColor: 'white', height: 60, borderRadius: 15, marginHorizontal: 20, justifyContent: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18, color: 'black', textAlign: 'center' }}>Diamonds Pub & Billiards</Text>
                    </View>

                    <View style={{ alignSelf: 'stretch', backgroundColor: 'white', height: 60, borderRadius: 15, marginHorizontal: 20, justifyContent: 'center', marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18, color: 'black', textAlign: 'center' }}>O'Shaes Irish Pub</Text>
                    </View>

                    <View style={{ alignSelf: 'stretch', backgroundColor: 'white', height: 60, borderRadius: 15, marginHorizontal: 20, justifyContent: 'center', marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18, color: 'black', textAlign: 'center' }}>Highlands Tap Room</Text>
                    </View>

                    <View style={{ alignSelf: 'stretch', backgroundColor: 'white', height: 60, borderRadius: 15, marginHorizontal: 20, justifyContent: 'center', marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18, color: 'black', textAlign: 'center' }}>Galaxie Bar</Text>
                    </View>
                </View>
            </ImageBackground>

        </View>
    );
}

export default ChangeLocationScreen;

const styles = StyleSheet.create({
    container: {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        position: 'absolute',
        backgroundColor: 'white',
        zIndex: 10,
        borderRadius: 20,
        overflow: 'hidden',
        alignItems: 'center'
    },
    backgroundGradient: {
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        position: 'absolute'
    }
})