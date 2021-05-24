import React from 'react'
import { View, Text, StyleSheet, TextInput, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import MapView from 'react-native-maps'
import BackgroundDark from '../Assets/Background_dark.jpg'
import Icon from 'react-native-vector-icons/MaterialIcons'





const ChangeLocationScreen = ({ navigation }) => {
    const window = Dimensions.get('window');
    return (
        <View style={styles.container}>
            {/* Close Button */}
            <View style={{ elevation: 10, justifyContent: 'center', alignContent: 'center', position: 'absolute', left: 20, top: 20, zIndex: 10, backgroundColor: 'white', height: 30, width: 35, borderRadius: 25 }}>
                <TouchableOpacity onPress={(props) => navigation.pop()} style={{ elevation: 5, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                    <Icon name="arrow-back" size={15} style={{ textAlign: 'center', alignSelf: 'center', color: 'black' }} />
                </TouchableOpacity>
            </View>
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